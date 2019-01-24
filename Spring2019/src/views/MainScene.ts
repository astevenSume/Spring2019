class MainScene extends eui.Component implements  eui.UIComponent {

	public group_mbtn:eui.Group
	public mbtn_start:eui.Button


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

		this.group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=>{
			if (e.target.numElements) {
				console.log('未点到按钮！')
				return
			}

			let pbtn = <eui.ToggleButton>e.target
			if (pbtn.selected) {
				this.toggleBtn(pbtn)
			} else {
				pbtn.selected = true
			}
		}, this)


		this.mbtn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			SceneManager.toPlayScene()
		}, this)
	}

	public toggleBtn(pbtn: eui.ToggleButton|number) {
		this.group_mbtn.$children.forEach((toggleBtn:eui.ToggleButton)=>{
			if (pbtn === toggleBtn) {				
				return
			} else {
				pbtn = <eui.ToggleButton>pbtn
				toggleBtn.selected=false
			}			
		})


		if (pbtn===0) {
			console.log('back')
			return
		}

		let btnindex = this.group_mbtn.getChildIndex(<eui.ToggleButton>pbtn)
		switch(btnindex) {
			case 0:
				SceneManager.toRuleScene()
				this.setChildIndex(this.group_mbtn, this.numChildren)
				break;
			case 1:
				SceneManager.toStoreScene()
				this.setChildIndex(this.group_mbtn, this.numChildren)
				break;
			case 2:
				SceneManager.toRankScene()
				this.setChildIndex(this.group_mbtn, this.numChildren)
				break;
			default:
			break;	

		}

		
	}
	
}