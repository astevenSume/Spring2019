class RecordScene extends eui.Component implements  eui.UIComponent {

	public rcd_group: eui.Group
	public sbtn_back: eui.Button
	public rcd_ava: eui.Image

	private rcd_uname:eui.Label

	private rcd_scroll:eui.Scroller
	private rcd_list:eui.List
	private rcd_scores: eui.Label

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
		this.rcd_scroll.verticalScrollBar.autoVisibility = false

		this.sbtn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=> {
			SceneManager.toRankScene()
			SceneManager.instance.mainScene.toggleBtn(0)
			
		}, this)


		let avatar= localStorage.getItem('avatar')
		let name = ''
		let real_name = localStorage.getItem('realName')
		if (real_name.length>0) {
			name = real_name
		} else {
			name = localStorage.getItem('username')
		}
		this.rcd_uname.text = name

		let imageLoader: egret.ImageLoader = new egret.ImageLoader()
		imageLoader.addEventListener(egret.Event.COMPLETE, (evt) => {
			let loader:egret.ImageLoader = evt.currentTarget
			let texture:egret.Texture = new egret.Texture()
			texture._setBitmapData(imageLoader.data)
			this.rcd_ava.source = texture

			let circle:egret.Shape = new egret.Shape()
			circle.graphics.beginFill(0x000000)
			circle.graphics.drawCircle(20+27.5,22+27.5,27.5)
			circle.graphics.endFill()
			this.rcd_group.addChild(circle)
			this.rcd_ava.mask = circle

		}, this)
		imageLoader.load(avatar)

		let uid = localStorage.getItem('uid')
		//获取最高记录
		HttpServerSo.requestPost(`way=getSelfRecords&uid=${uid}`,(res: string, that:RecordScene)=>{
			let data = JSON.parse(res)
			
			let list_arr: Object[] = []
			// let lb:eui.Label = <eui.Label>that.rcd_scores 
			// lb.text = data.max_score + '亿'
			that.rcd_scores.text = data.max_score/10000 + '亿'
			
		

			data.data.forEach((item,k)=>{
				list_arr.push({score: '+'+item.max_score/10000, the_date: item.overtime})
			})
			this.rcd_list.dataProvider = new eui.ArrayCollection(list_arr)

		}, this)
		

	}
	
}