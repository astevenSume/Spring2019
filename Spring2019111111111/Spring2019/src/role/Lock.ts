class Lock extends Enemy{

	public name: string
	public val: number
	public btm_tool: egret.Bitmap

	public constructor() {
		super()
		this.name = 'lock'
		this.val = 0
		this.creatShape()
	}

	public creatShape() {
		this.btm_tool = PlayScene.getToolBitmap("dj_lock114_png")
		this.addChild(this.btm_tool)	
	}

	public onStatus(ps:PlayScene, emy:Enemy) {
		if (ps.onShield)return
		ps.nagetive_status[Ns.Lock]  = true
		ps.nagetive_index[Ns.Lock] = 0
		ps.nagetive_group.addChild(ps.nagetive_shapes[Ns.Lock])
		if(!ps.nicon_lock.visible)ps.nicon_lock.visible = true
		if(ps.per_name.visible)ps.per_name.visible = false
	}

	public skill(ps:PlayScene, emy:Enemy) {
		console.log('吃到 锁')
	}
}