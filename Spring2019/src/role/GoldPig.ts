class GoldPig extends egret.Sprite {

	public pig: egret.Bitmap
	private _init_x:number

	public constructor(pig: egret.Bitmap) {
		super()
		this.pig=pig
	}

	public get init_x() {
		return this._init_x
	}
	public set init_x(n:number) {
		this._init_x = n
	}


	public move(evt:egret.TouchEvent, p_role: eui.Group) {
		let now_x = evt.stageX
		let offset_x = now_x - this.init_x

		if (p_role.x + offset_x < -15) {
			p_role.x = -15
		} else if (p_role.x + offset_x >= SceneManager.instance._stage.stage.stageWidth-p_role.width+15) {
			p_role.x = SceneManager.instance._stage.stage.stageWidth-p_role.width+15
		} else {
			p_role.x += offset_x
		}
	
		this.init_x = now_x
	}
	
	public skill() {

	}

}