var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var RankScene = (function (_super) {
    __extends(RankScene, _super);
    function RankScene() {
        return _super.call(this) || this;
    }
    RankScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RankScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        var uid = localStorage.getItem('uid');
        this.rbtn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.toMainScene();
            SceneManager.instance.mainScene.toggleBtn(0);
        }, this);
        var params = "p1=postP1&p2=postP2";
        HttpServerSo.requestPost(params, this.postComplete);
        //加载自己的头像
        var avatar = 'http://thirdwx.qlogo.cn/mmopen/vi_32/jXMuUZyWicI88gYicC9E32bagIQT0fPzVzXWFn8biaMWmSQWIh19FSXHRXpwVYxFhuhvYvxazLITGNyjYbSA7SBMA/132';
        // egret.ImageLoader.crossOrigin = "anonymous" //webgl模式下使用
        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, function (evt) {
            var loader = evt.currentTarget;
            var texture = new egret.Texture();
            texture._setBitmapData(imageLoader.data);
            _this.rimg_avatar.source = texture; //加载IMAGE图像
            var circle = new egret.Shape();
            circle.graphics.beginFill(0x000000);
            circle.graphics.drawCircle(72 + 20, 10 + 20, 20);
            circle.graphics.endFill();
            _this.rinf_group.addChild(circle);
            _this.rimg_avatar.mask = circle;
        }, event);
        imageLoader.load(avatar);
        this.rinf_group.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.instance.mainScene.toggleBtn(0);
            SceneManager.toRecordScene();
        }, this);
    };
    RankScene.prototype.postComplete = function (data) {
        console.log(data);
    };
    return RankScene;
}(eui.Component));
__reflect(RankScene.prototype, "RankScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RankScene.js.map