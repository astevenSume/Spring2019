class RankScene extends eui.Component implements  eui.UIComponent {

	private my_index: eui.Label
	public rbtn_close: eui.Button
	public rimg_avatar: eui.Image
	public rbtn_ava: eui.Button
	public rinf_group: eui.Group
	public title_img: eui.Image

	private no_data_group: eui.Group
	private title_group: eui.Group

	private real_name: eui.Label
	private rank_score: eui.Label
	private cu_date: eui.Label

	private group_score: eui.Scroller
	private records_list: eui.List

	//日期组件
	private today_date: string
	private today_key: number
	private group_date: eui.Group
	private l_date_1: eui.Label
	private l_date_2: eui.Label
	private l_date_3: eui.Label
	private l_date_4: eui.Label
	private l_date_5: eui.Label
	private l_date_6: eui.Label
	private l_date_7: eui.Label

	private list_arr0: any[] = []
	private list_arr1: any[] = []
	private list_arr2: any[] = []
	private list_arr3: any[] = []
	private list_arr4: any[] = []
	private list_arr5: any[] = []
	private list_arr6: any[] = []
	private list_arr7: any[] = []


	public constructor() {
		super();

	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}
	private currectIndexShow(str_data: string) {
		
		let date_key =this.getDateOrderIndex(str_data)
		if (date_key == undefined)date_key=this.today_key
		for(let i=0; i<this.group_date.numChildren; i++) {
			let gp:eui.Group = <eui.Group>this.group_date.getChildAt(i)
			gp.getChildAt(2).visible = false
		}
		let cu_group:eui.Group = <eui.Group>this.group_date.getChildAt(date_key-1)
		cu_group.getChildAt(2).visible = true
	}

	private clickDateButton(evt) {
		let obj = evt.target

		//初始状态
		// this.group_date.visible = true


		if (obj.name=='label') {	
			this.no_data_group.visible = false		
			let str_date = obj.text.substr(0, obj.text.length-1)
			let tmp_data: any[]
			this.currectIndexShow(str_date)
			if (str_date == this.today_date)str_date=''	
			
			console.log(str_date)
			switch(str_date) {
				case '4':		
					tmp_data = this.list_arr1			
					this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr1)					
				break;
				case '5':
					tmp_data = this.list_arr2
					this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr2)
				break;
				case '6':
					tmp_data = this.list_arr3
					this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr3)
				break;
				case '7':
					tmp_data = this.list_arr4
					this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr4)
				break;
				case '8':
					tmp_data = this.list_arr5
					this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr5)
				break;
				case '9':
					tmp_data = this.list_arr6
					this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr6)
				break;
				case '10':
					tmp_data = this.list_arr7
					this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr7)
				break;	
				default:
					tmp_data = this.list_arr0
					this.records_list.dataProvider = new eui.ArrayCollection(this.list_arr0)
				break				
			}

			if (tmp_data.length == 0) {
				this.no_data_group.visible = true
			}


		}

	}

	

	private getRecords(uid) {
		//获取最高记录
		HttpServerSo.requestPost(`way=get_records&uid=${uid}`,(data: string, that)=>{	
			// console.log(data)
			// console.log('----')
			// return

			let res = JSON.parse(data)
			console.log(res)
			// console.log('myIdex : ' + res.my_index)
			if (res.my_index === undefined) {
				that.my_index.text = '10+'
			} else {
				that.my_index.text = res.my_index
			}
			
			if (res.today_max_score.length > 0) {		
				let post_score = parseInt(res.today_max_score)
				let max_score = ''
				if (post_score>9999) {
					max_score = post_score/10000 + '亿'
				} else {
					max_score = post_score + '万'
				}
				this.rank_score.text = max_score
			}
			

			if (res.perday[0] != null) {	
				let list_arr: any[] = []		

				let today_arr = res.perday.pop()
				today_arr.forEach((item, k)=>{
					let uname = item.username
					if (item.realName.length > 0)uname=item.realName
					that.list_arr0.push({id: k , order_num:item.order_num, img_order:item.img_name,uname: uname, udate: item.overtime, uscore: item.max_score/10000+'亿', award_word: item.award_word})
				})
				
				

				res.perday.forEach((sub_data, sub_k)=>{
					sub_data.forEach((item, k)=>{						
						let uname = item.username
						if (item.realName.length > 0)uname=item.realName
						let now_arr: any[] = eval(`that.list_arr${sub_k+1}`)
						now_arr.push({id: k , order_num:item.order_num, img_order:item.img_name,uname: uname, udate: item.overtime, uscore: item.max_score/10000+'亿', award_word: item.award_word})
					})
				})

				
		
				

				this.records_list.dataProvider = new eui.ArrayCollection(that.list_arr0)
				this.records_list.itemRenderer = RecordsItem


				this.no_data_group.visible = false
				this.group_date.visible = true
				this.title_group.visible = true		
				
			}

		


		}, this)
	}
	//未发放颜色 ff99ff
	//已发放颜色 9999FF

	protected childrenCreated():void
	{
		super.childrenCreated();


		this.group_score.verticalScrollBar.autoVisibility = false
		
		this.group_date.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickDateButton, this)

		//显示今日状态
		let today = new Date().getDate()
		this.today_date = today + ''
		this.today_key = this.getDateOrderIndex(today+'')
		let today_obj = eval(`this.l_date_${this.today_key}`)
		today_obj.text = '今日'
		today_obj.parent.getChildAt(2).visible = true

		let uid = localStorage.getItem('uid')
		
		this.rbtn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			SceneManager.toMainScene()
			SceneManager.instance.mainScene.toggleBtn(0)
		}, this)

		//显示当前日期
		let cu_month: string
		let cu_day: string
		let month = new Date().getMonth() + 1;
		let day = new Date().getDate()
		if (month<10) {
			cu_month ='0'+ month
		} else {
			cu_month = '' + month
		}
		if (day<10) {
			cu_day = '0' + day
		} else {
			cu_day = '' + day 
		}		
		this.cu_date.text = cu_month + '-' + cu_day
		

		var params = `way=rank&uid=${uid}`
		HttpServerSo.requestPost(params, this.postComplete, this)

		this.rinf_group.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
			SceneManager.instance.mainScene.toggleBtn(0)
			SceneManager.toRecordScene()
		}, this)

		this.getRecords(uid)


		

	}
	
	private postComplete(data: string,obj){	
		if (data == 'no_data') {

		}  else {
			obj.init_data(data)
		}
		
	}
	private init_data(data:string) {
		let res = JSON.parse(data)
		let name = res.username
		if (res.realName.length>0)name = res.realName

		this.real_name.text = name

		//加载自己的头像
		// let avatar= 'http://thirdwx.qlogo.cn/mmopen/vi_32/jXMuUZyWicI88gYicC9E32bagIQT0fPzVzXWFn8biaMWmSQWIh19FSXHRXpwVYxFhuhvYvxazLITGNyjYbSA7SBMA/132';
		let avatar = localStorage.getItem('avatar')
		if (res.avatar.indexOf('http')) {
			avatar = 'http://www.le626.com/' + res.avatar
		} else {
			avatar = res.avatar
		}
		
		// egret.ImageLoader.crossOrigin = "anonymous" //webgl模式下使用
		let imageLoader: egret.ImageLoader = new egret.ImageLoader()
		imageLoader.addEventListener(egret.Event.COMPLETE, (evt:egret.Event) => {
			let loader:egret.ImageLoader = evt.currentTarget
			let texture = new egret.Texture()
			texture._setBitmapData(imageLoader.data)

			this.rimg_avatar.source = texture  //加载IMAGE图像

			let circle:egret.Shape = new egret.Shape()
			circle.graphics.beginFill(0x000000)
			circle.graphics.drawCircle(72+20,10+20,20)
			circle.graphics.endFill()
			this.rinf_group.addChild(circle)
			this.rimg_avatar.mask = circle
		}, event)
		imageLoader.load(avatar)

	}

	private getDateOrderIndex(the_day: string):number {
		let rtn_index
		switch(the_day) {			
			case '4':
				rtn_index = 1
			break
			case '5':
				rtn_index = 2
			break
			case '6':
				rtn_index = 3
			break
			case '7':
				rtn_index = 4
			break
			case '8':
				rtn_index = 5
			break
			case '9':
				rtn_index = 6
			break
			case '10':
				rtn_index = 7
			break			
		}
		return rtn_index
	}





}