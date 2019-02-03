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
var PlaySceneSoundController = (function (_super) {
    __extends(PlaySceneSoundController, _super);
    function PlaySceneSoundController() {
        return _super.call(this) || this;
    }
    Object.defineProperty(PlaySceneSoundController, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new PlaySceneSoundController();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    PlaySceneSoundController.startMuisc = function (url) {
        //创建 Sound 对象
        var sound = new egret.Sound();
        var url = url;
        //添加加载完成侦听
        sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //开始加载
        sound.load(url);
    };
    PlaySceneSoundController.onLoadComplete = function (event) {
        //获取加载到的 Sound 对象
        var sound = event.target;
        //播放音乐
        this.soundChannel = sound.play(0, 1);
        console.log('播放');
        // channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    };
    PlaySceneSoundController.stopNow = function () {
        this.soundChannel.stop();
    };
    return PlaySceneSoundController;
}(egret.DisplayObjectContainer));
__reflect(PlaySceneSoundController.prototype, "PlaySceneSoundController");
//# sourceMappingURL=PlaySceneSoundController.js.map