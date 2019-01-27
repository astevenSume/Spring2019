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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
    Bomb.prototype.isAgain = function (ps) {
        ps.over_group.visible = true;
        ps.res_unit.text = ps.p_score.text.slice(ps.p_score.text.length - 1);
        var score = ps.p_score.text.slice(0, ps.p_score.text.length - 1);
        ps.res_score.text = score;
        ps.p_score.text = '0万';
        ps.setChildIndex(ps.over_group, ps.numChildren);
        ps.btn_again.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('再来一次..');
            ps.over_group.visible = false;
            ps.isPause = false;
            ps.speed_index = 0;
            ps.speed_level = 0;
            ps.game_init(false); //初始化游戏
        }, this);
        ps.icon_endclose.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.instance.mainScene.toggleBtn(0);
            SceneManager.toMainScene();
            ps.over_group.visible = false;
        }, this);
    };
    Bomb.prototype.onStatus = function (ps, emy) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var heart_num_str, heart_num;
            return __generator(this, function (_a) {
                if (ps.onShield)
                    return [2 /*return*/];
                ps.cleanAllNagetive();
                ps.isPause = true;
                heart_num_str = ps.p_heart_num.text;
                heart_num = parseInt(heart_num_str.slice(1));
                if (heart_num == 0) {
                    this.isAgain(ps);
                }
                else {
                    ps.relife_group.visible = true;
                    ps.setChildIndex(ps.relife_group, ps.numChildren);
                    ps.pbtn_relife.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        console.log('复活了..');
                        ps.p_heart_num.text = 'x' + (heart_num - 1);
                        ps.isPause = false;
                        ps.relife_group.visible = false;
                        ps.nagetive_status[Ns.Lock] = false;
                    }, this);
                    ps.pbtn_over_now.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                        _this.settleAccounts(ps);
                        _this.isAgain(ps);
                    }, this);
                }
                return [2 /*return*/];
            });
        });
    };
    Bomb.prototype.skill = function (ps, emy) {
        console.log('吃到 炸弹');
        if (!ps.onShield)
            ps.nagetive_status[Ns.Lock] = true;
    };
    Bomb.prototype.settleAccounts = function (ps) {
        var uid = localStorage.getItem('uid');
        var score = ps.score;
        var heart = parseInt(ps.p_heart_num.text.slice(1));
        var clean = parseInt(ps.cleansing_num.text.slice(1));
        var shield = parseInt(ps.shield_num.text.slice(1));
        var double = parseInt(ps.double_num.text.slice(1));
        var speed = parseInt(ps.common_num.text.slice(1));
        var params = "way=settleAccounts&uid=" + uid + "&score=" + score + "&heart=" + heart + "&clean=" + clean + "&shield=" + shield + "&double=" + double + "&speed=" + speed;
        // console.log(params)
        HttpServerSo.requestPost(params, this.postComplete);
    };
    Bomb.prototype.postComplete = function (data) {
        console.log('data : ' + data);
    };
    return Bomb;
}(Enemy));
__reflect(Bomb.prototype, "Bomb");
//# sourceMappingURL=Bomb.js.map