//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        var texture1 = RES.getRes('bg_home_light_jpg');
        var bg_bitmap = new egret.Bitmap();
        bg_bitmap.texture = texture1;
        var texture2 = RES.getRes('nafulou_png');
        var bitmap_nf = new egret.Bitmap();
        bitmap_nf.texture = texture2;
        var texture3 = RES.getRes('mygoldpig_png');
        var bitmap_jz = new egret.Bitmap();
        bitmap_jz.texture = texture3;
        this.addChild(bg_bitmap);
        bg_bitmap.x = 0;
        bg_bitmap.y = 0;
        bg_bitmap.width = 375;
        bg_bitmap.height = 667;
        this.addChild(bitmap_nf);
        bitmap_nf.x = 0;
        bitmap_nf.y = -10;
        bitmap_nf.width = 375;
        bitmap_nf.height = 125;
        this.addChild(bitmap_jz);
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.width = 300;
        this.textField.height = 50;
        // console.log('width ' + this.width)
        // console.log('textField.width ' + this.textField.width)
        this.textField.x = 375 / 2 - this.textField.width / 2;
        this.textField.y = 667 * 0.8;
        this.textField.size = 18;
        this.textField.textAlign = "center";
        SoundController.instance;
        PlaySceneSoundController.instance;
        SoundController.startMuisc('resource/act/media/ppkdc.mp3');
        //初始个人信息
        var uid = localStorage.getItem('uid');
        if (!uid)
            location.href = localStorage.getItem('entry_url');
        HttpServerSo.requestPost("way=re_user&uid=" + uid, function (data) {
            if (data == '') {
                localStorage.setItem('re_uname', '');
            }
            else {
                localStorage.setItem('re_uname', data);
            }
        });
        HttpServerSo.requestPost("way=init&uid=" + uid, function (data) {
            // console.log(data)
            if (data == 'ok') {
            }
            else if (data == 'no_user') {
                location.href = localStorage.getItem('entry_url');
            }
            else {
                var dd = JSON.parse(data);
                var uname = dd.username;
                if (dd.realName.length > 0)
                    uname = dd.realName;
                if (dd.tool_revive === null || dd.tool_shield === undefined) {
                    location.href = localStorage.getItem('entry_url');
                }
                localStorage.setItem('uname', uname);
                localStorage.setItem('username', dd.username);
                localStorage.setItem('realName', dd.realName);
                localStorage.setItem('avatar', dd.avatar);
                localStorage.setItem('revive_num', dd.tool_revive);
                localStorage.setItem('clean_num', dd.tool_drug);
                localStorage.setItem('shield_num', dd.tool_shield);
                localStorage.setItem('double_num', dd.tool_dbcoin);
                localStorage.setItem('speed_num', dd.tool_regular_speed);
            }
            // console.log(localStorage)
        });
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        var percent = Math.floor(current / total * 100);
        this.textField.text = percent + "%";
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI.js.map