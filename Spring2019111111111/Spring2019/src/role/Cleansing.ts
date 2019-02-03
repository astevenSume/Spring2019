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
		this.btm_tool = PlayScene.getToolBitmap("dj_ss114_png")	
		this.addChild(this.btm_tool)
	}

	public onStatus(ps:PlayScene, emy:Enemy) {

		ps.cleanAllNagetive()
		// ps.nagetive_status.forEach((data,key)=>{			
		// 	ps.nagetive_status[key] = false
		// 	if (ps.nagetive_shapes[key].parent)ps.nagetive_group.removeChild(ps.nagetive_shapes[key])			
		// 	if (ps.nagetive_icons[key].visible)ps.nagetive_icons[key].visible = false
		// 	if (!ps.per_name.visible)ps.per_name.visible = true
		// })
		// ps.nagetive_index.forEach((data,key)=>{		
		// 	ps.nagetive_index[key] = 0			
		// })
	}

	public skill(ps:PlayScene, emy:Enemy) {
		console.log('吃到 净化')
	
		
	}
}