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

	public isAgain(ps: PlayScene) {
		ps.over_group.visible = true
				
		ps.res_unit.text = ps.p_score.text.slice(ps.p_score.text.length-1)
		let score = ps.p_score.text.slice(0, ps.p_score.text.length-1)
		ps.res_score.text = score	
		ps.p_score.text = '0万'

		ps.setChildIndex(ps.over_group, ps.numChildren)

		ps.btn_again.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{	
			console.log('再来一次..')		
			ps.over_group.visible = false
			ps.isPause = false
			ps.speed_index = 0
			ps.speed_level = 0			

			
			ps.game_init(false) //初始化游戏
		}, this)

		ps.icon_endclose.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			SceneManager.instance.mainScene.toggleBtn(0)
			SceneManager.toMainScene()
			ps.over_group.visible = false
		}, this)
	}

	public async onStatus(ps:PlayScene, emy:Enemy) {
		if (ps.onShield)return

		ps.cleanAllNagetive()
		ps.isPause = true
		//是否复活
		let heart_num_str = ps.p_heart_num.text 
		let heart_num = parseInt(heart_num_str.slice(1))
		if (heart_num == 0) {
			this.isAgain(ps)
		} else {
			
			ps.relife_group.visible = true
			ps.setChildIndex(ps.relife_group, ps.numChildren)
			ps.pbtn_relife.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				console.log('复活了..')
				ps.p_heart_num.text = 'x' + (heart_num-1)
				ps.isPause = false
				ps.relife_group.visible = false
				ps.nagetive_status[Ns.Lock] = false
			}, this)

			ps.pbtn_over_now.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
				this.settleAccounts(ps)
				this.isAgain(ps)
			}, this)
		}		

		
		// egret.ticker.pause()
		// egret.lifecycle.onPause = () => {		
		// 	console.log('游戏停止..')		
		// }
	}

	public skill(ps:PlayScene, emy:Enemy) {
		console.log('吃到 炸弹')
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
		console.log('data : ' + data)
	}
}