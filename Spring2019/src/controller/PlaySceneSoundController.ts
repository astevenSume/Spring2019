class PlaySceneSoundController extends egret.DisplayObjectContainer {
	public constructor() {
		super()
	}

	private static _instance: PlaySceneSoundController
    static get instance() {
        if (!this._instance) {
            this._instance = new PlaySceneSoundController() 
        }
        return this._instance
    }

    static startMuisc(url: string):void {        
        //创建 Sound 对象
        let sound = new egret.Sound();
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
        this.soundChannel = sound.play(0,1);
        console.log('播放')
        // channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
    }
    static stopNow() {
        this.soundChannel.stop()
    }


	

}