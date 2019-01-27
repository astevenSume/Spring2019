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
var DoubleCoin = (function (_super) {
    __extends(DoubleCoin, _super);
    function DoubleCoin() {
        var _this = _super.call(this) || this;
        _this.name = 'doublecoin';
        _this.val = 0;
        _this.creatShape();
        return _this;
    }
    DoubleCoin.prototype.creatShape = function () {
        this.btm_tool = PlayScene.getToolBitmap("dj_gold_double_png");
        this.addChild(this.btm_tool);
    };
    DoubleCoin.prototype.onStatus = function (ps, emy) {
        ps.showPositiveBar("dj_double_png");
    };
    DoubleCoin.prototype.skill = function (ps, emy) {
        console.log('吃到 双倍');
    };
    return DoubleCoin;
}(Enemy));
__reflect(DoubleCoin.prototype, "DoubleCoin");
//# sourceMappingURL=DoubleCoin.js.map