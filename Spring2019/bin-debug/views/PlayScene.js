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
        _this._score = 0;
        _this.enemy_list = [];
        _this._PI = Math.PI;
        _this._oneDegree = Math.PI / 180;
        _this.golden_coin_rate = 50;
        _this.eatedFlag = false;
        _this.game_init();
        return _this;
    }
    PlayScene.prototype.game_init = function () {
        this._findex = 0;
        this.enemy_list = [];
        this._create_tool_speed = 15;
        this._create_tool_base_speed = 15; //初始50
        this.down_speed = this.current_speed = 10; //初始3
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
        this.isPause = false;
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
        _super.prototype.childrenCreated.call(this);
        this.init_me();
        this.pbtn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.toMainScene();
        }, this);
        this.group_tool.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickToolGroup, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        //初始创建
        this.randomGetTool(87);
    };
    PlayScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PlayScene.prototype.init_me = function () {
        var _this = this;
        this.gold_pig = new GoldPig(this.pig);
        this.per_name.text = localStorage.getItem('uname');
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
    PlayScene.prototype.clickToolGroup = function (evt) {
        if (evt.target.numElements) {
            console.log('点到空白处...');
            return;
        }
        if (evt.target.name == 'yaoshui') {
            this.cleanAllNagetive();
            return;
        }
        this.showPositiveBar(evt.target.name);
        if (evt.target.name == 'dj_sh88_png')
            this.onShield = true;
        if (evt.target.name == 'dj_time88_png') {
            this.current_speed = this.down_speed;
            this.down_speed = 3;
        }
    };
    //删除
    PlayScene.prototype.removeEnemy = function (emy) {
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
        if (rdm < 0.6) {
            coin = 'GoldenCoin(10)';
        }
        else if (rdm < 0.8) {
            coin = 'GoldenCoin(100)';
        }
        else if (rdm < 0.88) {
            coin = 'GoldenCoin(1000)';
        }
        else if (rdm < 1) {
            coin = 'GoldenCoin(10000)';
        }
        return coin;
    };
    PlayScene.prototype.randomGetTool = function (rate) {
        var show_tool;
        var commom_speed_rate = this.golden_coin_rate + 3; //53
        var double_coin_rate = commom_speed_rate + 3; //56
        var heart_rate = double_coin_rate + 1; //57
        var lightning_rate = heart_rate + 9; //66
        var skull_coin_rate = lightning_rate + 5; //71
        var lock_rate = skull_coin_rate + 10; //81
        var shield_rate = lock_rate + 4; //85
        var bomb_rate = shield_rate + 6; //91
        var cleansing = bomb_rate + 1; //92		
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
        else if (rdm_num < commom_speed_rate) {
            show_tool = 'CommonSpeed()';
        }
        else if (rdm_num < double_coin_rate) {
            show_tool = 'DoubleCoin()';
        }
        else if (rdm_num < heart_rate) {
            show_tool = this.getGoldencoin();
            // show_tool = 'Heart()' //不再掉心
        }
        else if (rdm_num < lightning_rate) {
            show_tool = 'Lightning()';
        }
        else if (rdm_num < skull_coin_rate) {
            show_tool = 'SkullCoin()';
        }
        else if (rdm_num < lock_rate) {
            show_tool = 'Lock()';
        }
        else if (rdm_num < shield_rate) {
            show_tool = 'Shield()';
        }
        else if (rdm_num < bomb_rate) {
            show_tool = 'Bomb()';
        }
        else if (rdm_num < cleansing) {
            show_tool = 'Cleansing()';
        }
        else {
            show_tool = this.getGoldencoin();
        }
        //todo负效果时，只出现金币和其它负效果
        var tool = eval("new " + show_tool);
        this.enemy_list.push(tool);
        this.addChild(tool);
    };
    PlayScene.prototype.showPositiveBar = function (name) {
        this.group_tool.visible = false;
        this.positive_group.visible = true;
        this.positive_status = true;
        this.positive_name = name;
        this.tool_icon.texture = RES.getRes(name);
    };
    PlayScene.prototype.closePositive = function () {
        this.group_tool.visible = true;
        this.positive_group.visible = false;
        this.positive_status = false;
        this._positive_index = 0;
        if (this.positive_name == 'dj_time88_png')
            this.down_speed = this.current_speed;
        if (this.positive_name == 'dj_sh88_png')
            this.onShield = false;
        this.positive_name = 'none';
        this.icon_progressbar.scaleX = 1;
    };
    PlayScene.prototype.cleanAllNagetive = function () {
        var _this = this;
        console.log('使用了净化药水。。。');
        //effected净化
        this.down_speed = this.current_speed;
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
            this.removeEnemy(emy);
        }
    };
    PlayScene.prototype.onEnterFrame = function (evt) {
        var _this = this;
        if (this.isPause)
            return;
        this._findex += 1;
        //增益道具的使用
        if (this.positive_status) {
            this._positive_index++;
            if (this.positive_name != 'none') {
                this.icon_progressbar.scaleX -= 1 / this._positive_time;
                if (this._positive_index >= this._positive_time) {
                    this.closePositive();
                }
            }
        }
        //负面道具的效果显示
        if (!this.onShield) {
            this.nagetive_status.forEach(function (data, key) {
                if (data == true) {
                    _this.nagetive_index[key]++;
                    _this.nagetive_shapes[key].graphics.clear();
                    _this.nagetive_shapes[key].graphics.lineStyle(2, 0xff0000);
                    _this.nagetive_shapes[key].graphics.drawArc((key * 2 + 1) * _this._nagetive_radius, _this._nagetive_radius, _this._nagetive_radius, -90 * _this._oneDegree, (270 - 360 / _this._nagetive_time * _this.nagetive_index[key]) * _this._oneDegree - _this._oneDegree);
                    if (_this.nagetive_index[key] >= _this._nagetive_time) {
                        //解除状态
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
        //创建道具
        if (this._findex > this._create_tool_speed) {
            this._findex = 0;
            this.randomGetTool();
            if (Math.random() > 0.5)
                this._create_tool_speed = this._create_tool_base_speed + 5 * Math.random();
            else
                this._create_tool_speed = this._create_tool_base_speed - 5 * Math.random();
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
        bitmap.x = rdm_x;
        bitmap.y = 0;
        return bitmap;
    };
    return PlayScene;
}(eui.Component));
__reflect(PlayScene.prototype, "PlayScene", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=PlayScene.js.map