class MainScene extends eui.Component implements  eui.UIComponent {

	public group_mbtn:eui.Group
	public mbtn_start:eui.Button

	public group_reuser: eui.Group
	public label_reuser: eui.Label
	//状态
	private group_line: eui.Group
	private bg_font : eui.Rect
	private font_one: eui.Label
	private font_two: eui.Label

	private alert_not_enough: eui.Group

	public constructor() {
		super()
		console.log(SoundController.soundChannel)
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void
	{
		super.childrenCreated();
		

		this.group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=>{
			if (e.target.numElements) {
				console.log('未点到按钮！')
				return
			}

			let pbtn = <eui.ToggleButton>e.target
			if (pbtn.selected) {
				this.toggleBtn(pbtn)
			} else {
				pbtn.selected = true
			}
		}, this)

		this.mbtn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			SceneManager.toPlayScene()
		}, this)
	}
	

	private restoreStatus() {
		localStorage.setItem('main_status', 'false')
		localStorage.setItem('buy_type', '')
		localStorage.setItem('buy_tname', '')

		let timer = new egret.Timer(1000,1) 
		timer.addEventListener(egret.TimerEvent.TIMER, ()=> {
			this.group_line.visible=false
		}, this)
		timer.start()
	}

	public cannotplayNow() {
		this.alert_not_enough.visible = true
		let timer = new egret.Timer(3000,1)

		timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, ()=>{
			this.alert_not_enough.visible = false
		}, this)
		timer.start()
	}

	public showRename(re_uname: string) {
		this.label_reuser.text = `请使用${re_uname}帐户进行游戏~`
		this.group_reuser.visible = true

		let timer = new egret.Timer(2000,1)

		timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, ()=>{
			this.group_reuser.visible = false
		}, this)
		timer.start()

	}

	public showStatus() {
		let status = localStorage.getItem('main_status')
		
		if (status == 'true') {
				let type = localStorage.getItem('type')
				if (type == 'buy_tool') {  //确定类型

					let buy_tname = localStorage.getItem('buy_tname')
					let now_num: number
					if (buy_tname.length > 0) {
						this.group_line.visible = true
						switch(buy_tname) {
								case 'sbjb':
									now_num = parseInt(localStorage.getItem('double_num')) + 1
									localStorage.setItem('double_num', now_num+'')
									this.font_two.text = `“双倍金币” 一份~`
								break;
								case 'fhzx':
									now_num = parseInt(localStorage.getItem('revive_num')) + 1
									localStorage.setItem('revive_num', now_num+'')
									this.font_two.text = `“复活之心” 一份~`
								break;
								case 'jhys':
									now_num = parseInt(localStorage.getItem('clean_num')) + 1
									localStorage.setItem('clean_num', now_num+'')
									this.font_two.text = `“净化圣水” 一份~`
								break;
								case 'zcls':
									now_num = parseInt(localStorage.getItem('speed_num')) + 1
									localStorage.setItem('speed_num', now_num+'')
									this.font_two.text = `“正常流速” 一份~`
								break;
								case 'shzd':
									now_num = parseInt(localStorage.getItem('shield_num')) + 1
									localStorage.setItem('shield_num', now_num+'')
									this.font_two.text = `“守护之盾” 一份~`
								break;
								default:
								break;
							}
						this.restoreStatus()
					}

				} else if (type == 'recharge') {

				}
					
		}
		
	}

	public toggleBtn(pbtn: eui.ToggleButton|number) {
		this.group_mbtn.$children.forEach((toggleBtn:eui.ToggleButton)=>{
			if (pbtn === toggleBtn) {				
				return
			} else {
				pbtn = <eui.ToggleButton>pbtn
				toggleBtn.selected=false
			}			
		})

		if (pbtn===0) {
			this.setChildIndex(this.group_mbtn, this.numChildren)
			console.log('back')
			return
		}

		let btnindex = this.group_mbtn.getChildIndex(<eui.ToggleButton>pbtn)
		switch(btnindex) {
			case 0:
				SceneManager.toRuleScene()
				this.setChildIndex(this.group_mbtn, this.numChildren)
				break;
			case 1:
				SceneManager.toStoreScene()
				this.setChildIndex(this.group_mbtn, this.numChildren)
				break;
			case 2:
				SceneManager.toRankScene()
				this.setChildIndex(this.group_mbtn, this.numChildren)
				break;
			default:
			break;

		}

		
	}
	
}