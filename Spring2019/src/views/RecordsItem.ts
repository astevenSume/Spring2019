class RecordsItem extends eui.ItemRenderer{

	public item_bg: eui.Rect
	public order_img: eui.Image
	public order_font: eui.Label
	public award_word: eui.Label


	public constructor() {
		super()
		this.skinName = "resource/skins/item-skins/records_item.exml"
		// this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onComplete, this)

		// eui.Watcher.watch(this, ["data"], this.onDatachanged, this)

		this.award_word.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{

			location.href="http://www.le626.com/index.st/User/vcoin"
		}, this)
	}

	// private onDatachanged() {
	    // console.log(this.data)
		
	// }


	protected dataChanged() {
	
		if (this.data.img_order.lenght > 0) {
			this.order_font.visible = false			
		}

		if (parseInt(this.data.id)%2 == 0) {
			this.item_bg.fillColor = 0xf1f8fe
		}

	}
	
}