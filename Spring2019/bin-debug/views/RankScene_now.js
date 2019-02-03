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
var RankScenes = (function (_super) {
    __extends(RankScenes, _super);
    function RankScenes() {
        var _this = _super.call(this) || this;
        _this.list_arr0 = [];
        _this.list_arr1 = [];
        _this.list_arr2 = [];
        _this.list_arr3 = [];
        _this.list_arr4 = [];
        _this.list_arr5 = [];
        _this.list_arr6 = [];
        _this.list_arr7 = [];
        return _this;
    }
    RankScenes.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    RankScenes.prototype.currectIndexShow = function (str_data) {
        var date_key = this.getDateOrderIndex(str_data);
        if (date_key == undefined)
            date_key = this.today_key;
        for (var i = 0; i < this.group_date.numChildren; i++) {
            var gp = this.group_date.getChildAt(i);
            gp.getChildAt(2).visible = false;
        }
        var cu_group = this.group_date.getChildAt(date_key - 1);
        cu_group.getChildAt(2).visible = true;
    };
    RankScenes.prototype.clickDateButton = function (evt) {
        var obj = evt.target;
        //初始状态
        // this.group_date.visible = true
        if (obj.name == 'label') {
            this.no_data_group.visible = false;
            var str_date = obj.text.substr(0, obj.text.length - 1);
            var tmp_data = void 0;
            this.currectIndexShow(str_date);
            if (str_date == this.today_date)
                str_date = '';
            switch (str_date) {
                case '28':
                    tmp_data = this.list_arr1;
                    this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr1);
                    break;
                case '29':
                    tmp_data = this.list_arr2;
                    this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr2);
                    break;
                case '30':
                    tmp_data = this.list_arr3;
                    this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr3);
                    break;
                case '31':
                    tmp_data = this.list_arr4;
                    this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr4);
                    break;
                case '1':
                    tmp_data = this.list_arr5;
                    this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr5);
                    break;
                case '2':
                    tmp_data = this.list_arr6;
                    this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr6);
                    break;
                case '3':
                    tmp_data = this.list_arr7;
                    this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr7);
                    break;
                default:
                    tmp_data = this.list_arr0;
                    this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr0);
                    break;
            }
            if (tmp_data.length == 0) {
                this.no_data_group.visible = true;
            }
        }
    };
    RankScenes.prototype.getRecords = function (uid) {
        var _this = this;
        //获取最高记录
        HttpServerSo.requestPost("way=get_records&uid=" + uid, function (data, that) {
            // console.log(data)
            // console.log('----')
            // return
            var res = JSON.parse(data);
            console.log('myIdex : ' + res.my_index);
            if (res.my_index === undefined) {
                that.my_index.text = '99+';
            }
            else {
                that.my_index.text = res.my_index;
            }
            if (res.today_max_score.length > 0) {
                var post_score = parseInt(res.today_max_score);
                var max_score = '';
                if (post_score > 9999) {
                    max_score = post_score / 10000 + '亿';
                }
                else {
                    max_score = post_score + '万';
                }
                _this.rank_score.text = max_score;
            }
            if (res.perday[0] != null) {
                var list_arr = [];
                res.perday.forEach(function (sub_data, sub_k) {
                    sub_data.forEach(function (item, k) {
                        var uname = item.username;
                        if (item.realName.length > 0)
                            uname = item.realName;
                        var now_arr = eval("that.list_arr" + (sub_k + 1));
                        now_arr.push({ id: k, order_num: item.order_num, img_order: item.img_name, uname: uname, udate: item.overtime, uscore: item.max_score / 10000 + '亿', award_word: item.award_word });
                    });
                });
                res.today_scores.forEach(function (item, k) {
                    var uname = item.username;
                    if (item.realName.length > 0)
                        uname = item.realName;
                    that.list_arr0.push({ id: k, order_num: item.order_num, img_order: item.img_name, uname: uname, udate: item.overtime, uscore: item.max_score / 10000 + '亿', award_word: item.award_word });
                });
                _this.records_list.dataProvider = new eui.ArrayCollection(that.list_arr0);
                _this.records_list.itemRenderer = RecordsItem;
                _this.no_data_group.visible = false;
                _this.group_date.visible = true;
                _this.title_group.visible = true;
            }
        }, this);
    };
    //未发放颜色 ff99ff
    //已发放颜色 9999FF
    RankScenes.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // this.group_score.verticalScrollBar.autoVisibility = false
        // this.group_date.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickDateButton, this)
        //显示今日状态
        // let today = new Date().getDate()
        // this.today_date = today + ''
        // this.today_key = this.getDateOrderIndex(today+'')
        // let today_obj = eval(`this.l_date_${this.today_key}`)
        // today_obj.text = '今日'
        // today_obj.parent.getChildAt(2).visible = true
        // let uid = localStorage.getItem('uid')
        this.rbtn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.toMainScene();
            SceneManager.instance.mainScene.toggleBtn(0);
        }, this);
        //显示当前日期
        // let cu_month: string
        // let cu_day: string
        // let month = new Date().getMonth() + 1;
        // let day = new Date().getDate()
        // if (month<10) {
        // 	cu_month ='0'+ month
        // } else {
        // 	cu_month = '' + month
        // }
        // if (day<10) {
        // 	cu_day = '0' + day
        // } else {
        // 	cu_day = '' + day 
        // }		
        // this.cu_date.text = cu_month + '-' + cu_day
        // var params = `way=rank&uid=${uid}`
        // HttpServerSo.requestPost(params, this.postComplete, this)
        // this.rinf_group.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
        // 	SceneManager.instance.mainScene.toggleBtn(0)
        // 	SceneManager.toRecordScene()
        // }, this)
        //this.getRecords(uid)
    };
    RankScenes.prototype.postComplete = function (data, obj) {
        if (data == 'no_data') {
        }
        else {
            obj.init_data(data);
        }
    };
    RankScenes.prototype.init_data = function (data) {
        var _this = this;
        var res = JSON.parse(data);
        var name = res.username;
        if (res.realName.length > 0)
            name = res.realName;
        this.real_name.text = name;
        //加载自己的头像
        // let avatar= 'http://thirdwx.qlogo.cn/mmopen/vi_32/jXMuUZyWicI88gYicC9E32bagIQT0fPzVzXWFn8biaMWmSQWIh19FSXHRXpwVYxFhuhvYvxazLITGNyjYbSA7SBMA/132';
        var avatar = localStorage.getItem('avatar');
        if (res.avatar.indexOf('http')) {
            avatar = 'http://www.le626.com/' + res.avatar;
        }
        else {
            avatar = res.avatar;
        }
        // egret.ImageLoader.crossOrigin = "anonymous" //webgl模式下使用
        var imageLoader = new egret.ImageLoader();
        imageLoader.addEventListener(egret.Event.COMPLETE, function (evt) {
            var loader = evt.currentTarget;
            var texture = new egret.Texture();
            texture._setBitmapData(imageLoader.data);
            _this.rimg_avatar.source = texture; //加载IMAGE图像
            var circle = new egret.Shape();
            circle.graphics.beginFill(0x000000);
            circle.graphics.drawCircle(72 + 20, 10 + 20, 20);
            circle.graphics.endFill();
            _this.rinf_group.addChild(circle);
            _this.rimg_avatar.mask = circle;
        }, event);
        imageLoader.load(avatar);
    };
    RankScenes.prototype.getDateOrderIndex = function (the_day) {
        var rtn_index;
        switch (the_day) {
            case '3'://要删除
                rtn_index = 1;
            case '4':
                rtn_index = 1;
                break;
            case '5':
                rtn_index = 2;
                break;
            case '6':
                rtn_index = 3;
                break;
            case '7':
                rtn_index = 4;
                break;
            case '8':
                rtn_index = 5;
                break;
            case '9':
                rtn_index = 6;
                break;
            case '10':
                rtn_index = 7;
                break;
        }
        return rtn_index;
    };
    return RankScenes;
}(eui.Component));
__reflect(RankScenes.prototype, "RankScenes", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=RankScene_now.js.map