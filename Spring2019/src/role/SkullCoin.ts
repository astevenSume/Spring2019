class SkullCoin extends Enemy{
	
	public name: string
	public val: number
	public btm_tool: egret.Bitmap

	public constructor() {
		super()
		this.name = 'skullcoin'
		this.val = 0
		this.creatShape()
	}

	public creatShape() {
		this.btm_tool = PlayScene.getToolBitmap("dj_dj114_png")
		this.addChild(this.btm_tool)	
	}

	public onStatus(ps:PlayScene, emy:Enemy) {
		ps.nagetive_status[Ns.SkullCoin]  = true
		ps.nagetive_index[Ns.SkullCoin] = 0
		ps.nagetive_group.addChild(ps.nagetive_shape[Ns.SkullCoin])
		if(!ps.nicon_skullcoin.visible)ps.nicon_skullcoin.visible = true
		if(ps.per_name.visible)ps.per_name.visible = false
	}
	
	public skill(ps:PlayScene, emy:Enemy) {

	}
}