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
var RuleScene = (function (_super) {
    __extends(RuleScene, _super);
    function RuleScene() {
        return _super.call(this) || this;
    }
    RuleScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RuleScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.scr_now.verticalScrollBar.autoVisibility = false;
        this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.instance.mainScene.toggleBtn(0);
            SceneManager.toMainScene();
        }, this);
    };
    return RuleScene;
}(eui.Component));
__reflect(RuleScene.prototype, "RuleScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RuleScene.js.map