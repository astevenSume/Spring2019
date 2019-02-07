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
var RecordScene = (function (_super) {
    __extends(RecordScene, _super);
    function RecordScene() {
        return _super.call(this) || this;
    }
    RecordScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RecordScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.rcd_scroll.verticalScrollBar.autoVisibility = false;
        this.sbtn_back.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.toRankScene();
            SceneManager.instance.mainScene.toggleBtn(0);
        }, this);
        var avatar = localStorage.getItem('avatar');
        var name = '';
        var real_name = localStorage.getItem('realName');
        if (real_name.length > 0) {
            name = real_name;
        }
        else {
            name = localStorage.getItem('username');
        }
        this.rcd_uname.text = name;
        console.log(avatar);
        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, function (evt) {
            var loader = evt.currentTarget;
            var texture = new egret.Texture();
            texture._setBitmapData(imageLoader.data);
            _this.rcd_ava.source = texture;
            var circle = new egret.Shape();
            circle.graphics.beginFill(0x000000);
            circle.graphics.drawCircle(20 + 27.5, 22 + 27.5, 27.5);
            circle.graphics.endFill();
            _this.rcd_group.addChild(circle);
            _this.rcd_ava.mask = circle;
        }, this);
        imageLoader.load(avatar);
        var uid = localStorage.getItem('uid');
        //获取最高记录
        HttpServerSo.requestPost("way=getSelfRecords&uid=" + uid, function (res, that) {
            var data = JSON.parse(res);
            var list_arr = [];
            // let lb:eui.Label = <eui.Label>that.rcd_scores 
            // lb.text = data.max_score + '亿'
            if (data.max_score != undefined && data.max_score != null) {
                that.rcd_scores.text = data.max_score / 10000 + '亿';
            }
            data.data.forEach(function (item, k) {
                list_arr.push({ score: '+' + item.max_score / 10000, the_date: item.overtime });
            });
            _this.rcd_list.dataProvider = new eui.ArrayCollection(list_arr);
        }, this);
    };
    return RecordScene;
}(eui.Component));
__reflect(RecordScene.prototype, "RecordScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RecordScene.js.map