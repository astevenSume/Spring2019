class PlayScene extends eui.Component implements  eui.UIComponent {

	public pbtn_return: eui.Button
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


		this.pbtn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=> {
			SceneManager.toMainScene()
		}, this)
	}
	
}