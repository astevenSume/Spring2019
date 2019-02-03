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
var Shield = (function (_super) {
    __extends(Shield, _super);
    function Shield() {
        var _this = _super.call(this) || this;
        _this.name = 'shield';
        _this.val = 0;
        _this.creatShape();
        return _this;
    }
    Shield.prototype.creatShape = function () {
        this.btm_tool = PlayScene.getToolBitmap("dj_sh114_png");
        this.addChild(this.btm_tool);
    };
    Shield.prototype.onStatus = function (ps, emy) {
        ps.showPositiveBar("dj_sh88_png");
    };
    Shield.prototype.skill = function (ps, emy) {
        console.log('吃到 护盾');
        ps.onShield = true;
        ps.img_light_shield.visible = true;
    };
    return Shield;
}(Enemy));
__reflect(Shield.prototype, "Shield");
//# sourceMappingURL=Shield.js.map