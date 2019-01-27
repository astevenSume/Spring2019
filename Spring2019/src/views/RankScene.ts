class RankScene extends eui.Component implements  eui.UIComponent {

	public rbtn_close: eui.Button
	public rimg_avatar: eui.Image
	public rbtn_ava: eui.Button
	public rinf_group: eui.Group
	
	

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
		let uid = localStorage.getItem('uid')

		this.rbtn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			SceneManager.toMainScene()
			SceneManager.instance.mainScene.toggleBtn(0)
		}, this)

		var params = "p1=postP1&p2=postP2"
		HttpServerSo.requestPost(params, this.postComplete)


		//加载自己的头像
		let avatar= 'http://thirdwx.qlogo.cn/mmopen/vi_32/jXMuUZyWicI88gYicC9E32bagIQT0fPzVzXWFn8biaMWmSQWIh19FSXHRXpwVYxFhuhvYvxazLITGNyjYbSA7SBMA/132';
		// egret.ImageLoader.crossOrigin = "anonymous" //webgl模式下使用
		let imageLoader: egret.ImageLoader = new egret.ImageLoader()
		imageLoader.addEventListener(egret.Event.COMPLETE, (evt:egret.Event) => {
			let loader:egret.ImageLoader = evt.currentTarget
			let texture = new egret.Texture()
			texture._setBitmapData(imageLoader.data)

			this.rimg_avatar.source = texture  //加载IMAGE图像

			let circle:egret.Shape = new egret.Shape()
			circle.graphics.beginFill(0x000000)
			circle.graphics.drawCircle(72+20,10+20,20)
			circle.graphics.endFill()
			this.rinf_group.addChild(circle)
			this.rimg_avatar.mask = circle
		}, event)
		imageLoader.load(avatar)

		this.rinf_group.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			SceneManager.instance.mainScene.toggleBtn(0)
			SceneManager.toRecordScene()
		}, this)


		

	}
	private postComplete(data){
		
		console.log(data)
	}





}