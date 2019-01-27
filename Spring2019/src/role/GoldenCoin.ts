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

	public creatShape(num:number) {		
		switch(num) {
			case 10:
				this.btm_tool = PlayScene.getToolBitmap("dj_glod_10_png")
			break
			case 100:
				this.btm_tool = PlayScene.getToolBitmap("gold_bai_png")
			break
			case 1000:
				this.btm_tool = PlayScene.getToolBitmap("gold_qian_png")
			break
			case 10000:
				this.btm_tool = PlayScene.getToolBitmap("gold_yy_png")
			break
			case 100000:
				this.btm_tool = PlayScene.getToolBitmap("gold_sy_png")
			break;
			default:
			break
		}
		this.addChild(this.btm_tool)

	}

	public onStatus(ps:PlayScene, emy:Enemy) {

	}

	public skill(ps:PlayScene, emy:Enemy) {
		console.log('吃到 金币')
		let score = emy.val		
		//增益效果 
		if (ps.positive_status == true) {			
			if (ps.positive_name == 'dj_double_png')score = emy.val * 2	
		}

		//骷髅效果
		if (ps.nagetive_status[Ns.SkullCoin] == true)score = 0
			
		ps.score += score
		// ps.score += 10001 //测试用
		if (ps.score>9999) {
			ps.p_score.text = ps.score/10000 + '亿'
		} else {
			ps.p_score.text = ps.score + '万'
		}		
	}



}