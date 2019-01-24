abstract class Enemy extends egret.Sprite{

	abstract name: string
	abstract val: number
	abstract btm_tool: egret.Bitmap

	public constructor() {
		super()
	}

	abstract creatShape(val:number): void
	abstract onStatus(ps: PlayScene, emy: Enemy): void
	abstract skill(ps: PlayScene, emy: Enemy): void

}