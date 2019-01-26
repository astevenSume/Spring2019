enum Ns {SkullCoin,Lightning,Lock} //负面状态
enum NonSustain {bomb,goldencoin} //非持续技能，比如吃金币
class PlayScene extends eui.Component implements  eui.UIComponent {

	public p_role: eui.Group
	public pig: eui.Image
	public gold_pig: GoldPig //金猪实例
	public per_name: eui.Label
	public p_score: eui.Label
	public my_pig: eui.Image
	public pbtn_return: eui.Button
	public group_tool: eui.Group
	public positive_group: eui.Group
	public icon_progressbar: eui.Image
	public nagetive_group: eui.Group
	public p_heart_num: eui.Label

	public cleansing_num: eui.Label
	public shield_num: eui.Label
	public double_num: eui.Label
	public common_num: eui.Label

	//结束显示
	public over_group: eui.Group
	public res_score: eui.Label
	public res_unit: eui.Label
	public btn_again: eui.Button
	public icon_endclose: eui.Button
	public relife_group: eui.Group
	public pbtn_relife : eui.Button
	public pbtn_over_now : eui.Button

	public nicon_skullcoin: eui.Image
	public nicon_lightning: eui.Image
	public nicon_lock: eui.Image

	private _findex:number 						//基础计数
	private _create_tool_base_speed:number 		//基础速度
	private _create_tool_speed:number  			//创建道具的速度 
	public down_speed:number    				//道具下落速度
	public current_speed:number					//记录当前速度
	
	private _score:number = 0
	public enemy_list: Enemy[] =[]

	public positive_status:boolean  			//道具状态
	public nagetive_status:boolean[]			//负面状态，对应枚举Ns使用
	public nagetive_index:number[]				//负面计数，对应枚举Ns使用
	public nagetive_shapes:egret.Shape[]			//负面进度 （圆圈）
	public nagetive_icons:eui.Image[]

	public positive_name:string      //增益道具名字
	private _positive_time:number     //增益施放时长
	private _positive_index:number	
	private _progress_bar_width:number //进度条宽度
	private tool_icon: eui.Image	

	private _nagetive_time:number  //负面施放时长
	private _nagetive_radius: number
	private _PI: number = Math.PI
	private _oneDegree: number = Math.PI/180

	public onShield:boolean //是否有盾
	public isPause:boolean  //是否停止游戏


	public constructor() {
		super();
		this.game_init(true)

	}
	public game_init (first?: boolean) {
		this._findex = 0

		if (this.enemy_list.length>0) {
			this.enemy_list.forEach((emy)=>{
				if (emy.parent)this.removeChild(emy)
			})
		}
		this.enemy_list = []
		this.score = 0


		this._create_tool_speed = 15
		this._create_tool_base_speed = 15    //初始50
		this.down_speed = this.current_speed = 10				 //初始3
		
		this.positive_status = false

		this._positive_time = 90
		this._positive_index = 0
		this.positive_name = 'none'

		this._nagetive_time = 90								//影响时间
		this.nagetive_status = [false,false,false]				//是否开启
		this.nagetive_index = [0,0,0]
		this.nagetive_shapes = [new egret.Shape(), new egret.Shape(), new egret.Shape()]

		this._nagetive_radius = 15
		this.onShield = false
		if(first)this.isPause = false
		if(!first) {
			if (this.relife_group.visible)this.relife_group.visible = false
		}
	}

	public get score() {
		return this._score
	}

	public set score(n:number) {
		this._score = n
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		this.init_me()		

		this.pbtn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=> {
			SceneManager.toMainScene()
		}, this)

		this.group_tool.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickToolGroup, this)

		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)
		
		//初始创建
		this.randomGetTool()
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance)
	}

	private init_me() {		
		this.gold_pig = new GoldPig(this.pig)
		this.per_name.text = localStorage.getItem('uname')
		this.nagetive_icons = [this.nicon_skullcoin, this.nicon_lightning, this.nicon_lock]

		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (evt)=>{
			this.gold_pig.init_x = evt.stageX
		}, this)

		this.addEventListener(egret.TouchEvent.TOUCH_MOVE, (evt)=>{
			if (this.nagetive_status[Ns.Lock]==true)return
			this.gold_pig.move(evt, this.p_role)
		}, this)

		this._progress_bar_width = this.icon_progressbar.width
	}

	private enoughPositive(tool_name: string):boolean {
		
		let label_tool:eui.Label
		if (tool_name == 'yaoshui') {
			label_tool = eval('this.cleansing_num')
		} else if (tool_name == 'dj_sh88_png') {
			label_tool = eval('this.shield_num')
		} else if (tool_name == 'dj_double_png') {
			label_tool = eval('this.double_num')
		} else if (tool_name == 'dj_time88_png') {
			label_tool = eval('this.common_num')
		}
		

		let num_str = label_tool.text
		let c_num = parseInt(num_str.slice(1))
		if (c_num == 0)return false
		console.log('c_num : ' + c_num)
		label_tool.text = 'x' + (c_num-1)


		return true
	}

	private clickToolGroup(evt) {
		if (evt.target.numElements)	{	
			console.log('点到空白处...')
			return
		}

		let enoughNum = this.enoughPositive(evt.target.name)
		if(!enoughNum)return

		if (evt.target.name == 'yaoshui') {

			this.cleanAllNagetive()
			return
		} 

		this.showPositiveBar(evt.target.name)
		if (evt.target.name== 'dj_sh88_png')this.onShield=true
		if (evt.target.name== 'dj_time88_png') {
			this.current_speed = this.down_speed
			this.down_speed = 3
		}
		

	}

	//删除
	private removeEnemy(emy:Enemy) {
		if(emy.parent)this.removeChild(emy)
		this.enemy_list.splice(this.enemy_list.indexOf(emy), 1)					
		emy=null
	}

	/*
	 *	添加
	 *  rate指定创建固定道具
	*/
	private getGoldencoin() :string {
		let coin = '' 
		let rdm = Math.random()
		if (rdm < 0.6) {
			coin = 'GoldenCoin(10)'
		} else if (rdm < 0.8) {
			coin = 'GoldenCoin(100)'
		} else if (rdm < 0.88) {
			coin = 'GoldenCoin(1000)'
		} else if (rdm < 1) {
			coin = 'GoldenCoin(10000)'
		}		
		return coin
	}
	private golden_coin_rate = 50	
	private randomGetTool(rate?: number): void {
		let show_tool: string
		
		let commom_speed_rate = this.golden_coin_rate + 3 	//53
		let double_coin_rate = commom_speed_rate + 3 		//56
		let heart_rate = double_coin_rate + 1  				//57
		let lightning_rate = heart_rate + 9 				//66
		let skull_coin_rate = lightning_rate + 5 			//71
		let lock_rate = skull_coin_rate + 10 				//81
		let shield_rate = lock_rate + 4 					//85
		let bomb_rate = shield_rate + 12 					//97
		let cleansing = bomb_rate + 1 						//98		
		// console.log(commom_speed_rate)
		// console.log(double_coin_rate)
		// console.log(heart_rate)
		// console.log(lightning_rate)
		// console.log(skull_coin_rate)
		// console.log(lock_rate)
		// console.log(shield_rate)
		// console.log(bomb_rate)
		// console.log(cleansing)


		let rdm_num = Math.random()*100
		if (rate>0)rdm_num=rate
		if (rdm_num < this.golden_coin_rate) {
			show_tool = this.getGoldencoin()		
		} else if ( rdm_num < commom_speed_rate) {
			show_tool = 'CommonSpeed()'
		} else if ( rdm_num < double_coin_rate) {
			show_tool = 'DoubleCoin()'
		} else if ( rdm_num < heart_rate) {
			show_tool = this.getGoldencoin()
			// show_tool = 'Heart()' //不再掉心
		} else if ( rdm_num < lightning_rate) {
			show_tool = 'Lightning()'
		} else if ( rdm_num < skull_coin_rate) {
			show_tool = 'SkullCoin()'
		} else if ( rdm_num < lock_rate) {
			show_tool = 'Lock()'
		} else if ( rdm_num < shield_rate) {
			show_tool = 'Shield()'
		} else if ( rdm_num < bomb_rate) {
			show_tool = 'Bomb()'
		} else if ( rdm_num < cleansing) {
			show_tool = 'Cleansing()'
		} else {
			show_tool = this.getGoldencoin()
		}
		//todo负效果时，只出现金币和其它负效果


		let tool = eval(`new ${show_tool}`)
		this.enemy_list.push(tool)
		this.addChild(tool)
	}

	public showPositiveBar(name: string) {
		this.group_tool.visible = false
		this.positive_group.visible = true

		this.positive_status = true
		this.positive_name = name

		this.tool_icon.texture = RES.getRes(name)

	}
	public closePositive() {
		this.group_tool.visible = true
		this.positive_group.visible = false

		this.positive_status = false
		this._positive_index = 0

		if (this.positive_name == 'dj_time88_png')this.down_speed = this.current_speed
		if (this.positive_name == 'dj_sh88_png')this.onShield = false
		this.positive_name = 'none'

		this.icon_progressbar.scaleX = 1

	}
	public cleanAllNagetive() {
		console.log('使用了净化药水。。。')


		//effected净化
		this.down_speed = this.current_speed

		//显示净化
		this.nagetive_status.forEach((v,k)=>{
			this.nagetive_status[k] = false
			this.nagetive_index[k] = 0
			if (this.nagetive_shapes[k].parent)this.nagetive_group.removeChild(this.nagetive_shapes[k])			
			if (this.nagetive_icons[k].visible)this.nagetive_icons[k].visible = false
			if (!this.per_name.visible)this.per_name.visible = true			
		})
	}

	private eatedFlag:boolean = false
	//检测吃到道具并施放技能
	private toolEated<T extends Enemy>(tool: T, emy: Enemy) : void {		
		this.eatedFlag = this.pig.hitTestPoint(tool.btm_tool.x+28.5, emy.y+57)
		if (this.eatedFlag === true) {			
			tool.onStatus(this, emy)
			tool.skill(this, emy)
			// if (emy.name == 'bomb')return
			this.removeEnemy(emy)	
		}
	}


	private onEnterFrame(evt) {
		if(this.isPause)return
		this._findex += 1

		//增益道具的使用
		if (this.positive_status) {
			this._positive_index++
			if (this.positive_name != 'none') {
				this.icon_progressbar.scaleX -= 1/this._positive_time		
				if (this._positive_index >= this._positive_time) {
					this.closePositive()
				}
			}
		}

		//负面道具的效果显示
		if (!this.onShield) {
			this.nagetive_status.forEach((data,key) => {			
				if (data == true) {				
					this.nagetive_index[key]++
						
					this.nagetive_shapes[key].graphics.clear()		
					this.nagetive_shapes[key].graphics.lineStyle(2, 0xff0000)
					this.nagetive_shapes[key].graphics.drawArc((key*2+1)*this._nagetive_radius,this._nagetive_radius,this._nagetive_radius,-90*this._oneDegree, (270-360/this._nagetive_time*this.nagetive_index[key])*this._oneDegree-this._oneDegree)
									
					if (this.nagetive_index[key] >= this._nagetive_time) {
						//解除状态
						this.nagetive_status[key] = false
						this.nagetive_index[key] = 0
						this.nagetive_group.removeChild(this.nagetive_shapes[key])					
						this.nagetive_icons[key].visible = false

						let nagetive_status_flag = false
						this.nagetive_status.forEach((flag)=>{
							if (flag)nagetive_status_flag=true
						})
						if (nagetive_status_flag == false)this.per_name.visible = true

						if (key == Ns.Lightning) {
							this.down_speed = this.current_speed
						}
					}
				}
			
			})
		}
		

		//创建道具
		if (this._findex > this._create_tool_speed) {
			this._findex = 0
			this.randomGetTool()
			if (Math.random()>0.5)this._create_tool_speed = this._create_tool_base_speed + 5*Math.random()	
			else this._create_tool_speed = this._create_tool_base_speed - 5*Math.random()
		}
		

		//判断是否吃到道具		
		this.enemy_list.forEach( (emy: Enemy) => {
			emy.y+=this.down_speed
			
			if (emy.y > 500) {
				if (emy.y > 560) {
					this.removeEnemy(emy)
				}

				switch(emy.name) {
					case 'goldencoin':
						let golden_coin = <GoldenCoin>emy
						this.toolEated(golden_coin, emy)					
					break
					case 'bomb' :
						let bomb = <Bomb>emy
						this.toolEated(bomb, emy)			
					break
					case 'commonspeed' :
						let commonspeed = <CommonSpeed>emy
						this.toolEated(commonspeed, emy)
					break
					case 'doublecoin' :
						let doublecoin = <DoubleCoin>emy
						this.toolEated(doublecoin, emy)
					break
					case 'heart' : 
						let heart = <Heart>emy
						this.toolEated(heart, emy)
					break
					case 'lightning' : 
						let lightning = <Lightning>emy
						this.toolEated(lightning, emy)
					break
					case 'lock' : 
						let lock = <Lock>emy
						this.toolEated(lock, emy)
					break
					case 'shield' : 
						let shield = <Shield>emy
						this.toolEated(shield, emy)
					break	
					case 'cleansing' : 
						let cleansing = <Shield>emy
						this.toolEated(cleansing, emy)
					break
					case 'skullcoin' :
						let skullcoin = <SkullCoin>emy
						this.toolEated(skullcoin, emy)
					break

				}	
			}	

		})

	}

	static getRandomX():number {
		return Math.floor(Math.random() * SceneManager.instance._stage.stage.stageWidth)
	}

	static getToolBitmap(img_id: string): egret.Bitmap {
		let bitmap = new egret.Bitmap()
		bitmap.texture = RES.getRes(img_id)
		
		let rdm_x = PlayScene.getRandomX()
		if (rdm_x > SceneManager.instance._stage.stage.stageWidth-57)rdm_x=SceneManager.instance._stage.stage.stageWidth-57		

		bitmap.width = 57
		bitmap.height = 57
		bitmap.x = rdm_x
		bitmap.y = 0

		return bitmap
	}
	//效果而已
	// private showAlltool() {
		// let gold_coin = new GoldenCoin(10)
		// this.enemy_list.push(gold_coin)
		// this.addChild(gold_coin)			
		
		// let bomb = new Bomb()
		// this.enemy_list.push(bomb)
		// this.addChild(bomb)
		
		// let coms = new CommonSpeed()
		// this.enemy_list.push(coms)
		// this.addChild(coms)

		// let db_coin = new DoubleCoin()
		// this.enemy_list.push(db_coin)
		// this.addChild(db_coin)

		// let heart = new Heart()
		// this.enemy_list.push(heart)
		// this.addChild(heart)

		// let lightning = new Lightning()
		// this.enemy_list.push(lightning)
		// this.addChild(lightning)

		// let lock = new Lock()
		// this.enemy_list.push(lock)
		// this.addChild(lock)

		// let shield = new Shield()
		// this.enemy_list.push(shield)
		// this.addChild(shield)
	// } 

	
}