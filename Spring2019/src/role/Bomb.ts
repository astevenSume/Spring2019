class Bomb extends Enemy{

	public name: string
	public val: number
	public btm_tool: egret.Bitmap

	public constructor() {
		super()
		this.name = 'bomb'
		this.val = 0
		this.creatShape()
	}

	public creatShape() {
		this.btm_tool = PlayScene.getToolBitmap("dj_zd114_png")
		this.addChild(this.btm_tool)	
	}

	private againFunc: Function

	public async isAgain(ps: PlayScene) {
		this.settleAccounts(ps)
		ps.over_group.visible = true		
		
		let current_times = parseInt(localStorage.getItem('current_tiems'))+1
		// let now_times = await RequestData.canPlay()		
		console.log('bomb now times : '  + current_times)
		if (current_times > SceneManager.instance._max_play_times) {
			localStorage.setItem('current_tiems', current_times + '')	
			RequestData.increasePlaytimes()
			SceneManager.toMainScene()
            SceneManager.instance.mainScene.cannotplayNow()
            return
        } else {
			
			localStorage.setItem('current_tiems', current_times + '')	
			ps.lbl_times.text = current_times + '/20'			
			RequestData.increasePlaytimes()
		}			
	
		

		let uname = localStorage.getItem('uname')
		ps.congratulation_labe.text = `恭喜您，${uname}`
		let res_score = 0
		if (ps.score>9999) {
			res_score = ps.score/10000
			ps.res_unit.text = '亿'
		} else {
			res_score = ps.score
			ps.res_unit.text = '万'
		}	
		let res_score_label = new eui.Label()
		ps.over_group.addChild(res_score_label)

		res_score_label.size = 42
		res_score_label.textColor = 0xFFFF00
		res_score_label.text = res_score + ''
		res_score_label.x = ps.over_group.width/2 - res_score_label.width/2
		res_score_label.y = 342
		ps.res_unit.x = res_score_label.x + res_score_label.width+2

		ps.setChildIndex(ps.over_group, ps.numChildren)

		this.againFunc = this.btnAgainFunc.bind(false, ps, res_score_label, this)
		ps.btn_again.addEventListener(egret.TouchEvent.TOUCH_TAP, this.againFunc, this)

		ps.btn_buy_tool.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{	
				
			SceneManager.toStoreScene()
			SceneManager.instance.mainScene.toggleBtn(0)
						
		}, this)

		ps.icon_endclose.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			SceneManager.instance.mainScene.toggleBtn(0)
			SceneManager.toMainScene()
			ps.over_group.visible = false
		}, this)
	}

	private fun: Function
	private nofuc: Function
	public onStatus(ps:PlayScene, emy:Enemy) {
		if (ps.onShield)return

		
		ps.cleanAllNagetive()
		ps.closePositive()
		ps.isPause = true
		//是否复活
		let heart_num_str = ps.p_heart_num.text 
		let heart_num = parseInt(heart_num_str.slice(1))
		if (heart_num == 0) {
			this.isAgain(ps)
		} else {
			
			ps.relife_group.visible = true
			ps.setChildIndex(ps.relife_group, ps.numChildren)
					
			this.fun = this.reviveEventMethod.bind(false, ps, heart_num, this)
			ps.pbtn_relife.addEventListener(egret.TouchEvent.TOUCH_TAP, this.fun, this)

			this.nofuc = this.norelife.bind(false,ps,this)
			ps.pbtn_over_now.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nofuc, this)
		}		

		
		// egret.ticker.pause()
		// egret.lifecycle.onPause = () => {		
		// 	console.log('游戏停止..')		
		// }
	}

	public skill(ps:PlayScene, emy:Enemy) {
		console.log('吃到 炸弹')
		PlaySceneSoundController.startMuisc('resource/act/media/xiaochu.mp3')
		if(!ps.onShield)ps.nagetive_status[Ns.Lock]=true
	}

	private settleAccounts(ps:PlayScene) {
		let uid = localStorage.getItem('uid')
		let score = ps.score
		let heart = parseInt(ps.p_heart_num.text.slice(1))
		let clean = parseInt(ps.cleansing_num.text.slice(1))
		let shield = parseInt(ps.shield_num.text.slice(1))
		let double = parseInt(ps.double_num.text.slice(1))
		let speed = parseInt(ps.common_num.text.slice(1))
		
		var params = `way=settleAccounts&uid=${uid}&score=${score}&heart=${heart}&clean=${clean}&shield=${shield}&double=${double}&speed=${speed}`	
		// console.log(params)
		HttpServerSo.requestPost(params, this.postComplete)
	}
	private postComplete(data) {
		// console.log('data : ' + data)
	}

	public btnAgainFunc(ps, res_score_label, that) {
		console.log('再来一次..')
		console.log(that)		
		ps.over_group.visible = false
		ps.isPause = false
		ps.speed_index = 0
		ps.speed_level = 0
		res_score_label.text = ''
		
		ps.constructor_init(false) //初始化游戏
		ps.p_score.text = '0万'

		ps.btn_again.removeEventListener(egret.TouchEvent.TOUCH_TAP, that.againFunc, that)
	}

	private reviveEventMethod(ps, heart_num, that) {
		console.log('复活了..')	

		let my_tool = localStorage.getItem('revive_num')
		if (my_tool === null || my_tool === undefined ) {

             location.href = localStorage.getItem('entry_url')
        }

		
		ps.userDatabaseTool('revive')
		// let now_heart_num = (parseInt(heart_num)-1) + ''
		ps.p_heart_num.text = 'x' + (parseInt(heart_num)-1)
		ps.isPause = false
		ps.relife_group.visible = false
		ps.nagetive_status[Ns.Lock] = false

		// localStorage.setItem('revive_num', now_heart_num)
		ps.pbtn_over_now.removeEventListener(egret.TouchEvent.TOUCH_TAP, that.nofuc, that)
		ps.pbtn_relife.removeEventListener(egret.TouchEvent.TOUCH_TAP, that.fun, that) 
	} 
	private norelife(ps, that) {
		that.isAgain(ps)
		

		ps.pbtn_over_now.removeEventListener(egret.TouchEvent.TOUCH_TAP, that.nofuc, that)
	}
}