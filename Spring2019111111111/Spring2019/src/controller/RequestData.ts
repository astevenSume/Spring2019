class RequestData {

	

	public constructor() {
		
	}


	static testAwait() {
		setTimeout(()=>{
			console.log('=========---===========0')
		}, 1000)
		
	}
	//判断是否还能玩
	static canPlay(): Promise<string> {
		let uid = localStorage.getItem('uid')
		let params = `way=getPlaytimes&uid=${uid}`

		// await this.testAwait() //测试异步没有生效
		// 

		return new Promise((resolve, reject)=>{
			
			// setTimeout(()=>{
				
				console.log('wait...me....')
				this.getTimesComplete.bind(false, resolve)
				HttpServerSo.requestPost(params, this.getTimesComplete)
				
			// }, 1000)
			
		})
	
		// HttpServerSo.requestPostAsync(params, this.getTimesComplete)
		
		// 
		// setTimeout(()=>{
		// 	if (SceneManager.instance._can_play_flag == false)return false
		// 	return true
		// }, 1000)
		
	}

	//增加玩的次数 ，次数不超过20次
	public static increasePlaytimes () {
		let uid = localStorage.getItem('uid')
		let params = `way=increasePlaytimes&uid=${uid}`

		HttpServerSo.requestPost(params, this.increaseComplete)
	}

	private static async getTimesComplete(nums,resolve){
		// let times = parseInt(nums)
		console.log('times + :' + nums);
		console.log('times + :' + resolve);
		// resolve('aa')
		// localStorage.setItem('current_tiems', times + '')
		// if (times>SceneManager.instance._max_play_times) {
		// 	SceneManager.instance._can_play_flag = false
		// } else {
		// 	SceneManager.instance._can_play_flag = true
		// }
		console.log('set flag : ' + SceneManager.instance._can_play_flag)

		
		// return new Promise((resolve, reject)=>{
		// 	return ;
		// })
	}

	private static increaseComplete(data: string) {
		console.log('res : ' + data)
	}

}