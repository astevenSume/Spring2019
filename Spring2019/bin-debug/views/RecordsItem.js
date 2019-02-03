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
var RecordsItem = (function (_super) {
    __extends(RecordsItem, _super);
    function RecordsItem() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/skins/item-skins/records_item.exml";
        // this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.onComplete, this)
        // eui.Watcher.watch(this, ["data"], this.onDatachanged, this)
        _this.award_word.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            location.href = "http://www.le626.com/index.st/User/vcoin";
        }, _this);
        return _this;
    }
    // private onDatachanged() {
    // console.log(this.data)
    // }
    RecordsItem.prototype.dataChanged = function () {
        if (this.data.img_order.lenght > 0) {
            this.order_font.visible = false;
        }
        if (parseInt(this.data.id) % 2 == 0) {
            this.item_bg.fillColor = 0xf1f8fe;
        }
    };
    return RecordsItem;
}(eui.ItemRenderer));
__reflect(RecordsItem.prototype, "RecordsItem");
//# sourceMappingURL=RecordsItem.js.map