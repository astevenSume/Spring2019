class StoreScene extends eui.Component implements  eui.UIComponent {

	public scr_shop:eui.Scroller
	public store_list:eui.List
	public sbtn_return:eui.Button

	public group_non: eui.Group
	public btn_recharge: eui.Button

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

		let listArr: any[] = [
			{'image1':'resource/act/pig_goods/word_double.png','image2':'resource/act/pig_goods/Coin_double.png','label':'￥5','label1':'sbjb'}, //双倍金币
			{'image1':'resource/act/pig_goods/word_life.png','image2':'resource/act/pig_goods/buy_Heart_life.png','label':'￥20','label1':'fhzx'}, //复活之心
			{'image1':'resource/act/pig_goods/word_ss.png','image2':'resource/act/pig_goods/buy_ss.png','label':'￥3','label1':'jhys'}, //净化药水
			{'image1':'resource/act/pig_goods/word_sj.png','image2':'resource/act/pig_goods/dj_sj.png','label':'￥5','label1':'zcls'}, //正常流速 10s
			{'image1':'resource/act/pig_goods/word_dp.png','image2':'resource/act/pig_goods/buy_dp.png','label':'￥10','label1':'shzd'}, //守护之盾	10s
		]

		// this.group_non.visible = true

		this.store_list.dataProvider = new eui.ArrayCollection(listArr)

		this.scr_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=>{			
			if (e.target instanceof eui.Button) {						
				let money = 0
				let uid = localStorage.getItem('uid')
				// let uid = 24576 //ceshi
				let tname = ''
				switch(e.target.name) {
					case 'sbjb':
						tname = 'tool_dbcoin'
						money = 10
					break;
					case 'fhzx':
						tname = 'tool_revive'
						money = 11
					break;
					case 'jhys':
						tname = 'tool_drug'
						money = 12
					break;
					case 'zcls':
						tname = 'tool_regular_speed'
						money = 13
					break;
					case 'shzd':
						tname = 'tool_shield'
						money = 14
					break;
					default:
					break;
				}
				let params = `way=buy&uid=${uid}&tname=${tname}&expend=${money}`;
				HttpServerSo.requestPost(params, this.postComplete, {that:this,tname:e.target.name})					
			}
		}, this)


		this.sbtn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {
			// SceneManager.instance.mainScene.toggleBtn(0)
			SceneManager.toMainScene()	
		}, this)

		

	}
	private postComplete(data, obj) {
		console.log('data : ' + obj)

		if (data == 'ok') {

		} else {
			// console.log()
			obj.that.group_non.visible = true
			// this.group_non.visible = true
			obj.that.btn_recharge.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
				console.log('aaa' + obj.tname)
			}, obj.that)
		}
	}
}