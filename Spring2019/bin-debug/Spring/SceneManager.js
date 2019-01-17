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
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super.call(this) || this;
        _this.mainScene = new MainScene();
        _this.gameScene = new GameScene();
        _this.ruleScene = new RuleScene();
        _this.storeScene = new StoreScene();
        _this.rankScene = new RankScene();
        _this.recordScene = new RecordScene();
        return _this;
    }
    Object.defineProperty(SceneManager, "instance", {
        get: function () {
            if (!this.sceneManager) {
                this.sceneManager = new SceneManager();
            }
            return this.sceneManager;
        },
        enumerable: true,
        configurable: true
    });
    SceneManager.prototype.setStage = function (s) {
        this._stage = s;
    };
    SceneManager.toMainScene = function () {
        var mainScene = SceneManager.instance.mainScene;
        console.log(mainScene);
        if (!mainScene.parent) {
            SceneManager.instance._stage.addChild(mainScene);
        }
        SceneManager.instance.removeOther(mainScene);
    };
    SceneManager.prototype.removeOther = function (scene) {
        var _this = this;
        var sceneArr = [this.gameScene, this.ruleScene, this.storeScene, this.rankScene, this.recordScene];
        sceneArr.forEach(function (item) {
            if (scene === item)
                return;
            if (item.parent)
                _this.mainScene.removeChild(item);
        });
    };
    return SceneManager;
}(egret.Sprite));
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map