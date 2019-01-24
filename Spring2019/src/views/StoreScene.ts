class StoreScene extends eui.Component implements  eui.UIComponent {

	public scr_shop:eui.Scroller
	public store_list:eui.List
	public sbtn_return:eui.Button

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

		this.store_list.dataProvider = new eui.ArrayCollection(listArr)

		this.scr_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=>{			
			if (e.target instanceof eui.Button) {	
				console.log(e.target.name);
				switch(e.target.name) {
					case 'sbjb':

					break;
					case 'fhzx':
					break;
					case 'jhys':
					break;
					case 'zcls':
					break;
					case 'shzd':
					break;
					default:
					break;
				}					
			}		
		}, this)


		this.sbtn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=> {
			SceneManager.toMainScene()
			SceneManager.instance.mainScene.toggleBtn(0)
		}, this)

	}
	
}