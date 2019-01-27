class CommonSpeed extends Enemy{

	public name: string
	public val: number
	public btm_tool: egret.Bitmap

	public constructor() {
		super()
		this.name = 'commonspeed'
		this.val = 0
		this.creatShape()
	}

	public creatShape() {
		this.btm_tool = new egret.Bitmap()
		this.btm_tool = PlayScene.getToolBitmap("dj_time114_png")
		this.addChild(this.btm_tool)	
	}

	public onStatus(ps:PlayScene, emy:Enemy) {
		ps.showPositiveBar("dj_time88_png")
	}

	public skill(ps:PlayScene, emy:Enemy) {
		console.log('吃到 匀速')
		ps.down_speed = 3
		ps.create_tool_speed = 20
		ps.common_speed_flag = true
		
	}
}