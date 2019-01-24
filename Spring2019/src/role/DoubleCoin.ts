class DoubleCoin extends Enemy{

	public name: string
	public val: number
	public btm_tool: egret.Bitmap

	public constructor() {
		super()
		this.name = 'doublecoin'
		this.val = 0
		this.creatShape()
	}

	public creatShape() {
		this.btm_tool = PlayScene.getToolBitmap("dj_gold_double_png")
		this.addChild(this.btm_tool)	
	}

	public onStatus(ps:PlayScene, emy:Enemy) {
		
	}

	public skill(ps:PlayScene, emy:Enemy) {

	}
}