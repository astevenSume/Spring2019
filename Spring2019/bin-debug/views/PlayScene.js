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
        /*
         *	添加
         *  rate指定创建固定道具
        */
        _this.golden_coin_rate = 60;
        _this.eatedFlag = false;
        _this._findex = 0;
        _this._create_tool_speed = 50;
        _this._create_tool_base_speed = 50; //初始50
        _this._down_speed = 10; //初始3
        _this.positive_status = false;
        _this._positive_time = 90;
        _this._positive_index = 0;
        _this._positive_name = 'none';
        _this._nagetive_time = 90;
        _this.nagetive_status = [false, false, false];
        _this.nagetive_index = [0, 0, 0];
        _this.nagetive_shape = [new egret.Shape(), new egret.Shape(), new egret.Shape()];
        _this._nagetive_radius = 15;
        return _this;
    }
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
    PlayScene.prototype.showPositiveBar = function (name) {
        this.group_tool.visible = false;
        this.positive_group.visible = true;
        this.positive_status = true;
        this._positive_name = name;
        this.tool_icon.texture = RES.getRes(name);
    };
    PlayScene.prototype.hidePositiveBar = function () {
        this.group_tool.visible = true;
        this.positive_group.visible = false;
        this.positive_status = false;
        this._positive_index = 0;
        this._positive_name = 'none';
        this.icon_progressbar.scaleX = 1;
    };
    PlayScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PlayScene.prototype.init_me = function () {
        var _this = this;
        this.gold_pig = new GoldPig(this.pig);
        this.per_name.text = localStorage.getItem('uname');
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (evt) {
            _this.gold_pig.init_x = evt.stageX;
        }, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, function (evt) {
            _this.gold_pig.move(evt, _this.p_role);
        }, this);
        this._progress_bar_width = this.icon_progressbar.width;
    };
    PlayScene.prototype.positiveEffect = function (evt) {
        console.log('timerFunc connt : ' + evt.target.currentCount);
    };
    PlayScene.prototype.clickToolGroup = function (evt) {
        if (evt.target.numElements) {
            console.log('点到空白处...');
            return;
        }
        this.showPositiveBar(evt.target.name);
    };
    PlayScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init_me();
        this.pbtn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.toMainScene();
        }, this);
        this.group_tool.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickToolGroup, this);
        this.addEventListener(egret.Event.ENTER_FRAME, this.onEnterFrame, this);
        //初始创建
        this.randomGetTool(85);
        // let nagetive_icon: eui.Image = eval(`this.nicon_${Ns[0].toLowerCase()}`)
        // nagetive_icon.visible = true
        // console.log(nagetive_icon)
    };
    //删除
    PlayScene.prototype.removeEnemy = function (emy) {
        this.removeChild(emy);
        this.enemy_list.splice(this.enemy_list.indexOf(emy), 1);
        emy = null;
    };
    PlayScene.prototype.randomGetTool = function (rate) {
        var show_tool;
        var commom_speed_rate = this.golden_coin_rate + 5;
        var double_coin_rate = commom_speed_rate + 5;
        var heart_rate = double_coin_rate + 1; //71
        var lightning_rate = heart_rate + 10; // 81
        var skull_coin_rate = lightning_rate + 5; //86
        var lock_rate = skull_coin_rate + 10; //91
        var shield_rate = lock_rate + 4; //95
        var bomb_rate = shield_rate + 3; //98
        var cleansing = bomb_rate + 2;
        var rdm_num = Math.random() * 100;
        if (rate > 0)
            rdm_num = rate;
        if (rdm_num < this.golden_coin_rate) {
            if (Math.random() < 0.8)
                show_tool = 'GoldenCoin(10)';
            else
                show_tool = 'GoldenCoin(100000)';
        }
        else if (rdm_num < commom_speed_rate) {
            show_tool = 'CommonSpeed()';
        }
        else if (rdm_num < double_coin_rate) {
            show_tool = 'DoubleCoin()';
        }
        else if (rdm_num < heart_rate) {
            show_tool = 'Heart()';
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
        else {
            show_tool = 'Cleansing()';
        }
        var tool = eval("new " + show_tool);
        this.enemy_list.push(tool);
        this.addChild(tool);
    };
    //检测吃到道具并施放技能
    PlayScene.prototype.toolEated = function (tool, emy) {
        this.eatedFlag = this.pig.hitTestPoint(tool.btm_tool.x, emy.y + 57);
        if (this.eatedFlag === true) {
            if (eval("NonSustain." + tool.name) != undefined) {
                tool.skill(this, emy); //立即施放
            }
            tool.onStatus(this, emy);
            this.removeEnemy(emy);
        }
    };
    PlayScene.prototype.onEnterFrame = function () {
        var _this = this;
        var that = this;
        this._findex += 1;
        //判断是否使用道具
        if (this.positive_status) {
            this._positive_index++;
            if (this._positive_name != 'none') {
                this.icon_progressbar.scaleX -= 1 / this._positive_time;
                if (this._positive_index >= this._positive_time) {
                    this.hidePositiveBar();
                }
            }
        }
        this.nagetive_status.forEach(function (data, key) {
            if (data == true) {
                _this.nagetive_index[key]++;
                _this.nagetive_shape[key].graphics.clear();
                _this.nagetive_shape[key].graphics.lineStyle(2, 0xff0000);
                _this.nagetive_shape[key].graphics.drawArc((key * 2 + 1) * _this._nagetive_radius, _this._nagetive_radius, _this._nagetive_radius, -90 * _this._oneDegree, (270 - 360 / _this._nagetive_time * _this.nagetive_index[key]) * _this._oneDegree - _this._oneDegree);
                if (_this.nagetive_index[key] >= _this._nagetive_time) {
                    //解除状态
                    _this.nagetive_status[key] = false;
                    _this.nagetive_index[key] = 0;
                    _this.nagetive_group.removeChild(_this.nagetive_shape[key]);
                    eval("that.nicon_" + Ns[key].toLowerCase() + ".visible=false");
                    var nagetive_status_flag_1 = false;
                    _this.nagetive_status.forEach(function (flag) {
                        if (flag)
                            nagetive_status_flag_1 = true;
                    });
                    if (nagetive_status_flag_1 == false)
                        _this.per_name.visible = true;
                }
            }
        });
        //创建道具
        if (this._findex > this._create_tool_speed) {
            this._findex = 0;
            this.randomGetTool(89);
            if (Math.random() > 0.5)
                this._create_tool_speed = this._create_tool_base_speed + 20 * Math.random();
            else
                this._create_tool_speed = this._create_tool_base_speed - 20 * Math.random();
        }
        //判断是否吃到道具		
        this.enemy_list.forEach(function (emy) {
            emy.y += _this._down_speed;
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
        return Math.floor(Math.random() * SceneManager._width);
    };
    PlayScene.getToolBitmap = function (img_id) {
        var bitmap = new egret.Bitmap();
        bitmap.texture = RES.getRes(img_id);
        var rdm_x = PlayScene.getRandomX();
        if (rdm_x > SceneManager._width - 57)
            rdm_x = SceneManager._width - 114;
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