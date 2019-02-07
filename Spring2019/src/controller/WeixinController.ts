class WeixinController {
	public constructor() {
	}

	public isWeixin() {
        let wxObj = window.navigator.userAgent.toLowerCase()
        if (wxObj.indexOf('microMessenger') > 0) {
            return true;
        } else {
            return false;
        }
    }

	private _weixinJSBridge
	public get weixinJSBridge(){
		return
	}

}