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
var GoldPig = (function (_super) {
    __extends(GoldPig, _super);
    function GoldPig(pig) {
        var _this = _super.call(this) || this;
        _this.pig = pig;
        return _this;
    }
    Object.defineProperty(GoldPig.prototype, "init_x", {
        get: function () {
            return this._init_x;
        },
        set: function (n) {
            this._init_x = n;
        },
        enumerable: true,
        configurable: true
    });
    GoldPig.prototype.move = function (evt, p_role) {
        var now_x = evt.stageX;
        var offset_x = now_x - this.init_x;
        if (p_role.x + offset_x < -15) {
            p_role.x = -15;
        }
        else if (p_role.x + offset_x >= SceneManager._width - p_role.width + 15) {
            p_role.x = SceneManager._width - p_role.width + 15;
        }
        else {
            p_role.x += offset_x;
        }
        this.init_x = now_x;
    };
    GoldPig.prototype.skill = function () {
    };
    return GoldPig;
}(egret.Sprite));
__reflect(GoldPig.prototype, "GoldPig");
//# sourceMappingURL=GoldPig.js.map