class GoldenCoin extends Enemy{
		
	public name: string
	public val: number
	public btm_tool: egret.Bitmap
	private base_money_num:number


	public constructor(val: number) {	
		super()
		this.val = val
		this.base_money_num = 10000 //基础钱数
		this.name = 'goldencoin'
		this.creatShape(val)
	}

	public creatShape(val: number) {
		this.btm_tool = new egret.Bitmap()
		this.btm_tool.texture = RES.getRes("dj_glod_10_png")

		switch(val) {
			case 10:
				this.btm_tool.texture = RES.getRes("dj_glod_10_png")
			break
			case 100000:
				this.btm_tool.texture = RES.getRes("dj_gold_yi_png")
			break
			default:				
			break
		}
		this.addChild(this.btm_tool)

		//  Math.floor(Math.random() * SceneManager._width)

		let rdm_x = PlayScene.getRandomX()
		this.btm_tool.width = 57
		this.btm_tool.height = 57
		this.btm_tool.x = rdm_x
		this.btm_tool.y = 0
	}

	public onStatus(ps:PlayScene, emy:Enemy) {

	}

	public skill(ps:PlayScene, emy:Enemy) {
		//增加金币
		ps.score += emy.val
		// ps.score += 10001 //测试用
		if (ps.score>9999) {
			ps.p_score.text = '+' + ps.score/10000 + '亿'
		} else {
			ps.p_score.text = '+' + ps.score + '万'
		}
		
	}



}