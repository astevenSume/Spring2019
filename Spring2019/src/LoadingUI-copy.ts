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

class LoadingUIs extends egret.Sprite implements RES.PromiseTaskReporter {
    public constructor() {
        super();
        this.createView();
        
    }
    private textField: egret.TextField
    private btn: eui.Button

    private createView(): void {
        
        // this.btn = new eui.Button()
        // this.btn.skinName = "resource/skins/LoadingMe.exml"
        // this.addChild(this.btn)

        this.textField = new egret.TextField()
        this.addChild(this.textField)
        this.textField.width = 300
        this.textField.height = 50
        // console.log('width ' + this.width)
        // console.log('textField.width ' + this.textField.width)
        this.textField.x = 375/2-this.textField.width/2
        this.textField.y = 667 * 0.8
        this.textField.size = 18
        
        
        this.textField.textAlign = "center"

        //初始个人信息
        console.log('--')
        // let uid = localStorage.getItem('uid')
        // uid = '24576'
        /*
        HttpServerSo.requestPost(`way=init&uid=${uid}`,(data: string)=>{
            // console.log(data)
            if (data == 'ok') {

            } else if (data == 'no_user') {
                // location.href = localStorage.getItem('entry_url')
            } else {
                // let dd = JSON.parse(data)
                // localStorage.setItem('username', dd.username)
                // localStorage.setItem('realName', dd.realName)
                // localStorage.setItem('avatar', dd.avatar)
                // localStorage.setItem('revive_num', dd.tool_revive)
                // localStorage.setItem('clean_num', dd.tool_drug)
                // localStorage.setItem('shield_num', dd.tool_shield)
                // localStorage.setItem('double_num', dd.tool_dbcoin)
                // localStorage.setItem('speed_num', dd.tool_regular_speed)                
            }

            // console.log(JSON.stringify(data))
        }) */
    }

    public onProgress(current: number, total: number): void {
        let percent = Math.floor(current/total*100)
        this.textField.text = `${percent}%`;
    }

    
}
