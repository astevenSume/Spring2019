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
        this.scr_shop.horizontalScrollBar.autoVisibility = false;
        var listArr = [
            { 'image1': 'resource/act/pig_goods/word_double.png', 'image2': 'resource/act/pig_goods/Coin_double.png', 'label': '￥5', 'label1': 'sbjb' },
            { 'image1': 'resource/act/pig_goods/word_life.png', 'image2': 'resource/act/pig_goods/buy_Heart_life.png', 'label': '￥20', 'label1': 'fhzx' },
            { 'image1': 'resource/act/pig_goods/word_ss.png', 'image2': 'resource/act/pig_goods/buy_ss.png', 'label': '￥3', 'label1': 'jhys' },
            { 'image1': 'resource/act/pig_goods/word_sj.png', 'image2': 'resource/act/pig_goods/dj_sj.png', 'label': '￥5', 'label1': 'zcls' },
            { 'image1': 'resource/act/pig_goods/word_dp.png', 'image2': 'resource/act/pig_goods/buy_dp.png', 'label': '￥10', 'label1': 'shzd' },
        ];
        // this.group_non.visible = true
        this.store_list.dataProvider = new eui.ArrayCollection(listArr);
        this.scr_shop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickBuyButton, this);
        this.sbtn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            SceneManager.instance.mainScene.toggleBtn(0);
            SceneManager.toMainScene();
        }, this);
        //是否确认够买
        this.btn_sure.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sureBuy, this);
        //取消
        this.btn_cancel.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBuy, this);
    };
    //取消购买
    StoreScene.prototype.closeBuy = function () {
        this.group_non.visible = false;
    };
    //确认购买
    StoreScene.prototype.sureBuy = function () {
        var uid = localStorage.getItem('uid');
        var params = "way=buy&uid=" + uid + "&tname=" + this.tname + "&expend=" + this.money;
        HttpServerSo.requestPost(params, this.postComplete, { that: this, tname: this.tname });
    };
    StoreScene.prototype.clickBuyButton = function (e) {
        if (e.target instanceof eui.Button) {
            var zh_tname = void 0;
            localStorage.setItem('buy_tname', e.target.name);
            switch (e.target.name) {
                case 'sbjb':
                    zh_tname = '双倍金币';
                    this.tname = 'tool_dbcoin';
                    this.money = 10;
                    break;
                case 'fhzx':
                    zh_tname = '复活之心';
                    this.tname = 'tool_revive';
                    this.money = 10;
                    break;
                case 'jhys':
                    zh_tname = '净化圣水';
                    this.tname = 'tool_drug';
                    this.money = 10;
                    break;
                case 'zcls':
                    zh_tname = '正常流速';
                    this.tname = 'tool_regular_speed';
                    this.money = 10;
                    break;
                case 'shzd':
                    zh_tname = '守护之盾';
                    this.tname = 'tool_shield';
                    this.money = 10;
                    break;
                default:
                    break;
            }
            this.group_non.visible = true;
            this.btn_cancel.visible = true;
            this.btn_sure.visible = true;
            this.btn_charge.visible = false;
            this.no_enough_line.text = "\u4EB2\uFF0C\u60A8\u6B63\u5728\u8D2D\u4E70\u201C" + zh_tname + "\u201D";
            this.buy_label.text = "\u5E10\u6237\u4F59\u989D\u6263\u9664" + this.money + "\u5143";
        }
    };
    StoreScene.prototype.postComplete = function (data, obj) {
        console.log('store_buy....' + data);
        var tmp_num = '';
        if (data == 'ok') {
            localStorage.setItem('main_status', 'true');
            localStorage.setItem('type', 'buy_tool');
            switch (obj.tname) {
                case 'sbjb':
                    tmp_num = parseInt(localStorage.getItem('double_num')) + 1 + '';
                    localStorage.setItem('double_num', tmp_num);
                    localStorage.setItem('buy_tname', 'sbjb');
                    break;
                case 'fhzx':
                    tmp_num = parseInt(localStorage.getItem('revive_num')) + 1 + '';
                    localStorage.setItem('revive_num', tmp_num);
                    localStorage.setItem('buy_tname', 'fhzx');
                    break;
                case 'jhys':
                    tmp_num = parseInt(localStorage.getItem('clean_num')) + 1 + '';
                    localStorage.setItem('clean_num', tmp_num);
                    localStorage.setItem('buy_tname', 'jhys');
                    break;
                case 'zcls':
                    tmp_num = parseInt(localStorage.getItem('speed_num')) + 1 + '';
                    localStorage.setItem('speed_num', tmp_num);
                    localStorage.setItem('buy_tname', 'zcls');
                    break;
                case 'shzd':
                    tmp_num = parseInt(localStorage.getItem('shield_num')) + 1 + '';
                    localStorage.setItem('shield_num', tmp_num);
                    localStorage.setItem('buy_tname', 'shzd');
                    break;
                default:
                    break;
            }
            SceneManager.instance.mainScene.toggleBtn(0);
            SceneManager.toMainScene();
        }
        else if (data == 'nonenough') {
            obj.that.no_enough_line.text = '亲，您的余额不足，无法购买';
            obj.that.buy_label.text = '道具哦，快去充值吧~';
            obj.that.btn_cancel.visible = false;
            obj.that.btn_sure.visible = false;
            obj.that.btn_charge.visible = true;
            obj.that.btn_charge.addEventListener(egret.TouchEvent.TOUCH_TAP, obj.that.notEnoughFund, obj.that);
        }
        else {
            console.log('res :' + data);
        }
    };
    StoreScene.prototype.notEnoughFund = function () {
        location.href = localStorage.getItem('recharge_url');
    };
    return StoreScene;
}(eui.Component));
__reflect(StoreScene.prototype, "StoreScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=StoreScene.js.map