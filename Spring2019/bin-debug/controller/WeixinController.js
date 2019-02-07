var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WeixinController = (function () {
    function WeixinController() {
    }
    WeixinController.prototype.isWeixin = function () {
        var wxObj = window.navigator.userAgent.toLowerCase();
        if (wxObj.indexOf('microMessenger') > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(WeixinController.prototype, "weixinJSBridge", {
        get: function () {
            return;
        },
        enumerable: true,
        configurable: true
    });
    return WeixinController;
}());
__reflect(WeixinController.prototype, "WeixinController");
//# sourceMappingURL=WeixinController.js.map