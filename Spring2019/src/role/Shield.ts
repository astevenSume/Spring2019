class Shield extends Enemy{
	
	public name: string
	public val: number
	public btm_tool: egret.Bitmap

	public constructor() {
		super()
		this.name = 'shield'
		this.val = 0
		this.creatShape()
	}

	public creatShape() {
		this.btm_tool = PlayScene.getToolBitmap("dj_sh114_png")
		this.addChild(this.btm_tool)	
	}

	public onStatus(ps:PlayScene, emy:Enemy) {
		ps.showPositiveBar("dj_sh88_png")
	}

	public skill(ps:PlayScene, emy:Enemy) {
		ps.onShield = true
	}
}