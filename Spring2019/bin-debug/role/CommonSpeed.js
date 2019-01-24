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
var CommonSpeed = (function (_super) {
    __extends(CommonSpeed, _super);
    function CommonSpeed() {
        var _this = _super.call(this) || this;
        _this.name = 'commonspeed';
        _this.val = 0;
        _this.creatShape();
        return _this;
    }
    CommonSpeed.prototype.creatShape = function () {
        this.btm_tool = PlayScene.getToolBitmap("dj_ss114_png");
        this.addChild(this.btm_tool);
    };
    CommonSpeed.prototype.onStatus = function (ps, emy) {
    };
    CommonSpeed.prototype.skill = function (ps, emy) {
    };
    return CommonSpeed;
}(Enemy));
__reflect(CommonSpeed.prototype, "CommonSpeed");
//# sourceMappingURL=CommonSpeed.js.map