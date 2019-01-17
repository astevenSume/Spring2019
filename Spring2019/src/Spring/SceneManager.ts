class SceneManager extends egret.Sprite {
    private _stage: eui.UILayer
    public mainScene: MainScene
    public gameScene: GameScene
    public ruleScene: RuleScene
    public storeScene: StoreScene
    public rankScene: RankScene
    public recordScene: RecordScene

    public constructor() {
        super()
        this.mainScene = new MainScene()
        this.gameScene = new GameScene()
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
        let mainScene = SceneManager.instance.mainScene
        console.log(mainScene);
        if (!mainScene.parent) {
            SceneManager.instance._stage.addChild(mainScene);
        }
        
        SceneManager.instance.removeOther(mainScene)

    }

    private removeOther(scene) {
        let sceneArr:any[] = [this.gameScene, this.ruleScene, this.storeScene, this.rankScene, this.recordScene];

        sceneArr.forEach((item)=>{
            if (scene===item)return 
            if (item.parent)this.mainScene.removeChild(item)        
        })
    }


    
}