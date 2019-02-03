class StoreScene extends eui.Component implements  eui.UIComponent {

	public scr_shop:eui.Scroller
	public store_list:eui.List
	public sbtn_return:eui.Button

	public group_non: eui.Group
	public charge_bg: eui.Image

	private btn_close: eui.Button
	private btn_sure: eui.Button
	private btn_charge: eui.Button
	private btn_cancel: eui.Button

	private buy_label: eui.Label
	private no_enough_line: eui.Label

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.scr_shop.horizontalScrollBar.autoVisibility = false

		let listArr: any[] = [
			{'image1':'resource/act/pig_goods/word_double.png','image2':'resource/act/pig_goods/Coin_double.png','label':'￥5','label1':'sbjb'}, //双倍金币
			{'image1':'resource/act/pig_goods/word_life.png','image2':'resource/act/pig_goods/buy_Heart_life.png','label':'￥20','label1':'fhzx'}, //复活之心
			{'image1':'resource/act/pig_goods/word_ss.png','image2':'resource/act/pig_goods/buy_ss.png','label':'￥3','label1':'jhys'}, //净化药水
			{'image1':'resource/act/pig_goods/word_sj.png','image2':'resource/act/pig_goods/dj_sj.png','label':'￥5','label1':'zcls'}, //正常流速 10s
			{'image1':'resource/act/pig_goods/word_dp.png','image2':'resource/act/pig_goods/buy_dp.png','label':'￥10','label1':'shzd'}, //守护之盾	10s
		]

		// this.group_non.visible = true

		this.store_list.dataProvider = new eui.ArrayCollection(listArr)

		this.scr_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBuyButton, this)


		this.sbtn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {
			SceneManager.instance.mainScene.toggleBtn(0)
			SceneManager.toMainScene()	
		}, this)	

		//是否确认够买
		this.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sureBuy, this)	

		//取消
		this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBuy, this)

	}
	//取消购买
	private closeBuy() {
		this.group_non.visible = false
	}

	//确认购买
	private sureBuy() {
		let uid = localStorage.getItem('uid')
		let params = `way=buy&uid=${uid}&tname=${this.tname}&expend=${this.money}`;
		HttpServerSo.requestPost(params, this.postComplete, {that:this,tname:this.tname})
	}

	private tname: string
	private money: number
	private clickBuyButton(e) {
		if (e.target instanceof eui.Button) {	
				let zh_tname: string		
				localStorage.setItem('buy_tname', e.target.name)
				switch(e.target.name) {
					case 'sbjb':
						zh_tname = '双倍金币'
						this.tname = 'tool_dbcoin'						
						this.money = 10
					break;
					case 'fhzx':
						zh_tname = '复活之心'
						this.tname = 'tool_revive'
						this.money = 10
					break;
					case 'jhys':
						zh_tname = '净化圣水'
						this.tname = 'tool_drug'
						this.money = 10
					break;
					case 'zcls':
						zh_tname = '正常流速'
						this.tname = 'tool_regular_speed'
						this.money = 10
					break;
					case 'shzd':
						zh_tname = '守护之盾'
						this.tname = 'tool_shield'
						this.money = 10
					break;
					default:
					break;
				}
				this.group_non.visible = true
				this.btn_cancel.visible = true
				this.btn_sure.visible = true
				this.btn_charge.visible = false
				this.no_enough_line.text = `亲，您正在购买“${zh_tname}”`
				this.buy_label.text = `帐户余额扣除${this.money}元`
									
			}
	}

	private postComplete(data, obj) {
		console.log('store_buy....' + data)
		let tmp_num = ''

		if (data == 'ok') {
			localStorage.setItem('main_status', 'true')
			localStorage.setItem('type', 'buy_tool')

			switch(obj.tname) {
					case 'sbjb':
						tmp_num = parseInt(localStorage.getItem('double_num')) + 1 + ''
						localStorage.setItem('double_num', tmp_num)	
						localStorage.setItem('buy_tname', 'sbjb')				
					break;
					case 'fhzx':
						tmp_num = parseInt(localStorage.getItem('revive_num')) + 1 + ''
						localStorage.setItem('revive_num', tmp_num)
						localStorage.setItem('buy_tname', 'fhzx')
					break;
					case 'jhys':
						tmp_num = parseInt(localStorage.getItem('clean_num')) + 1 + ''
						localStorage.setItem('clean_num', tmp_num)
						localStorage.setItem('buy_tname', 'jhys')
					break;
					case 'zcls':
						tmp_num = parseInt(localStorage.getItem('speed_num')) + 1 + ''
						localStorage.setItem('speed_num', tmp_num)
						localStorage.setItem('buy_tname', 'zcls')
					break;
					case 'shzd':
						tmp_num = parseInt(localStorage.getItem('shield_num')) + 1 + ''
						localStorage.setItem('shield_num', tmp_num)
						localStorage.setItem('buy_tname', 'shzd')
					break;
					default:
					break;
				}
				SceneManager.instance.mainScene.toggleBtn(0)
				SceneManager.toMainScene()

		} else if (data == 'nonenough') {			
			obj.that.no_enough_line.text = '亲，您的余额不足，无法购买'
			obj.that.buy_label.text = '道具哦，快去充值吧~'
			obj.that.btn_cancel.visible = false
			obj.that.btn_sure.visible = false
			obj.that.btn_charge.visible = true

			obj.that.btn_charge.addEventListener(egret.TouchEvent.TOUCH_TAP, obj.that.notEnoughFund, obj.that)
		} else {
			console.log('res :' + data)
		}
	}

	private notEnoughFund() {
		location.href = localStorage.getItem('recharge_url')
	}



}