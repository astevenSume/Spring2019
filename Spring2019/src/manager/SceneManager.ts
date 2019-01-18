class SceneManager extends egret.Sprite {
    private _stage: eui.UILayer
    public mainScene: MainScene
    public gameScene: GameScene
    public playScene: PlayScene
    public ruleScene: RuleScene
    public storeScene: StoreScene
    public rankScene: RankScene
    public recordScene: RecordScene

    public constructor() {
        super()
        this.mainScene = new MainScene()
        this.gameScene = new GameScene()
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
        let mainScene = this.instance.mainScene
        if (!mainScene.parent) {
            this.instance._stage.addChild(mainScene);
        }
        
        SceneManager.instance.removeOther(mainScene)
    }
    static toPlayScene() {
        let playScene = this.instance.playScene
        this.instance.mainScene.addChild(playScene)
    }
    static toRuleScene() {
        let ruleScene = this.instance.ruleScene
        this.instance.removeOther(ruleScene)
        this.instance.mainScene.addChild(ruleScene)
    }
    static toStoreScene() {
        let storeScene = this.instance.storeScene
        this.instance.removeOther(storeScene)
        this.instance.mainScene.addChild(storeScene)
    }

    static toRankScene() {
        let rankScene = this.instance.rankScene
        this.instance.removeOther(rankScene)
        this.instance.mainScene.addChild(rankScene)
    }

    private removeOther(scene) {
        let sceneArr:any[] = [this.playScene, this.ruleScene, this.storeScene, this.rankScene, this.recordScene];

        sceneArr.forEach((item)=>{
            if (scene===item)return 
            if (item.parent)this.mainScene.removeChild(item)        
        })
    }


    
}