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