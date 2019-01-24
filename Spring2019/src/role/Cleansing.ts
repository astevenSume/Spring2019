class Cleansing extends Enemy{

	public name: string
	public val: number
	public btm_tool: egret.Bitmap
	private base_money_num:number

	public constructor(val: number) {	
		super()
		this.val = val
		this.base_money_num = 10000 //基础钱数
		this.name = 'cleansing'
		this.creatShape(val)
	}

	public creatShape(val: number) {
		this.btm_tool = new egret.Bitmap()
		this.btm_tool.texture = RES.getRes("dj_ss114_png")		
		this.addChild(this.btm_tool)

		//  Math.floor(Math.random() * SceneManager._width)
		let rdm_x = PlayScene.getRandomX()
		this.btm_tool.width = 57
		this.btm_tool.height = 57
		this.btm_tool.x = rdm_x
		this.btm_tool.y = 0
	}

	public onStatus(ps:PlayScene, emy:Enemy) {
		ps.nagetive_status.forEach((data,key)=>{			
			ps.nagetive_status[key] = false
		})
		ps.nagetive_index.forEach((data,key)=>{		
			ps.nagetive_index[key] = 0
		})
	}

	public skill(ps:PlayScene, emy:Enemy) {
		//
	
		
	}
}