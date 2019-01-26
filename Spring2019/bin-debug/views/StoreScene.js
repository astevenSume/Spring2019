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
var StoreScene = (function (_super) {
    __extends(StoreScene, _super);
    function StoreScene() {
        return _super.call(this) || this;
    }
    StoreScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    StoreScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        var listArr = [
            { 'image1': 'resource/act/pig_goods/word_double.png', 'image2': 'resource/act/pig_goods/Coin_double.png', 'label': '￥5', 'label1': 'sbjb' },
            { 'image1': 'resource/act/pig_goods/word_life.png', 'image2': 'resource/act/pig_goods/buy_Heart_life.png', 'label': '￥20', 'label1': 'fhzx' },
            { 'image1': 'resource/act/pig_goods/word_ss.png', 'image2': 'resource/act/pig_goods/buy_ss.png', 'label': '￥3', 'label1': 'jhys' },
            { 'image1': 'resource/act/pig_goods/word_sj.png', 'image2': 'resource/act/pig_goods/dj_sj.png', 'label': '￥5', 'label1': 'zcls' },
            { 'image1': 'resource/act/pig_goods/word_dp.png', 'image2': 'resource/act/pig_goods/buy_dp.png', 'label': '￥10', 'label1': 'shzd' },
        ];
        this.store_list.dataProvider = new eui.ArrayCollection(listArr);
        this.scr_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (e.target instanceof eui.Button) {
                console.log(e.target.name);
                switch (e.target.name) {
                    case 'sbjb':
                        break;
                    case 'fhzx':
                        break;
                    case 'jhys':
                        break;
                    case 'zcls':
                        break;
                    case 'shzd':
                        break;
                    default:
                        break;
                }
            }
        }, this);
        this.sbtn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            // SceneManager.instance.mainScene.toggleBtn(0)
            SceneManager.toMainScene();
        }, this);
    };
    return StoreScene;
}(eui.Component));
__reflect(StoreScene.prototype, "StoreScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=StoreScene.js.map