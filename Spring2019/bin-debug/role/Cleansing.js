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
var Cleansing = (function (_super) {
    __extends(Cleansing, _super);
    function Cleansing(val) {
        var _this = _super.call(this) || this;
        _this.val = val;
        _this.base_money_num = 10000; //基础钱数
        _this.name = 'cleansing';
        _this.creatShape(val);
        return _this;
    }
    Cleansing.prototype.creatShape = function (val) {
        this.btm_tool = PlayScene.getToolBitmap("dj_ss114_png");
        this.addChild(this.btm_tool);
    };
    Cleansing.prototype.onStatus = function (ps, emy) {
        ps.nagetive_status.forEach(function (data, key) {
            ps.nagetive_status[key] = false;
        });
        ps.nagetive_index.forEach(function (data, key) {
            ps.nagetive_index[key] = 0;
        });
    };
    Cleansing.prototype.skill = function (ps, emy) {
        //
    };
    return Cleansing;
}(Enemy));
__reflect(Cleansing.prototype, "Cleansing");
//# sourceMappingURL=Cleansing.js.map