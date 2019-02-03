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

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {
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

        let texture1 = RES.getRes('bg_home_light_jpg')           
        let bg_bitmap = new egret.Bitmap()
        bg_bitmap.texture = texture1

        let texture2 = RES.getRes('nafulou_png')
        let bitmap_nf = new egret.Bitmap()
        bitmap_nf.texture = texture2

        let texture3 = RES.getRes('mygoldpig_png')
        let bitmap_jz = new egret.Bitmap()
        bitmap_jz.texture = texture3


        this.addChild(bg_bitmap)
        bg_bitmap.x=0
        bg_bitmap.y=0
        bg_bitmap.width = 375
        bg_bitmap.height = 667


            this. addChild(bitmap_nf)
            bitmap_nf.x=0
            bitmap_nf.y=-10
            bitmap_nf.width=375
            bitmap_nf.height=125

            this.addChild(bitmap_jz)



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


        

        // let bg_img = "resource/act/home/bg_home.jpg"
        // let imageLoader: egret.ImageLoader = new egret.ImageLoader()
		// imageLoader.addEventListener(egret.Event.COMPLETE, (evt:egret.Event) => {

		// 	let loader:egret.ImageLoader = <egret.ImageLoader>evt.target
        //     var bitmapData: egret.BitmapData = loader.data

		// 	let texture = new egret.Texture()
        //     texture.bitmapData = bitmapData    
            
        //     let bg_bitmap = new egret.Bitmap(texture)
		// 	this.addChild(bg_bitmap)
        //     bg_bitmap.x=0
        //     bg_bitmap.y=0
        //     bg_bitmap.width = 375
        //     bg_bitmap.height = 667


        //     this.textField = new egret.TextField()
        //     this.addChild(this.textField)
        //     this.textField.width = 300
        //     this.textField.height = 50
        //     // console.log('width ' + this.width)
        //     // console.log('textField.width ' + this.textField.width)
        //     this.textField.x = 375/2-this.textField.width/2
        //     this.textField.y = 667 * 0.8
        //     this.textField.size = 18
        //     this.textField.size = 60        
            
        //     this.textField.textAlign = "center"            
		// }, event)        
		// imageLoader.load(bg_img)

        //播放音乐
        // let sound =  SoundController.instance
        // SoundController.startMuisc('resource/act/media/paopaokdc.mp3')
        

        

        //初始个人信息
        let uid = localStorage.getItem('uid')
        if (!uid)location.href = localStorage.getItem('entry_url')


        HttpServerSo.requestPost(`way=re_user&uid=${uid}`,(data: string)=>{
        //    console.log('data ks : ' + data)
           if (data == '') {
               localStorage.setItem('re_uname', '');
           } else {
               localStorage.setItem('re_uname', data);
           }
        })
        
        HttpServerSo.requestPost(`way=init&uid=${uid}`,(data: string)=>{
            // console.log(data)
            if (data == 'ok') {

                

            } else if (data == 'no_user') {
                location.href = localStorage.getItem('entry_url')
            } else {
                let dd = JSON.parse(data)
                let uname = dd.username
                if (dd.realName.length > 0)uname = dd.realName

                localStorage.setItem('uname', uname)
                localStorage.setItem('username', dd.username)
                localStorage.setItem('realName', dd.realName)
                localStorage.setItem('avatar', dd.avatar)
                localStorage.setItem('revive_num', dd.tool_revive)
                localStorage.setItem('clean_num', dd.tool_drug)
                localStorage.setItem('shield_num', dd.tool_shield)
                localStorage.setItem('double_num', dd.tool_dbcoin)
                localStorage.setItem('speed_num', dd.tool_regular_speed) 

            }
            // console.log(localStorage)
        }) 
    }

    public onProgress(current: number, total: number): void {
        let percent = Math.floor(current/total*100)
        this.textField.text = `${percent}%`;
    }

    
}
