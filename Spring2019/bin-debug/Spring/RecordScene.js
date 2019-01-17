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
        _super.prototype.childrenCreated.call(this);
    };
    return RecordScene;
}(eui.Component));
__reflect(RecordScene.prototype, "RecordScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RecordScene.js.map