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
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super.call(this) || this;
        _this._can_play_flag = true;
        _this._max_play_times = 6;
        _this.mainScene = new MainScene();
        _this.playScene = new PlayScene();
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
        //播放音乐
        // if (SoundController.cu_scene == 'playScene') {
        //     SoundController.stopNow()
        //     SoundController.startMuisc('resource/act/media/paopaokdc.mp3')
        // }        
        var mainScene = this.instance.mainScene;
        if (!mainScene.parent) {
            this.instance._stage.addChild(mainScene);
        }
        mainScene.showStatus();
        SceneManager.instance.removeOther(mainScene);
    };
    SceneManager.toPlayScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            var re_uname, playScene;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, RequestData.canPlay()];
                    case 1:
                        _a.sent();
                        console.log('=================000');
                        re_uname = localStorage.getItem('re_uname');
                        if (re_uname != '') {
                            this.instance.mainScene.showRename(re_uname);
                            return [2 /*return*/];
                        }
                        // console.log('start times0 : ' + localStorage.getItem('current_tiems'))
                        // setTimeout(()=>{
                        // if (!SceneManager.instance._can_play_flag) {
                        // this.instance.mainScene.cannotplayNow()
                        // } else {
                        //播放音乐
                        // SoundController.cu_scene = 'playScene'
                        // SoundController.stopNow()
                        // SoundController.startMuisc('resource/act/media/haizeiwang.mp3')
                        this.instance.playScene = new PlayScene();
                        playScene = this.instance.playScene;
                        // this.instance._stage.addChild(playScene)
                        this.instance.mainScene.addChild(playScene);
                        return [2 /*return*/];
                }
            });
        });
    };
    SceneManager.toRuleScene = function () {
        this.instance.ruleScene = new RuleScene;
        var ruleScene = this.instance.ruleScene;
        this.instance.removeOther(ruleScene);
        this.instance.mainScene.addChild(ruleScene);
    };
    SceneManager.toStoreScene = function () {
        this.instance.storeScene = new StoreScene;
        var storeScene = this.instance.storeScene;
        this.instance.removeOther(storeScene);
        this.instance.mainScene.addChild(storeScene);
    };
    SceneManager.toRankScene = function () {
        this.instance.rankScene = new RankScene;
        var rankScene = this.instance.rankScene;
        this.instance.removeOther(rankScene);
        this.instance.mainScene.addChild(rankScene);
    };
    SceneManager.toRecordScene = function () {
        this.instance.recordScene = new RecordScene();
        var recordScene = this.instance.recordScene;
        this.instance.removeOther(recordScene);
        this.instance.mainScene.addChild(recordScene);
    };
    SceneManager.prototype.removeOther = function (scene) {
        var _this = this;
        var sceneArr = [this.playScene, this.ruleScene, this.storeScene, this.rankScene, this.recordScene];
        sceneArr.forEach(function (item, k) {
            if (scene === item)
                return;
            if (item.parent) {
                _this.mainScene.removeChild(item);
            }
        });
    };
    return SceneManager;
}(eui.UILayer));
__reflect(SceneManager.prototype, "SceneManager");
//# sourceMappingURL=SceneManager.js.map