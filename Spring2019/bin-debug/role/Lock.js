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
var Lock = (function (_super) {
    __extends(Lock, _super);
    function Lock() {
        var _this = _super.call(this) || this;
        _this.name = 'lock';
        _this.val = 0;
        _this.creatShape();
        return _this;
    }
    Lock.prototype.creatShape = function () {
        this.btm_tool = PlayScene.getToolBitmap("dj_lock114_png");
        this.addChild(this.btm_tool);
    };
    Lock.prototype.onStatus = function (ps, emy) {
        if (ps.onShield)
            return;
        ps.nagetive_status[Ns.Lock] = true;
        ps.nagetive_index[Ns.Lock] = 0;
        ps.nagetive_group.addChild(ps.nagetive_shapes[Ns.Lock]);
        if (!ps.nicon_lock.visible)
            ps.nicon_lock.visible = true;
        if (ps.per_name.visible)
            ps.per_name.visible = false;
    };
    Lock.prototype.skill = function (ps, emy) {
    };
    return Lock;
}(Enemy));
__reflect(Lock.prototype, "Lock");
//# sourceMappingURL=Lock.js.map