class HttpServerSo {

    public private:string

    public static requestPost(params: string, callbackNow: Function) {
        var request = new egret.HttpRequest();		
		request.responseType = egret.HttpResponseType.TEXT
		request.open("http://localhost:9090/index.st/Demo/getRecord", egret.HttpMethod.POST)
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
		request.send(params);
		request.addEventListener(egret.Event.COMPLETE, (event: egret.Event)=>{
			let res = <egret.HttpRequest>event.currentTarget
			callbackNow(res.response)
		}, this)
		request.addEventListener(egret.IOErrorEvent.IO_ERROR, (e)=>{}, this)
		request.addEventListener(egret.ProgressEvent.PROGRESS, (e)=>{}, this)
    }
    public static requestGet() {
        console.log('get');
    }


}