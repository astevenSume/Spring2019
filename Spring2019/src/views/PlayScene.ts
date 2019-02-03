enum Ns {SkullCoin,Lightning,Lock} //负面状态
enum NonSustain {bomb,goldencoin} //非持续技能，比如吃金币
class PlayScene extends eui.Component implements  eui.UIComponent {

	private start_index: number = 1
	private pre_start: eui.Image
	private start_flag : boolean = false

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
	public btn_buy_tool: eui.Button
	public icon_endclose: eui.Button
	public relife_group: eui.Group
	public pbtn_relife : eui.Button
	public pbtn_over_now : eui.Button

	public nicon_skullcoin: eui.Image
	public nicon_lightning: eui.Image
	public nicon_lock: eui.Image

	private _findex:number 						//基础计数
	public create_tool_speed:number  			//创建道具的速度 
	public down_speed:number    				//道具下落速度
	public current_speed:number					//记录当前速度 ,只有加速时使用
	
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

	//速度调
	public speed_index: number
	public speed_level: number
	public create_speed_level: number
	public max_speed_ok: boolean //是否达到最高速

	//光盾
	public img_light_shield: eui.Image
	public light_rotation_angle: number

	//吃金币后上跳金币
	public add_coin_arr: eui.Label[]

	//祝贺词
	public congratulation_labe: eui.Label

	//超越显示开关 true代表显示过
	public group_surpass: eui.Group
	public lbl_surpass: eui.Label
	public surpass_flag_one = false
	public surpass_flag_two = false
	public surpass_flag_three = false
	public surpass_flag_four = false
	public surpass_flag_five = false
	public surpass_flag_six = false
	public surpass_flag_seven = false
	public surpass_flag_eight = false
	public surpass_flag_nine = false
	public surpass_flag_ten = false

	public lbl_times: eui.Label 
 
	public constructor() {
		super();		
		
		this.constructor_init(true)		
	}
	//初始化道具
	public initData() {	
		this.p_heart_num.text = 'x' + localStorage.getItem('revive_num')
		this.cleansing_num.text = 'x' + localStorage.getItem('clean_num')
		this.shield_num.text = 'x' + localStorage.getItem('shield_num')
		this.double_num.text = 'x' + localStorage.getItem('double_num')
		this.common_num.text = 'x' + localStorage.getItem('speed_num')
	}

	public constructor_init (first?: boolean) {
		this._findex = 0

		console.log(this.enemy_list)
		if (this.enemy_list.length>0) {
			this.enemy_list.forEach((emy)=>{
				this.removeEnemy(emy)
			})
		}
		this.score = 0

		//速度初始化
		this.create_tool_speed = 30
		this.down_speed = 3

		
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
		if (first) {
			this.isPause = false
			this.speed_index = 0
			this.speed_level = 0
		}
		if (!first) {
			if (this.relife_group.visible)this.relife_group.visible = false	
		}

		this.light_rotation_angle=0
		this.add_coin_arr = []
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
		this.initData()
		this.init_me()	//对主角金猪的初始化
		this.lbl_times.text = localStorage.getItem('current_tiems') + '/20'
		

		this.pbtn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=> {
			this.isPause = true
			SceneManager.toMainScene()
		}, this)

		this.group_tool.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickToolGroup, this)

		// this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)	//测试要关
		// this.randomGetTool()
		
		//倒计时
		var timer: egret.Timer = new egret.Timer(1000,4)
		this.pre_start.visible = true
		timer.addEventListener(egret.TimerEvent.TIMER, () => {
			this.start_index++
			if (this.start_index == 2) {
				this.pre_start.texture = RES.getRes("two_png")
			} else if (this.start_index == 3) {
				this.pre_start.texture = RES.getRes("one_png")
			} else if (this.start_index == 4) {
				this.pre_start.texture = RES.getRes("go_png")
			} else if (this.start_index == 5) {
				this.pre_start.visible = false
				this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)		
				//初始创建
				this.randomGetTool()
			}
		}, this)
		timer.start()
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance)
	}

	private init_me() {		
		this.gold_pig = new GoldPig(this.pig)
		this.per_name.text = localStorage.getItem('username')
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

	//是否能用并减1
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

	public common_speed_flag = false //true时为正常流速
	
	private clickToolGroup(evt) {
		if (evt.target.numElements)	{	
			console.log('点到空白处...')
			return
		}

		let enoughNum = this.enoughPositive(evt.target.name)
		if(!enoughNum)return
		//初始状态
		this.closePositive()
		this.userDatabaseTool(evt.target.name)

		if (evt.target.name == 'yaoshui') {
			console.log('使用了净化药水。。。')
			this.cleanAllNagetive()
			return
		}

		this.showPositiveBar(evt.target.name)

		if (evt.target.name== 'dj_sh88_png'){
			this.img_light_shield.visible = true
			this.onShield=true
		} else {
			this.img_light_shield.visible = false
			this.onShield=false
		}
		if (evt.target.name== 'dj_time88_png') {
			console.log('匀速药水...')		
			this.down_speed = 5
			this.create_tool_speed = 30
			this.common_speed_flag = true
		}
	}


	public userDatabaseTool(tname: string){
		//本地数据减少
		let now_num = ''
		switch(tname) {
				case 'revive':
					now_num = (parseInt(localStorage.getItem('revive_num'))-1) + ''
					localStorage.setItem('revive_num', now_num)
				break;
				case 'yaoshui':
					now_num = (parseInt(localStorage.getItem('clean_num'))-1) + ''
					localStorage.setItem('clean_num', now_num)
				break;
				case 'dj_double_png':
					now_num = (parseInt(localStorage.getItem('double_num'))-1) + ''
					localStorage.setItem('double_num', now_num)
				break;
				case 'dj_sh88_png':
					now_num = (parseInt(localStorage.getItem('shield_num'))-1) + ''
					localStorage.setItem('shield_num', now_num)
				break;
				case 'dj_time88_png':
					now_num = (parseInt(localStorage.getItem('speed_num'))-1) + ''
					localStorage.setItem('speed_num', now_num)
				break;
		}
		
		//
		console.log('到数据库减数据。。。' +　tname)
		let uid = localStorage.getItem('uid')
		HttpServerSo.requestPost(`way=use_tool&uid=${uid}&tname=${tname}`, (data: string)=> {
			// console.log(data)

		})
	}

	//删除
	public removeEnemy(emy:Enemy) {
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
		// if (rdm < 0.6) {
		// 	coin = 'GoldenCoin(10)'
		// } else 
		if (rdm < 0.5) {
			coin = 'GoldenCoin(100)'
		} else if (rdm < 0.85) {
			coin = 'GoldenCoin(1000)'
		} else if (rdm < 0.95) {
			coin = 'GoldenCoin(10000)'
		} else {
			coin = 'GoldenCoin(100000)'
		} 
		return coin
	}
	private golden_coin_rate = 10
	private commom_speed_rate = 0
	private double_coin_rate = 0
	private heart_rate = 0
	private lightning_rate = 0
	private skull_coin_rate = 0
	private lock_rate = 0
	private shield_rate = 0
	private bomb_rate = 0
	private cleansing = 0

	private randomGetTool(rate?: number): void {
		let show_tool: string
		
		this.commom_speed_rate = this.golden_coin_rate + 6 	
		this.double_coin_rate = this.commom_speed_rate + 3		
		this.heart_rate = this.double_coin_rate + 1  				
		this.lightning_rate = this.heart_rate + 4 			
		this.skull_coin_rate = this.lightning_rate + 5 			
		this.lock_rate = this.skull_coin_rate + 10 				
		this.shield_rate = this.lock_rate + 4 					
		this.bomb_rate = this.shield_rate + 12 					
		this.cleansing = this.bomb_rate + 1 								
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
		} else if ( rdm_num < this.commom_speed_rate) {
			show_tool = 'CommonSpeed()'
		} else if ( rdm_num < this.double_coin_rate) {
			show_tool = 'DoubleCoin()'
		} else if ( rdm_num < this.heart_rate) {
			show_tool = this.getGoldencoin()
			// show_tool = 'Heart()' //不再掉心
		} else if ( rdm_num < this.lightning_rate) {
			show_tool = 'Lightning()'
		} else if ( rdm_num < this.skull_coin_rate) {
			show_tool = 'SkullCoin()'
		} else if ( rdm_num < this.lock_rate) {
			show_tool = 'Lock()'
		} else if ( rdm_num < this.shield_rate) {
			show_tool = 'Shield()'
		} else if ( rdm_num < this.bomb_rate) {
			show_tool = 'Bomb()'
		} else if ( rdm_num < this.cleansing) {
			show_tool = 'Cleansing()'
		} else {
			show_tool = this.getGoldencoin()
		}

		// let dmx = Math.random()
		// if (dmx < 0.2) {
		// 	show_tool = 'Shield()'
		// } else if (dmx < 0.4) {
		// 	show_tool = 'DoubleCoin()'
		// } else if (dmx < 0.6) {
		// 	show_tool = 'Lock()'
		// } else if (dmx < 0.9) {
		// 	// show_tool = 'Cleansing()'
		// }
		//todo负效果时，只出现金币和其它负效果


		let tool = eval(`new ${show_tool}`)
		this.enemy_list.push(tool)
		this.addChild(tool)
	}

	public showPositiveBar(name: string) {
		this._positive_index = 0
		this.icon_progressbar.scaleX = 1
		this.group_tool.visible = false
		this.positive_group.visible = true

		this.positive_status = true
		this.positive_name = name

		this.tool_icon.texture = RES.getRes(name)

		if (this.positive_name == 'dj_double_png') {
			this.img_light_shield.visible = false
			this.onShield = false
			this.common_speed_flag = false
		}
		if (this.positive_name == 'dj_time88_png') {
			this.img_light_shield.visible = false
			this.onShield = false
		}
		if (this.positive_name == 'dj_sh88_png') {
			this.common_speed_flag = false
		}

	}
	public closePositive() {
		this.group_tool.visible = true
		this.positive_group.visible = false

		this.positive_status = false
		this._positive_index = 0
		this.icon_progressbar.scaleX = 1

		// if (this.positive_name == 'dj_time88_png') {
			this.common_speed_flag = false	
		// }

		// if (this.positive_name == 'dj_sh88_png') {
			this.img_light_shield.visible = false
			this.onShield = false
		// }

		this.positive_name = 'none'
		

	}
	public cleanAllNagetive() {	

		//effected净化	
		// this.common_speed_flag = false

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

	
	private level_seconds:number = 2 //每几秒一档
	private thirty_seconds_level_seconds = 3 //30秒的几秒一档
	private temp_level:number = 0 //临时记档
	//每秒一档速度
	private setSpeed() {
		if (this.down_speed - this.current_speed == 6)return
		this.speed_index += 1 

		this.temp_level  = Math.floor(this.speed_index/(30*this.level_seconds))
		this.speed_level = this.temp_level

		this.down_speed = 3 + this.speed_level
		if (this.down_speed < 10) {			
			this.create_tool_speed = 30
		} else if (this.down_speed < 20) {	
			if (this.down_speed==15)this.level_seconds = this.thirty_seconds_level_seconds		
			this.create_tool_speed = 10
		} else if (this.down_speed < 30) {
			this.create_tool_speed = 4
		} else if (this.down_speed < 40) {
			this.create_tool_speed = 2
		}  //50速判断不出hit事件
		else {
			this.down_speed = 40
			this.create_tool_speed = 2
		}
	}

	//负面道具样式的显示与消失
	// private nagetiveShowHide(instance_time: number){

	// }
	
	private onEnterFrame(evt) {
		if(this.isPause)return
		this._findex += 1

		// // console.log('档位：' + this.speed_level)
		// console.log('速度：' + this.down_speed)
		// console.log('间隔: ' + this.create_tool_speed)
		
		if (!this.common_speed_flag)this.setSpeed()
		
		//上跳金币效果
		if (this.add_coin_arr.length>0) {
			this.add_coin_arr.forEach((gold_label: eui.Label)=>{		
				if (gold_label.alpha > 0) {		
					gold_label.alpha -= 0.1
					gold_label.y -= 1				
				} else {
					let start_index  = this.add_coin_arr.indexOf(gold_label)
					this.add_coin_arr.splice(start_index, 1)
				
					this.p_role.addChild(gold_label)					
				}
			})
		}

		//增益道具的使用
		if (this.positive_status) {
			this._positive_index++
			if (this.positive_name != 'none') {
				let positive_instance_time:number
				if (this.positive_name == 'dj_double_png') {
					positive_instance_time =  this._positive_time + 60
				} else {
					positive_instance_time = this._positive_time
				}
				this.icon_progressbar.scaleX -= 1/positive_instance_time		
				if (this._positive_index >= positive_instance_time) {
					this.closePositive()
				}
			}
		}

		//负面道具的效果显示
		if (!this.onShield) {			
			this.nagetive_status.forEach((data,key) => {		
					
				if (data == true) {
					let instance_time:number
					if (key==2) {
						instance_time = this._nagetive_time - 60
					} else {
						instance_time = this._nagetive_time
					}
					this.nagetive_index[key]++
					this.nagetive_shapes[key].graphics.clear()		
					this.nagetive_shapes[key].graphics.lineStyle(2, 0xff0000)
					this.nagetive_shapes[key].graphics.drawArc((key*2+1)*this._nagetive_radius,this._nagetive_radius,this._nagetive_radius,-90*this._oneDegree, (270-360/instance_time*this.nagetive_index[key])*this._oneDegree-this._oneDegree)
									
					if (this.nagetive_index[key] >= instance_time) {
						//解除状态
						console.log('负面道具解除状态')
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
		} else {
			if (this.img_light_shield) {
				//旋转光盾
				this.light_rotation_angle += 12;
				if (this.light_rotation_angle >= 360)this.light_rotation_angle=0
				this.img_light_shield.rotation=this.light_rotation_angle
			}
		}
		
		//创建道具
		if (this._findex > this.create_tool_speed) {
			this._findex = 0
			this.randomGetTool()
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
		// bitmap.x = SceneManager.instance._stage.stage.stageWidth/2
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