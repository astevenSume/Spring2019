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

	public nicon_skullcoin: eui.Image
	public nicon_lightning: eui.Image
	public nicon_lock: eui.Image

	private _findex:number 						//基础计数
	private _create_tool_base_speed:number 		//基础速度
	private _create_tool_speed:number  			//创建道具的速度 
	private _down_speed:number    				//道具下落速度
	
	private _score:number = 0
	private enemy_list: Enemy[] =[]

	public positive_status:boolean  			//道具状态
	public nagetive_status:boolean[]			//负面状态，对应枚举Ns使用
	public nagetive_index:number[]				//负面计数，对应枚举Ns使用
	public nagetive_shape:egret.Shape[]			//负面进度 （圆圈）

	// public zeroCoin_status: boolean 			//是否有零金币状态
	// public increaseSpeed_status: boolean 	//是否有加束状态
	// public pigLock_status: boolean			//是否有锁状态

	private _positive_time:number  //增益施放时长
	private _positive_index:number
	private _positive_name:string      //增益道具名字
	private _progress_bar_width:number //进度条宽度
	private tool_icon: eui.Image	

	private _nagetive_time:number  //负面施放时长
	private _nagetive_radius: number
	private _PI: number = Math.PI
	private _oneDegree: number = Math.PI/180


	public constructor() {
		super();
		this._findex = 0
		this._create_tool_speed = 50
		this._create_tool_base_speed = 50    //初始50
		this._down_speed = 10				 //初始3
		this.positive_status = false

		this._positive_time = 90
		this._positive_index = 0		
		this._positive_name = 'none'		

		this._nagetive_time = 90
		this.nagetive_status = [false,false,false] 
		this.nagetive_index = [0,0,0] 
		this.nagetive_shape = [new egret.Shape(), new egret.Shape(), new egret.Shape()]

		this._nagetive_radius = 15
	}

	public get score() {
		return this._score
	}

	public set score(n:number) {
		this._score = n
	}
	public showPositiveBar(name: string) {
		this.group_tool.visible = false
		this.positive_group.visible = true

		this.positive_status = true
		this._positive_name = name

		this.tool_icon.texture = RES.getRes(name)

	}
	public hidePositiveBar() {
		this.group_tool.visible = true
		this.positive_group.visible = false

		this.positive_status = false
		this._positive_index = 0
		this._positive_name = 'none'

		this.icon_progressbar.scaleX = 1

	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance)
	}

	private init_me() {		
		this.gold_pig = new GoldPig(this.pig)
		this.per_name.text = localStorage.getItem('uname')
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, (evt)=>{
			this.gold_pig.init_x = evt.stageX
		}, this)

		this.addEventListener(egret.TouchEvent.TOUCH_MOVE, (evt)=>{
			this.gold_pig.move(evt, this.p_role)
		}, this)

		this._progress_bar_width = this.icon_progressbar.width
	}

	private positiveEffect(evt) {
		console.log('timerFunc connt : ' + (<egret.Timer>evt.target).currentCount)
	}

	private clickToolGroup(evt) {
		if (evt.target.numElements)	{			
			console.log('点到空白处...')
			return
		}

		this.showPositiveBar(evt.target.name)	

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
		this.randomGetTool(85)

		

		// let nagetive_icon: eui.Image = eval(`this.nicon_${Ns[0].toLowerCase()}`)
		// nagetive_icon.visible = true
		// console.log(nagetive_icon)
		
	}

	//删除
	private removeEnemy(emy:Enemy) {	
		this.removeChild(emy)
		this.enemy_list.splice(this.enemy_list.indexOf(emy), 1)					
		emy=null		
	}

	/*
	 *	添加
	 *  rate指定创建固定道具
	*/
	private golden_coin_rate = 60	
	private randomGetTool(rate?: number): void {
		let show_tool: string
		
		let commom_speed_rate = this.golden_coin_rate + 5
		let double_coin_rate = commom_speed_rate + 5
		let heart_rate = double_coin_rate + 1  //71
		let lightning_rate = heart_rate + 10 // 81
		let skull_coin_rate = lightning_rate + 5 //86
		let lock_rate = skull_coin_rate + 10 //91
		let shield_rate = lock_rate + 4 //95
		let bomb_rate = shield_rate + 3 //98
		let cleansing = bomb_rate + 2  

		let rdm_num = Math.random()*100
		if (rate>0)rdm_num=rate
		if (rdm_num < this.golden_coin_rate) {
			if (Math.random()<0.8)show_tool = 'GoldenCoin(10)'
			else show_tool = 'GoldenCoin(100000)'			
		} else if ( rdm_num < commom_speed_rate) {
			show_tool = 'CommonSpeed()'
		} else if ( rdm_num < double_coin_rate) {
			show_tool = 'DoubleCoin()'
		} else if ( rdm_num < heart_rate) {
			show_tool = 'Heart()'
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
		} else {
			show_tool = 'Cleansing()'
		} 

		let tool = eval(`new ${show_tool}`)
		this.enemy_list.push(tool)
		this.addChild(tool)		
	}

	private eatedFlag:boolean = false
	//检测吃到道具并施放技能
	private toolEated<T extends Enemy>(tool: T, emy: Enemy) : void {		
		this.eatedFlag = this.pig.hitTestPoint(tool.btm_tool.x, emy.y+57)
		if (this.eatedFlag === true) {
			if (eval(`NonSustain.${tool.name}`) != undefined) {
				tool.skill(this, emy) //立即施放
			} 
			
			tool.onStatus(this, emy)
			this.removeEnemy(emy)
		}
	}

	private onEnterFrame() {	
		var that = this
		this._findex += 1

		//判断是否使用道具
		if (this.positive_status) {
			this._positive_index++
			if (this._positive_name != 'none') {	
				this.icon_progressbar.scaleX -= 1/this._positive_time		
				if (this._positive_index >= this._positive_time) {
					this.hidePositiveBar()
				}
			}
		}

		this.nagetive_status.forEach((data,key) => {			
			if (data == true) {
				this.nagetive_index[key]++
					
				this.nagetive_shape[key].graphics.clear()		
				this.nagetive_shape[key].graphics.lineStyle(2, 0xff0000)
				this.nagetive_shape[key].graphics.drawArc((key*2+1)*this._nagetive_radius,this._nagetive_radius,this._nagetive_radius,-90*this._oneDegree, (270-360/this._nagetive_time*this.nagetive_index[key])*this._oneDegree-this._oneDegree)
								

				if (this.nagetive_index[key] >= this._nagetive_time) {
					//解除状态
					this.nagetive_status[key] = false
					this.nagetive_index[key] = 0
					this.nagetive_group.removeChild(this.nagetive_shape[key])
					eval(`that.nicon_${Ns[key].toLowerCase()}.visible=false`)

					let nagetive_status_flag = false
					this.nagetive_status.forEach((flag)=>{
						if (flag)nagetive_status_flag=true
					})
					if (nagetive_status_flag == false)this.per_name.visible = true
				}
			}
			
		})

		//创建道具
		if (this._findex > this._create_tool_speed) {
			this._findex = 0
			this.randomGetTool(89)
			if (Math.random()>0.5)this._create_tool_speed = this._create_tool_base_speed + 20*Math.random()	
			else this._create_tool_speed = this._create_tool_base_speed - 20*Math.random()
		}
		

		//判断是否吃到道具		
		this.enemy_list.forEach( (emy: Enemy) => {
			emy.y+=this._down_speed
			
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
		return Math.floor(Math.random() * SceneManager._width)
	}

	static getToolBitmap(img_id: string): egret.Bitmap {
		let bitmap = new egret.Bitmap()
		bitmap.texture = RES.getRes(img_id)
		
		let rdm_x = PlayScene.getRandomX()
		if (rdm_x > SceneManager._width-57)rdm_x=SceneManager._width-114		

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