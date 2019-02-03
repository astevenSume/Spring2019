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
var Ns;
(function (Ns) {
    Ns[Ns["SkullCoin"] = 0] = "SkullCoin";
    Ns[Ns["Lightning"] = 1] = "Lightning";
    Ns[Ns["Lock"] = 2] = "Lock";
})(Ns || (Ns = {})); //负面状态
var NonSustain;
(function (NonSustain) {
    NonSustain[NonSustain["bomb"] = 0] = "bomb";
    NonSustain[NonSustain["goldencoin"] = 1] = "goldencoin";
})(NonSustain || (NonSustain = {})); //非持续技能，比如吃金币
var PlayScene = (function (_super) {
    __extends(PlayScene, _super);
    function PlayScene() {
        var _this = _super.call(this) || this;
        _this.start_index = 1;
        _this.start_flag = false;
        _this._score = 0;
        _this.enemy_list = [];
        _this._PI = Math.PI;
        _this._oneDegree = Math.PI / 180;
        _this.surpass_flag_one = false;
        _this.surpass_flag_two = false;
        _this.surpass_flag_three = false;
        _this.surpass_flag_four = false;
        _this.surpass_flag_five = false;
        _this.surpass_flag_six = false;
        _this.surpass_flag_seven = false;
        _this.surpass_flag_eight = false;
        _this.surpass_flag_nine = false;
        _this.surpass_flag_ten = false;
        _this.common_speed_flag = false; //true时为正常流速
        _this.golden_coin_rate = 10;
        _this.commom_speed_rate = 0;
        _this.double_coin_rate = 0;
        _this.heart_rate = 0;
        _this.lightning_rate = 0;
        _this.skull_coin_rate = 0;
        _this.lock_rate = 0;
        _this.shield_rate = 0;
        _this.bomb_rate = 0;
        _this.cleansing = 0;
        _this.eatedFlag = false;
        _this.level_seconds = 2; //每几秒一档
        _this.thirty_seconds_level_seconds = 3; //30秒的几秒一档
        _this.temp_level = 0; //临时记档
        _this.constructor_init(true);
        return _this;
    }
    //初始化道具
    PlayScene.prototype.initData = function () {
        this.p_heart_num.text = 'x' + localStorage.getItem('revive_num');
        this.cleansing_num.text = 'x' + localStorage.getItem('clean_num');
        this.shield_num.text = 'x' + localStorage.getItem('shield_num');
        this.double_num.text = 'x' + localStorage.getItem('double_num');
        this.common_num.text = 'x' + localStorage.getItem('speed_num');
    };
    PlayScene.prototype.constructor_init = function (first) {
        var _this = this;
        this._findex = 0;
        console.log(this.enemy_list);
        if (this.enemy_list.length > 0) {
            this.enemy_list.forEach(function (emy) {
                _this.removeEnemy(emy);
            });
        }
        this.score = 0;
        //速度初始化
        this.create_tool_speed = 30;
        this.down_speed = 3;
        this.positive_status = false;
        this._positive_time = 90;
        this._positive_index = 0;
        this.positive_name = 'none';
        this._nagetive_time = 90; //影响时间
        this.nagetive_status = [false, false, false]; //是否开启
        this.nagetive_index = [0, 0, 0];
        this.nagetive_shapes = [new egret.Shape(), new egret.Shape(), new egret.Shape()];
        this._nagetive_radius = 15;
        this.onShield = false;
        if (first) {
            this.isPause = false;
            this.speed_index = 0;
            this.speed_level = 0;
        }
        if (!first) {
            if (this.relife_group.visible)
                this.relife_group.visible = false;
        }
        this.light_rotation_angle = 0;
        this.add_coin_arr = [];
    };
    Object.defineProperty(PlayScene.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (n) {
            this._score = n;
        },
        enumerable: true,
        configurable: true
    });
    PlayScene.prototype.childrenCreated = function () {
        var _this = this;
        _super.prototype.childrenCreated.call(this);
        this.initData();
        this.init_me(); //对主角金猪的初始化
        this.lbl_times.text = localStorage.getItem('current_tiems') + '/20';
        this.pbtn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.isPause = true;
            SceneManager.toMainScene();
        }, this);
        this.group_tool.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickToolGroup, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this); //测试要关
        this.randomGetTool();
        //倒计时
        // var timer: egret.Timer = new egret.Timer(1000,4)
        // this.pre_start.visible = true
        // timer.addEventListener(egret.TimerEvent.TIMER, () => {
        // 	this.start_index++
        // 	if (this.start_index == 2) {
        // 		this.pre_start.texture = RES.getRes("two_png")
        // 	} else if (this.start_index == 3) {
        // 		this.pre_start.texture = RES.getRes("one_png")
        // 	} else if (this.start_index == 4) {
        // 		this.pre_start.texture = RES.getRes("go_png")
        // 	} else if (this.start_index == 5) {
        // 		this.pre_start.visible = false
        // 		this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this)		
        // 		//初始创建
        // 		this.randomGetTool()
        // 	}
        // }, this)
        // timer.start()
    };
    PlayScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PlayScene.prototype.init_me = function () {
        var _this = this;
        this.gold_pig = new GoldPig(this.pig);
        this.per_name.text = localStorage.getItem('username');
        this.nagetive_icons = [this.nicon_skullcoin, this.nicon_lightning, this.nicon_lock];
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
            _this.gold_pig.init_x = evt.stageX;
        }, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (evt) {
            if (_this.nagetive_status[Ns.Lock] == true)
                return;
            _this.gold_pig.move(evt, _this.p_role);
        }, this);
        this._progress_bar_width = this.icon_progressbar.width;
    };
    //是否能用并减1
    PlayScene.prototype.enoughPositive = function (tool_name) {
        var label_tool;
        if (tool_name == 'yaoshui') {
            label_tool = eval('this.cleansing_num');
        }
        else if (tool_name == 'dj_sh88_png') {
            label_tool = eval('this.shield_num');
        }
        else if (tool_name == 'dj_double_png') {
            label_tool = eval('this.double_num');
        }
        else if (tool_name == 'dj_time88_png') {
            label_tool = eval('this.common_num');
        }
        var num_str = label_tool.text;
        var c_num = parseInt(num_str.slice(1));
        if (c_num == 0)
            return false;
        console.log('c_num : ' + c_num);
        label_tool.text = 'x' + (c_num - 1);
        return true;
    };
    PlayScene.prototype.clickToolGroup = function (evt) {
        if (evt.target.numElements) {
            console.log('点到空白处...');
            return;
        }
        var enoughNum = this.enoughPositive(evt.target.name);
        if (!enoughNum)
            return;
        //初始状态
        this.closePositive();
        this.userDatabaseTool(evt.target.name);
        if (evt.target.name == 'yaoshui') {
            console.log('使用了净化药水。。。');
            this.cleanAllNagetive();
            return;
        }
        this.showPositiveBar(evt.target.name);
        if (evt.target.name == 'dj_sh88_png') {
            this.img_light_shield.visible = true;
            this.onShield = true;
        }
        else {
            this.img_light_shield.visible = false;
            this.onShield = false;
        }
        if (evt.target.name == 'dj_time88_png') {
            console.log('匀速药水...');
            this.down_speed = 5;
            this.create_tool_speed = 30;
            this.common_speed_flag = true;
        }
    };
    PlayScene.prototype.userDatabaseTool = function (tname) {
        //本地数据减少
        var now_num = '';
        switch (tname) {
            case 'revive':
                now_num = (parseInt(localStorage.getItem('revive_num')) - 1) + '';
                localStorage.setItem('revive_num', now_num);
                break;
            case 'yaoshui':
                now_num = (parseInt(localStorage.getItem('clean_num')) - 1) + '';
                localStorage.setItem('clean_num', now_num);
                break;
            case 'dj_double_png':
                now_num = (parseInt(localStorage.getItem('double_num')) - 1) + '';
                localStorage.setItem('double_num', now_num);
                break;
            case 'dj_sh88_png':
                now_num = (parseInt(localStorage.getItem('shield_num')) - 1) + '';
                localStorage.setItem('shield_num', now_num);
                break;
            case 'dj_time88_png':
                now_num = (parseInt(localStorage.getItem('speed_num')) - 1) + '';
                localStorage.setItem('speed_num', now_num);
                break;
        }
        //
        console.log('到数据库减数据。。。' + tname);
        var uid = localStorage.getItem('uid');
        HttpServerSo.requestPost("way=use_tool&uid=" + uid + "&tname=" + tname, function (data) {
            // console.log(data)
        });
    };
    //删除
    PlayScene.prototype.removeEnemy = function (emy) {
        if (emy.parent)
            this.removeChild(emy);
        this.enemy_list.splice(this.enemy_list.indexOf(emy), 1);
        emy = null;
    };
    /*
     *	添加
     *  rate指定创建固定道具
    */
    PlayScene.prototype.getGoldencoin = function () {
        var coin = '';
        var rdm = Math.random();
        // if (rdm < 0.6) {
        // 	coin = 'GoldenCoin(10)'
        // } else 
        if (rdm < 0.5) {
            coin = 'GoldenCoin(100)';
        }
        else if (rdm < 0.85) {
            coin = 'GoldenCoin(1000)';
        }
        else if (rdm < 0.95) {
            coin = 'GoldenCoin(10000)';
        }
        else {
            coin = 'GoldenCoin(100000)';
        }
        return coin;
    };
    PlayScene.prototype.randomGetTool = function (rate) {
        var show_tool;
        this.commom_speed_rate = this.golden_coin_rate + 6;
        this.double_coin_rate = this.commom_speed_rate + 3;
        this.heart_rate = this.double_coin_rate + 1;
        this.lightning_rate = this.heart_rate + 4;
        this.skull_coin_rate = this.lightning_rate + 5;
        this.lock_rate = this.skull_coin_rate + 10;
        this.shield_rate = this.lock_rate + 4;
        this.bomb_rate = this.shield_rate + 12;
        this.cleansing = this.bomb_rate + 1;
        // console.log(commom_speed_rate)
        // console.log(double_coin_rate)
        // console.log(heart_rate)
        // console.log(lightning_rate)
        // console.log(skull_coin_rate)
        // console.log(lock_rate)
        // console.log(shield_rate)
        // console.log(bomb_rate)
        // console.log(cleansing)
        var rdm_num = Math.random() * 100;
        if (rate > 0)
            rdm_num = rate;
        if (rdm_num < this.golden_coin_rate) {
            show_tool = this.getGoldencoin();
        }
        else if (rdm_num < this.commom_speed_rate) {
            show_tool = 'CommonSpeed()';
        }
        else if (rdm_num < this.double_coin_rate) {
            show_tool = 'DoubleCoin()';
        }
        else if (rdm_num < this.heart_rate) {
            show_tool = this.getGoldencoin();
            // show_tool = 'Heart()' //不再掉心
        }
        else if (rdm_num < this.lightning_rate) {
            show_tool = 'Lightning()';
        }
        else if (rdm_num < this.skull_coin_rate) {
            show_tool = 'SkullCoin()';
        }
        else if (rdm_num < this.lock_rate) {
            show_tool = 'Lock()';
        }
        else if (rdm_num < this.shield_rate) {
            show_tool = 'Shield()';
        }
        else if (rdm_num < this.bomb_rate) {
            show_tool = 'Bomb()';
        }
        else if (rdm_num < this.cleansing) {
            show_tool = 'Cleansing()';
        }
        else {
            show_tool = this.getGoldencoin();
        }
        // let dmx = Math.random()
        // if (dmx < 0.2) {
        // 	show_tool = 'Shield()'
        // } else if (dmx < 0.4) {
        // 	show_tool = 'DoubleCoin()'
        // } else if (dmx < 0.6) {
        // 	show_tool = 'Lock()'
        // } else if (dmx < 0.9) {
        // 	// show_tool = 'Cleansing()'
        // }
        //todo负效果时，只出现金币和其它负效果
        var tool = eval("new " + show_tool);
        this.enemy_list.push(tool);
        this.addChild(tool);
    };
    PlayScene.prototype.showPositiveBar = function (name) {
        this._positive_index = 0;
        this.icon_progressbar.scaleX = 1;
        this.group_tool.visible = false;
        this.positive_group.visible = true;
        this.positive_status = true;
        this.positive_name = name;
        this.tool_icon.texture = RES.getRes(name);
        if (this.positive_name == 'dj_double_png') {
            this.img_light_shield.visible = false;
            this.onShield = false;
            this.common_speed_flag = false;
        }
        if (this.positive_name == 'dj_time88_png') {
            this.img_light_shield.visible = false;
            this.onShield = false;
        }
        if (this.positive_name == 'dj_sh88_png') {
            this.common_speed_flag = false;
        }
    };
    PlayScene.prototype.closePositive = function () {
        this.group_tool.visible = true;
        this.positive_group.visible = false;
        this.positive_status = false;
        this._positive_index = 0;
        this.icon_progressbar.scaleX = 1;
        // if (this.positive_name == 'dj_time88_png') {
        this.common_speed_flag = false;
        // }
        // if (this.positive_name == 'dj_sh88_png') {
        this.img_light_shield.visible = false;
        this.onShield = false;
        // }
        this.positive_name = 'none';
    };
    PlayScene.prototype.cleanAllNagetive = function () {
        //effected净化	
        // this.common_speed_flag = false
        var _this = this;
        //显示净化
        this.nagetive_status.forEach(function (v, k) {
            _this.nagetive_status[k] = false;
            _this.nagetive_index[k] = 0;
            if (_this.nagetive_shapes[k].parent)
                _this.nagetive_group.removeChild(_this.nagetive_shapes[k]);
            if (_this.nagetive_icons[k].visible)
                _this.nagetive_icons[k].visible = false;
            if (!_this.per_name.visible)
                _this.per_name.visible = true;
        });
    };
    //检测吃到道具并施放技能
    PlayScene.prototype.toolEated = function (tool, emy) {
        this.eatedFlag = this.pig.hitTestPoint(tool.btm_tool.x + 28.5, emy.y + 57);
        if (this.eatedFlag === true) {
            tool.onStatus(this, emy);
            tool.skill(this, emy);
            // if (emy.name == 'bomb')return
            this.removeEnemy(emy);
        }
    };
    //每秒一档速度
    PlayScene.prototype.setSpeed = function () {
        if (this.down_speed - this.current_speed == 6)
            return;
        this.speed_index += 1;
        this.temp_level = Math.floor(this.speed_index / (30 * this.level_seconds));
        this.speed_level = this.temp_level;
        this.down_speed = 3 + this.speed_level;
        if (this.down_speed < 10) {
            this.create_tool_speed = 30;
        }
        else if (this.down_speed < 20) {
            if (this.down_speed == 15)
                this.level_seconds = this.thirty_seconds_level_seconds;
            this.create_tool_speed = 10;
        }
        else if (this.down_speed < 30) {
            this.create_tool_speed = 4;
        }
        else if (this.down_speed < 40) {
            this.create_tool_speed = 2;
        } //50速判断不出hit事件
        else {
            this.down_speed = 40;
            this.create_tool_speed = 2;
        }
    };
    //负面道具样式的显示与消失
    // private nagetiveShowHide(instance_time: number){
    // }
    PlayScene.prototype.onEnterFrame = function (evt) {
        var _this = this;
        if (this.isPause)
            return;
        this._findex += 1;
        // // console.log('档位：' + this.speed_level)
        // console.log('速度：' + this.down_speed)
        // console.log('间隔: ' + this.create_tool_speed)
        if (!this.common_speed_flag)
            this.setSpeed();
        //上跳金币效果
        if (this.add_coin_arr.length > 0) {
            this.add_coin_arr.forEach(function (gold_label) {
                if (gold_label.alpha > 0) {
                    gold_label.alpha -= 0.1;
                    gold_label.y -= 1;
                }
                else {
                    var start_index = _this.add_coin_arr.indexOf(gold_label);
                    _this.add_coin_arr.splice(start_index, 1);
                    _this.p_role.addChild(gold_label);
                }
            });
        }
        //增益道具的使用
        if (this.positive_status) {
            this._positive_index++;
            if (this.positive_name != 'none') {
                var positive_instance_time = void 0;
                if (this.positive_name == 'dj_double_png') {
                    positive_instance_time = this._positive_time + 60;
                }
                else {
                    positive_instance_time = this._positive_time;
                }
                this.icon_progressbar.scaleX -= 1 / positive_instance_time;
                if (this._positive_index >= positive_instance_time) {
                    this.closePositive();
                }
            }
        }
        //负面道具的效果显示
        if (!this.onShield) {
            this.nagetive_status.forEach(function (data, key) {
                if (data == true) {
                    var instance_time = void 0;
                    if (key == 2) {
                        instance_time = _this._nagetive_time - 60;
                    }
                    else {
                        instance_time = _this._nagetive_time;
                    }
                    _this.nagetive_index[key]++;
                    _this.nagetive_shapes[key].graphics.clear();
                    _this.nagetive_shapes[key].graphics.lineStyle(2, 0xff0000);
                    _this.nagetive_shapes[key].graphics.drawArc((key * 2 + 1) * _this._nagetive_radius, _this._nagetive_radius, _this._nagetive_radius, -90 * _this._oneDegree, (270 - 360 / instance_time * _this.nagetive_index[key]) * _this._oneDegree - _this._oneDegree);
                    if (_this.nagetive_index[key] >= instance_time) {
                        //解除状态
                        console.log('负面道具解除状态');
                        _this.nagetive_status[key] = false;
                        _this.nagetive_index[key] = 0;
                        _this.nagetive_group.removeChild(_this.nagetive_shapes[key]);
                        _this.nagetive_icons[key].visible = false;
                        var nagetive_status_flag_1 = false;
                        _this.nagetive_status.forEach(function (flag) {
                            if (flag)
                                nagetive_status_flag_1 = true;
                        });
                        if (nagetive_status_flag_1 == false)
                            _this.per_name.visible = true;
                        if (key == Ns.Lightning) {
                            _this.down_speed = _this.current_speed;
                        }
                    }
                }
            });
        }
        else {
            if (this.img_light_shield) {
                //旋转光盾
                this.light_rotation_angle += 12;
                if (this.light_rotation_angle >= 360)
                    this.light_rotation_angle = 0;
                this.img_light_shield.rotation = this.light_rotation_angle;
            }
        }
        //创建道具
        if (this._findex > this.create_tool_speed) {
            this._findex = 0;
            this.randomGetTool();
        }
        //判断是否吃到道具		
        this.enemy_list.forEach(function (emy) {
            emy.y += _this.down_speed;
            if (emy.y > 500) {
                if (emy.y > 560) {
                    _this.removeEnemy(emy);
                }
                switch (emy.name) {
                    case 'goldencoin':
                        var golden_coin_1 = emy;
                        _this.toolEated(golden_coin_1, emy);
                        break;
                    case 'bomb':
                        var bomb = emy;
                        _this.toolEated(bomb, emy);
                        break;
                    case 'commonspeed':
                        var commonspeed = emy;
                        _this.toolEated(commonspeed, emy);
                        break;
                    case 'doublecoin':
                        var doublecoin = emy;
                        _this.toolEated(doublecoin, emy);
                        break;
                    case 'heart':
                        var heart = emy;
                        _this.toolEated(heart, emy);
                        break;
                    case 'lightning':
                        var lightning = emy;
                        _this.toolEated(lightning, emy);
                        break;
                    case 'lock':
                        var lock = emy;
                        _this.toolEated(lock, emy);
                        break;
                    case 'shield':
                        var shield = emy;
                        _this.toolEated(shield, emy);
                        break;
                    case 'cleansing':
                        var cleansing = emy;
                        _this.toolEated(cleansing, emy);
                        break;
                    case 'skullcoin':
                        var skullcoin = emy;
                        _this.toolEated(skullcoin, emy);
                        break;
                }
            }
        });
    };
    PlayScene.getRandomX = function () {
        return Math.floor(Math.random() * SceneManager.instance._stage.stage.stageWidth);
    };
    PlayScene.getToolBitmap = function (img_id) {
        var bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes(img_id);
        var rdm_x = PlayScene.getRandomX();
        if (rdm_x > SceneManager.instance._stage.stage.stageWidth - 57)
            rdm_x = SceneManager.instance._stage.stage.stageWidth - 57;
        bitmap.width = 57;
        bitmap.height = 57;
        // bitmap.x = SceneManager.instance._stage.stage.stageWidth/2
        bitmap.x = rdm_x;
        bitmap.y = 0;
        return bitmap;
    };
    return PlayScene;
}(eui.Component));
__reflect(PlayScene.prototype, "PlayScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=PlayScene.js.map