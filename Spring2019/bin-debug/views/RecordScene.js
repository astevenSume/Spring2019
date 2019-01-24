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
var RecordScene = (function (_super) {
    __extends(RecordScene, _super);
    function RecordScene() {
        return _super.call(this) || this;
    }
    RecordScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RecordScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.sbtn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.toMainScene();
        }, this);
        var avatar = 'http://thirdwx.qlogo.cn/mmopen/vi_32/jXMuUZyWicI88gYicC9E32bagIQT0fPzVzXWFn8biaMWmSQWIh19FSXHRXpwVYxFhuhvYvxazLITGNyjYbSA7SBMA/132';
        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, function (evt) {
            var loader = evt.currentTarget;
            var texture = new egret.Texture();
            texture._setBitmapData(imageLoader.data);
            _this.rcd_ava.source = texture;
            var circle = new egret.Shape();
            circle.graphics.beginFill(0x000000);
            circle.graphics.drawCircle(20 + 27.5, 22 + 27.5, 27.5);
            circle.graphics.endFill();
            _this.rcd_group.addChild(circle);
            _this.rcd_ava.mask = circle;
        }, this);
        imageLoader.load(avatar);
    };
    return RecordScene;
}(eui.Component));
__reflect(RecordScene.prototype, "RecordScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RecordScene.js.map