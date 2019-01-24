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
var SkullCoin = (function (_super) {
    __extends(SkullCoin, _super);
    function SkullCoin() {
        var _this = _super.call(this) || this;
        _this.name = 'skullcoin';
        _this.val = 0;
        _this.creatShape();
        return _this;
    }
    SkullCoin.prototype.creatShape = function () {
        this.btm_tool = PlayScene.getToolBitmap("dj_dj114_png");
        this.addChild(this.btm_tool);
    };
    SkullCoin.prototype.onStatus = function (ps, emy) {
        ps.nagetive_status[Ns.SkullCoin] = true;
        ps.nagetive_index[Ns.SkullCoin] = 0;
        ps.nagetive_group.addChild(ps.nagetive_shape[Ns.SkullCoin]);
        if (!ps.nicon_skullcoin.visible)
            ps.nicon_skullcoin.visible = true;
        if (ps.per_name.visible)
            ps.per_name.visible = false;
    };
    SkullCoin.prototype.skill = function (ps, emy) {
    };
    return SkullCoin;
}(Enemy));
__reflect(SkullCoin.prototype, "SkullCoin");
//# sourceMappingURL=SkullCoin.js.map