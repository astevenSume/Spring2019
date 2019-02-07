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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        return _super.call(this) || this;
        // console.log(SoundController.soundChannel)
    }
    MainScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    MainScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (e.target.numElements) {
                console.log('未点到按钮！');
                return;
            }
            var pbtn = e.target;
            if (pbtn.selected) {
                _this.toggleBtn(pbtn);
            }
            else {
                pbtn.selected = true;
            }
        }, this);
        this.mbtn_start.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.toPlayScene();
        }, this);
    };
    MainScene.prototype.restoreStatus = function () {
        var _this = this;
        localStorage.setItem('main_status', 'false');
        localStorage.setItem('buy_type', '');
        localStorage.setItem('buy_tname', '');
        var timer = new egret.Timer(1000, 1);
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.group_line.visible = false;
        }, this);
        timer.start();
    };
    MainScene.prototype.cannotplayNow = function () {
        var _this = this;
        this.alert_not_enough.visible = true;
        var timer = new egret.Timer(3000, 1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            _this.alert_not_enough.visible = false;
        }, this);
        timer.start();
    };
    MainScene.prototype.showRename = function (re_uname) {
        var _this = this;
        this.label_reuser.text = "\u8BF7\u4F7F\u7528" + re_uname + "\u5E10\u6237\u8FDB\u884C\u6E38\u620F~";
        this.group_reuser.visible = true;
        var timer = new egret.Timer(2000, 1);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            _this.group_reuser.visible = false;
        }, this);
        timer.start();
    };
    MainScene.prototype.showStatus = function () {
        var status = localStorage.getItem('main_status');
        if (status == 'true') {
            var type = localStorage.getItem('type');
            if (type == 'buy_tool') {
                var buy_tname = localStorage.getItem('buy_tname');
                var now_num = void 0;
                if (buy_tname.length > 0) {
                    this.group_line.visible = true;
                    switch (buy_tname) {
                        case 'sbjb':
                            now_num = parseInt(localStorage.getItem('double_num')) + 1;
                            localStorage.setItem('double_num', now_num + '');
                            this.font_two.text = "\u201C\u53CC\u500D\u91D1\u5E01\u201D \u4E00\u4EFD~";
                            break;
                        case 'fhzx':
                            now_num = parseInt(localStorage.getItem('revive_num')) + 1;
                            localStorage.setItem('revive_num', now_num + '');
                            this.font_two.text = "\u201C\u590D\u6D3B\u4E4B\u5FC3\u201D \u4E00\u4EFD~";
                            break;
                        case 'jhys':
                            now_num = parseInt(localStorage.getItem('clean_num')) + 1;
                            localStorage.setItem('clean_num', now_num + '');
                            this.font_two.text = "\u201C\u51C0\u5316\u5723\u6C34\u201D \u4E00\u4EFD~";
                            break;
                        case 'zcls':
                            now_num = parseInt(localStorage.getItem('speed_num')) + 1;
                            localStorage.setItem('speed_num', now_num + '');
                            this.font_two.text = "\u201C\u6B63\u5E38\u6D41\u901F\u201D \u4E00\u4EFD~";
                            break;
                        case 'shzd':
                            now_num = parseInt(localStorage.getItem('shield_num')) + 1;
                            localStorage.setItem('shield_num', now_num + '');
                            this.font_two.text = "\u201C\u5B88\u62A4\u4E4B\u76FE\u201D \u4E00\u4EFD~";
                            break;
                        default:
                            break;
                    }
                    this.restoreStatus();
                }
            }
            else if (type == 'recharge') {
            }
        }
    };
    MainScene.prototype.toggleBtn = function (pbtn) {
        this.group_mbtn.$children.forEach(function (toggleBtn) {
            if (pbtn === toggleBtn) {
                return;
            }
            else {
                pbtn = pbtn;
                toggleBtn.selected = false;
            }
        });
        if (pbtn === 0) {
            this.setChildIndex(this.group_mbtn, this.numChildren);
            console.log('back');
            return;
        }
        var btnindex = this.group_mbtn.getChildIndex(pbtn);
        switch (btnindex) {
            case 0:
                SceneManager.toRuleScene();
                this.setChildIndex(this.group_mbtn, this.numChildren);
                break;
            case 1:
                SceneManager.toStoreScene();
                this.setChildIndex(this.group_mbtn, this.numChildren);
                break;
            case 2:
                SceneManager.toRankScene();
                this.setChildIndex(this.group_mbtn, this.numChildren);
                break;
            default:
                break;
        }
    };
    return MainScene;
}(eui.Component));
__reflect(MainScene.prototype, "MainScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainScene.js.map