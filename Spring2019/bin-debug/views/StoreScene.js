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
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        var listArr = [
            { 'image1': 'resource/act/pig_goods/word_double.png', 'image2': 'resource/act/pig_goods/Coin_double.png', 'label': '￥5', 'label1': 'sbjb' },
            { 'image1': 'resource/act/pig_goods/word_life.png', 'image2': 'resource/act/pig_goods/buy_Heart_life.png', 'label': '￥20', 'label1': 'fhzx' },
            { 'image1': 'resource/act/pig_goods/word_ss.png', 'image2': 'resource/act/pig_goods/buy_ss.png', 'label': '￥3', 'label1': 'jhys' },
            { 'image1': 'resource/act/pig_goods/word_sj.png', 'image2': 'resource/act/pig_goods/dj_sj.png', 'label': '￥5', 'label1': 'zcls' },
            { 'image1': 'resource/act/pig_goods/word_dp.png', 'image2': 'resource/act/pig_goods/buy_dp.png', 'label': '￥10', 'label1': 'shzd' },
        ];
        // this.group_non.visible = true
        this.store_list.dataProvider = new eui.ArrayCollection(listArr);
        this.scr_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            if (e.target instanceof eui.Button) {
                var money = 0;
                var uid = localStorage.getItem('uid');
                // let uid = 24576 //ceshi
                var tname = '';
                switch (e.target.name) {
                    case 'sbjb':
                        tname = 'tool_dbcoin';
                        money = 10;
                        break;
                    case 'fhzx':
                        tname = 'tool_revive';
                        money = 11;
                        break;
                    case 'jhys':
                        tname = 'tool_drug';
                        money = 12;
                        break;
                    case 'zcls':
                        tname = 'tool_regular_speed';
                        money = 13;
                        break;
                    case 'shzd':
                        tname = 'tool_shield';
                        money = 14;
                        break;
                    default:
                        break;
                }
                var params = "way=buy&uid=" + uid + "&tname=" + tname + "&expend=" + money;
                HttpServerSo.requestPost(params, _this.postComplete, { that: _this, tname: e.target.name });
            }
        }, this);
        this.sbtn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            // SceneManager.instance.mainScene.toggleBtn(0)
            SceneManager.toMainScene();
        }, this);
    };
    StoreScene.prototype.postComplete = function (data, obj) {
        console.log('data : ' + obj);
        if (data == 'ok') {
        }
        else {
            // console.log()
            obj.that.group_non.visible = true;
            // this.group_non.visible = true
            obj.that.btn_recharge.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                console.log('aaa' + obj.tname);
            }, obj.that);
        }
    };
    return StoreScene;
}(eui.Component));
__reflect(StoreScene.prototype, "StoreScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=StoreScene.js.map