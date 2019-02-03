class RuleScene extends eui.Component implements  eui.UIComponent {

	public scr_now: eui.Scroller
	public btn_close: eui.Label

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
		this.scr_now.verticalScrollBar.autoVisibility = false

		this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=> {
			SceneManager.instance.mainScene.toggleBtn(0)
			SceneManager.toMainScene()			
		}, this)

	}
	
}