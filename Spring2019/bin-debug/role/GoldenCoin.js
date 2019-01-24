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
var GoldenCoin = (function (_super) {
    __extends(GoldenCoin, _super);
    function GoldenCoin(val) {
        var _this = _super.call(this) || this;
        _this.val = val;
        _this.base_money_num = 10000; //基础钱数
        _this.name = 'goldencoin';
        _this.creatShape(val);
        return _this;
    }
    GoldenCoin.prototype.creatShape = function (val) {
        this.btm_tool = new egret.Bitmap();
        this.btm_tool.texture = RES.getRes("dj_glod_10_png");
        switch (val) {
            case 10:
                this.btm_tool.texture = RES.getRes("dj_glod_10_png");
                break;
            case 100000:
                this.btm_tool.texture = RES.getRes("dj_gold_yi_png");
                break;
            default:
                break;
        }
        this.addChild(this.btm_tool);
        //  Math.floor(Math.random() * SceneManager._width)
        var rdm_x = PlayScene.getRandomX();
        this.btm_tool.width = 57;
        this.btm_tool.height = 57;
        this.btm_tool.x = rdm_x;
        this.btm_tool.y = 0;
    };
    GoldenCoin.prototype.onStatus = function (ps, emy) {
    };
    GoldenCoin.prototype.skill = function (ps, emy) {
        //增加金币
        ps.score += emy.val;
        // ps.score += 10001 //测试用
        if (ps.score > 9999) {
            ps.p_score.text = '+' + ps.score / 10000 + '亿';
        }
        else {
            ps.p_score.text = '+' + ps.score + '万';
        }
    };
    return GoldenCoin;
}(Enemy));
__reflect(GoldenCoin.prototype, "GoldenCoin");
//# sourceMappingURL=GoldenCoin.js.map