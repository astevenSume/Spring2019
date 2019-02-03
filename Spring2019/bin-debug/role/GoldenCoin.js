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
var GoldenCoin = (function (_super) {
    __extends(GoldenCoin, _super);
    function GoldenCoin(val) {
        var _this = _super.call(this) || this;
        _this.val = val;
        _this.base_money_num = 10000; //基础钱数
        _this.name = 'goldencoin';
        _this.creatShape(val);
        return _this;
    }
    GoldenCoin.prototype.creatShape = function (num) {
        switch (num) {
            case 10:
                this.btm_tool = PlayScene.getToolBitmap("dj_glod_10_png");
                break;
            case 100:
                this.btm_tool = PlayScene.getToolBitmap("gold_bai_png");
                break;
            case 1000:
                this.btm_tool = PlayScene.getToolBitmap("gold_qian_png");
                break;
            case 10000:
                this.btm_tool = PlayScene.getToolBitmap("gold_yy_png");
                break;
            case 100000:
                this.btm_tool = PlayScene.getToolBitmap("gold_sy_png");
                break;
            case 1000000:
                this.btm_tool = PlayScene.getToolBitmap("gold_sy_png");
                break;
            default:
                break;
        }
        this.addChild(this.btm_tool);
    };
    GoldenCoin.prototype.onStatus = function (ps, emy) {
        //上跳金币数字
        var add_score_label = new eui.Label();
        var scores = emy.val;
        ps.p_role.addChild(add_score_label);
        add_score_label.size = 13;
        add_score_label.textColor = 0xFFFF00;
        if (ps.nagetive_status[Ns.SkullCoin] == true)
            scores = 0;
        if (ps.positive_status == true) {
            if (ps.positive_name == 'dj_double_png') {
                add_score_label.text = '+' + scores + '0000' + 'x2';
            }
        }
        else {
            add_score_label.text = '+' + scores + '0000';
        }
        add_score_label.x = ps.p_role.width / 2 - add_score_label.width / 2;
        add_score_label.y = -5;
        ps.add_coin_arr.push(add_score_label);
    };
    GoldenCoin.prototype.skill = function (ps, emy) {
        console.log('吃到 金币');
        PlaySceneSoundController.startMuisc('resource/act/media/jinbi.mp3');
        var score = emy.val;
        //增益效果 
        if (ps.positive_status == true) {
            if (ps.positive_name == 'dj_double_png')
                score = emy.val * 2;
        }
        //骷髅效果
        if (ps.nagetive_status[Ns.SkullCoin] == true)
            score = 0;
        ps.score += score;
        // ps.score += 10001 //测试用
        if (ps.score > 9999) {
            ps.p_score.text = ps.score / 10000 + '亿';
        }
        else {
            ps.p_score.text = ps.score + '万';
        }
        var tmp_score = ps.score / 10000;
        console.log(tmp_score);
        if (ps.surpass_flag_one == false && tmp_score > 80 && tmp_score < 100) {
            ps.group_surpass.visible = true;
            ps.lbl_surpass.text = '你超过了雷军';
            ps.surpass_flag_one = true;
            this.showSurpass(ps);
        }
        else if (ps.surpass_flag_two == false && tmp_score > 100 && tmp_score < 110) {
            ps.group_surpass.visible = true;
            ps.lbl_surpass.text = '你超过了李彦宏';
            ps.surpass_flag_two = true;
            this.showSurpass(ps);
        }
        else if (ps.surpass_flag_three == false && tmp_score > 110 && tmp_score < 120) {
            ps.group_surpass.visible = true;
            ps.lbl_surpass.text = '你超过了严昊';
            ps.surpass_flag_three = true;
            this.showSurpass(ps);
        }
        else if (ps.surpass_flag_four == false && tmp_score > 120 && tmp_score < 130) {
            ps.group_surpass.visible = true;
            ps.lbl_surpass.text = '你超过了王卫';
            ps.surpass_flag_four = true;
            this.showSurpass(ps);
        }
        else if (ps.surpass_flag_five == false && tmp_score > 130 && tmp_score < 140) {
            ps.group_surpass.visible = true;
            ps.lbl_surpass.text = '你超过了何享健';
            ps.surpass_flag_five = true;
            this.showSurpass(ps);
        }
        else if (ps.surpass_flag_six == false && tmp_score > 140 && tmp_score < 150) {
            ps.group_surpass.visible = true;
            ps.lbl_surpass.text = '你超过了王健林';
            ps.surpass_flag_six = true;
            this.showSurpass(ps);
        }
        else if (ps.surpass_flag_seven == false && tmp_score > 150 && tmp_score < 240) {
            ps.group_surpass.visible = true;
            ps.lbl_surpass.text = '你超过了杨惠妍';
            ps.surpass_flag_seven = true;
            this.showSurpass(ps);
        }
        else if (ps.surpass_flag_eight == false && tmp_score > 240 && tmp_score < 250) {
            ps.group_surpass.visible = true;
            ps.lbl_surpass.text = '你超过了马化腾';
            ps.surpass_flag_eight = true;
            this.showSurpass(ps);
        }
        else if (ps.surpass_flag_nine == false && tmp_score > 250 && tmp_score < 270) {
            ps.group_surpass.visible = true;
            ps.lbl_surpass.text = '你超过了许家印';
            ps.surpass_flag_nine = true;
            this.showSurpass(ps);
        }
        else if (ps.surpass_flag_ten == false && tmp_score > 270) {
            ps.group_surpass.visible = true;
            ps.lbl_surpass.text = '你超过了马云';
            ps.surpass_flag_ten = true;
            this.showSurpass(ps);
        }
    };
    GoldenCoin.prototype.showSurpass = function (ps) {
        var timer = new egret.Timer(1000, 10);
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            ps.group_surpass.alpha = ps.group_surpass.alpha - 0.1;
            // console.log('显示超越信息' + ps.group_surpass.alpha)
        }, this);
        timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            // console.log('finished')	
            ps.group_surpass.alpha = 1;
            ps.group_surpass.visible = false;
        }, this);
        timer.start();
    };
    return GoldenCoin;
}(Enemy));
__reflect(GoldenCoin.prototype, "GoldenCoin");
//# sourceMappingURL=GoldenCoin.js.map