class SoundController extends egret.DisplayObjectContainer {

    static cu_scene:string

    public constructor() {
        super();      
    }

    private static my_instance: SoundController
    static get instance() {
        if (!this.my_instance) {
            this.my_instance = new SoundController() 
        } 
        return this.my_instance
    }

    static startMuisc(url: string):void {        
        //创建 Sound 对象
        let sound = new egret.Sound();
        // var url:string = "resource/act/media/haizeiwang_mp3.mp3";
		var url:string = url;


        //添加加载完成侦听
        sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
        //开始加载
        sound.load(url);
    }

    static soundChannel: egret.SoundChannel
    static onLoadComplete(event:egret.Event):void {
        //获取加载到的 Sound 对象
        var sound:egret.Sound = <egret.Sound>event.target;
        //播放音乐
        this.soundChannel = sound.play(0);
        console.log('播放')
        // channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    }
    static stopNow() {
        this.soundChannel.stop()
    }

    // private onSoundComplete(event:egret.Event):void {
    //     egret.log("onSoundComplete");
    // }
}