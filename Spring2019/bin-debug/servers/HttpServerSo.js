var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HttpServerSo = (function () {
    function HttpServerSo() {
    }
    HttpServerSo.requestPost = function (params, callbackNow) {
        var request = new egret.HttpRequest();
        request.responseType = egret.HttpResponseType.TEXT;
        request.open("http://localhost:9090/index.st/Demo/getRecord", egret.HttpMethod.POST);
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send(params);
        request.addEventListener(egret.Event.COMPLETE, function (event) {
            var res = event.currentTarget;
            callbackNow(res.response);
        }, this);
        request.addEventListener(egret.IOErrorEvent.IO_ERROR, function (e) { }, this);
        request.addEventListener(egret.ProgressEvent.PROGRESS, function (e) { }, this);
    };
    HttpServerSo.requestGet = function () {
        console.log('get');
    };
    return HttpServerSo;
}());
__reflect(HttpServerSo.prototype, "HttpServerSo");
//# sourceMappingURL=HttpServerSo.js.map