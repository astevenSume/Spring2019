class RequestData {

	

	public constructor() {
		
	}


	static testAwait() {
		setTimeout(()=>{
			console.log('=========---===========0')
		}, 1000)
		
	}

	private static userFunc:Function
	//判断是否还能玩
	static canPlay(): Promise<string> {
		let uid = localStorage.getItem('uid')
		let params = `way=getPlaytimes&uid=${uid}`


		return new Promise((resolve, reject)=>{
			this.userFunc = this.getTimesComplete.bind(false, resolve)
			HttpServerSo.requestPost(params, this.userFunc)		
		})
	


		
	}

	//增加玩的次数 ，次数不超过20次
	public static increasePlaytimes () {
		let uid = localStorage.getItem('uid')
		let params = `way=increasePlaytimes&uid=${uid}`

		HttpServerSo.requestPost(params, this.increaseComplete)
	}

	private static async getTimesComplete(resolve,nums){
		let times = parseInt(nums)
		localStorage.setItem('current_tiems', times + '')

		resolve(''+times)

	}

	private static increaseComplete(data: string) {
		console.log('res : ' + data)
	}

}