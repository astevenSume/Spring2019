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
var Lightning = (function (_super) {
    __extends(Lightning, _super);
    function Lightning() {
        var _this = _super.call(this) || this;
        _this.name = 'lightning';
        _this.val = 0;
        _this.creatShape();
        return _this;
    }
    Lightning.prototype.creatShape = function () {
        this.btm_tool = PlayScene.getToolBitmap("dj_lightening114_png");
        this.addChild(this.btm_tool);
    };
    Lightning.prototype.onStatus = function (ps, emy) {
        ps.nagetive_status[Ns.Lightning] = true;
        ps.nagetive_index[Ns.Lightning] = 0;
        ps.nagetive_group.addChild(ps.nagetive_shape[Ns.Lightning]);
        if (!ps.nicon_lightning.visible)
            ps.nicon_lightning.visible = true;
        if (ps.per_name.visible)
            ps.per_name.visible = false;
    };
    Lightning.prototype.skill = function (ps, emy) {
    };
    return Lightning;
}(Enemy));
__reflect(Lightning.prototype, "Lightning");
//# sourceMappingURL=Lightning.js.map