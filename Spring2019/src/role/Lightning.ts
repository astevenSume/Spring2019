class Lightning extends Enemy{
	
	public name: string
	public val: number
	public btm_tool: egret.Bitmap

	public constructor() {
		super()
		this.name = 'lightning'
		this.val = 0
		this.creatShape()
	}

	public creatShape() {
		this.btm_tool = PlayScene.getToolBitmap("dj_lightening114_png")
		this.addChild(this.btm_tool)	
	}

	public onStatus(ps:PlayScene, emy:Enemy) {
		if (ps.onShield)return
		ps.nagetive_status[Ns.Lightning]  = true
		ps.nagetive_index[Ns.Lightning] = 0
		ps.nagetive_group.addChild(ps.nagetive_shapes[Ns.Lightning])
		if(!ps.nicon_lightning.visible)ps.nicon_lightning.visible = true
		if(ps.per_name.visible)ps.per_name.visible = false

		ps.current_speed = ps.down_speed

	}
	
	public skill(ps:PlayScene, emy:Enemy) {
		console.log('吃到 闪电')
		ps.down_speed = ps.current_speed + 6
	}
}