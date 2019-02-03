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
var Heart = (function (_super) {
    __extends(Heart, _super);
    function Heart() {
        var _this = _super.call(this) || this;
        _this.name = 'heart';
        _this.val = 0;
        _this.creatShape();
        return _this;
    }
    Heart.prototype.creatShape = function () {
        this.btm_tool = PlayScene.getToolBitmap("dj_life114_png");
        this.addChild(this.btm_tool);
    };
    Heart.prototype.onStatus = function (ps, emy) {
    };
    Heart.prototype.skill = function (ps, emy) {
        console.log('吃到 复活');
        PlaySceneSoundController.startMuisc('resource/act/media/xiaochu.mp3');
        // ps.p_heart_num.text = 'x' + (parseInt(ps.p_heart_num.text.slice(1)) + 1)
    };
    return Heart;
}(Enemy));
__reflect(Heart.prototype, "Heart");
//# sourceMappingURL=Heart.js.map