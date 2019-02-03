class PlaySceneSoundController extends egret.DisplayObjectContainer {
	public constructor() {
		super()
	}

	static _instance: PlaySceneSoundController
    static get instance() {
        if (!this._instance) {
            this._instance = new PlaySceneSoundController() 
        }
        return this._instance
    }
	

}