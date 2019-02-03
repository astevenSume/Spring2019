class SceneManager extends eui.UILayer {
    public _stage: eui.UILayer
    public mainScene: MainScene
    public playScene: PlayScene
    public ruleScene: RuleScene
    public storeScene: StoreScene
    public rankScene: RankScene
    public recordScene: RecordScene
    public static _width: number
    public static _height: number
	public _max_play_times: number = 6

    public constructor() {
        super()
        this.mainScene = new MainScene()
        this.playScene = new PlayScene()
        this.ruleScene = new RuleScene()
        this.storeScene = new StoreScene()
        this.rankScene = new RankScene()
        this.recordScene = new RecordScene()   

    }

    static sceneManager: SceneManager
    static get instance() {
        if (!this.sceneManager) {
            this.sceneManager = new SceneManager()
        }
        return this.sceneManager
    }

    public setStage(s:eui.UILayer) {
        this._stage = s
    }

    static toMainScene() {
        //播放音乐
        // if (SoundController.cu_scene == 'playScene') {
        //     SoundController.stopNow()
		//     SoundController.startMuisc('resource/act/media/paopaokdc.mp3')
        // }        

        let mainScene = this.instance.mainScene
        if (!mainScene.parent) {
            this.instance._stage.addChild(mainScene);
        }
        mainScene.showStatus()
        SceneManager.instance.removeOther(mainScene)
    }
    static async toPlayScene() {
        let now_times = await RequestData.canPlay()
        if (parseInt(now_times) > SceneManager.instance._max_play_times) {
            this.instance.mainScene.cannotplayNow()
            return
        }
        //判断是否是同名用户 
        let re_uname = localStorage.getItem('re_uname');
        if (re_uname != '') {
            this.instance.mainScene.showRename(re_uname);
            return
        }

     
        //播放音乐
        // SoundController.cu_scene = 'playScene'
        // SoundController.stopNow()
        // SoundController.startMuisc('resource/act/media/haizeiwang.mp3')
        
        this.instance.playScene = new PlayScene()
        // console.log('start times : ' + localStorage.getItem('current_tiems'))
        let playScene = this.instance.playScene
        // this.instance._stage.addChild(playScene)
        this.instance.mainScene.addChild(playScene)
      
        

        
    }
    static toRuleScene() {
        this.instance.ruleScene = new RuleScene
        let ruleScene = this.instance.ruleScene
        this.instance.removeOther(ruleScene)
        this.instance.mainScene.addChild(ruleScene)
    }
    static toStoreScene() {
        this.instance.storeScene = new StoreScene
        let storeScene = this.instance.storeScene
        this.instance.removeOther(storeScene)
        this.instance.mainScene.addChild(storeScene)
    }

    static toRankScene() {
        this.instance.rankScene = new RankScene
        let rankScene = this.instance.rankScene
        this.instance.removeOther(rankScene)
        this.instance.mainScene.addChild(rankScene)
    }
    static toRecordScene() {
        this.instance.recordScene = new RecordScene()
        let recordScene = this.instance.recordScene
        this.instance.removeOther(recordScene)
        this.instance.mainScene.addChild(recordScene)
    }

    private removeOther(scene) {
        let sceneArr:any[] = [this.playScene, this.ruleScene, this.storeScene, this.rankScene, this.recordScene];

        sceneArr.forEach((item, k)=>{
            if (scene===item)return
            if (item.parent) {
                this.mainScene.removeChild(item)
            }
        })
    }


    
}