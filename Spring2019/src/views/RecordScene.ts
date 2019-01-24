class RecordScene extends eui.Component implements  eui.UIComponent {

	public rcd_group: eui.Group
	public sbtn_back: eui.Button
	public rcd_ava: eui.Image

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

		this.sbtn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=> {
			SceneManager.toMainScene()
		}, this)


		let avatar= 'http://thirdwx.qlogo.cn/mmopen/vi_32/jXMuUZyWicI88gYicC9E32bagIQT0fPzVzXWFn8biaMWmSQWIh19FSXHRXpwVYxFhuhvYvxazLITGNyjYbSA7SBMA/132';

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

		

	}
	
}