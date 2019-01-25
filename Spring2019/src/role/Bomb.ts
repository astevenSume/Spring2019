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

	public onStatus(ps:PlayScene, emy:Enemy) {
		if (ps.onShield)return

		ps.isPause = true
		ps.over_group.visible = true
				
		ps.res_unit.text = ps.p_score.text.slice(ps.p_score.text.length-1)
		let score = ps.p_score.text.slice(0, ps.p_score.text.length-1)
		ps.res_score.text = score		

		ps.setChildIndex(ps.over_group, ps.numChildren)

		ps.btn_again.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			ps.game_init()
		}, this)

		ps.icon_endclose.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			SceneManager.toMainScene()
		}, this)
		// egret.ticker.pause()
		// egret.lifecycle.onPause = () => {

		
		// 	console.log('游戏停止..')
				
			
		// }
	}

	public skill(ps:PlayScene, emy:Enemy) {

	}
}