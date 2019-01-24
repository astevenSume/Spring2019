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
var Bomb = (function (_super) {
    __extends(Bomb, _super);
    function Bomb() {
        var _this = _super.call(this) || this;
        _this.name = 'bomb';
        _this.val = 0;
        _this.creatShape();
        return _this;
    }
    Bomb.prototype.creatShape = function () {
        this.btm_tool = PlayScene.getToolBitmap("dj_zd114_png");
        this.addChild(this.btm_tool);
    };
    Bomb.prototype.onStatus = function (ps, emy) {
    };
    Bomb.prototype.skill = function (ps, emy) {
    };
    return Bomb;
}(Enemy));
__reflect(Bomb.prototype, "Bomb");
//# sourceMappingURL=Bomb.js.map