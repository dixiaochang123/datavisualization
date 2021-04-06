module.exports = {
	//产品对应指标
    indexInfo: [
		//name: 产品名称
		// indexNum:第几个指标
		// indexDetail:指标明细
		// firstNum:初始值
		// endNum:结束值
		// startNum:起始数
		// warnNum:预警数 maxNum*0.8
		// maxNum: 最大值
		// addNum: 扩容目标值  ( % :addNum / 3) (数值:addNum * 3)
		// addMultiple: 扩容倍数
		// aniTime:动画时间
		// israte: 是否百分比
		
        {name:'弹性云主机',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:100,endNum:57,startNum:0,aniTime:20,addMultiple:3,israte:true},//服务器使用率
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:100,endNum:81,startNum:0,aniTime:20,addMultiple:3,israte:true},//磁盘使用率
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:100,endNum:87,startNum:0,aniTime:20,addMultiple:3,israte:true},//CPU使用率
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:100,endNum:63,startNum:0,aniTime:20,addMultiple:3,israte:true},//内存使用率
			
			{indexNum:3,indexDetail:1,firstNum:0,maxNum:3000,endNum:1000,startNum:0,aniTime:20,addMultiple:3,israte:false},//带宽大小
			{indexNum:3,indexDetail:2,firstNum:0,maxNum:400,endNum:125,startNum:0,aniTime:20,addMultiple:3,israte:false},//实时流量
			{indexNum:3,indexDetail:3,firstNum:0,maxNum:70,endNum:23,startNum:0,aniTime:20,addMultiple:3,israte:false},//网络时延
			{indexNum:3,indexDetail:4,firstNum:0,maxNum:0.5,endNum:0.32,startNum:0,aniTime:20,addMultiple:3,israte:true},//丢包率
			
			{indexNum:4,indexDetail:1,firstNum:0,maxNum:90000,endNum:76000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			
			{indexNum:5,indexDetail:1,firstNum:0,maxNum:30000,endNum:10000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:5,indexDetail:2,firstNum:0,maxNum:60,endNum:20,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:5,indexDetail:3,firstNum:0,maxNum:100,endNum:48,startNum:0,aniTime:20,addMultiple:3,israte:true},//柱状1
			{indexNum:5,indexDetail:4,firstNum:0,maxNum:100,endNum:76,startNum:0,aniTime:20,addMultiple:3,israte:true},//柱状2
			
			{indexNum:6,indexDetail:1,firstNum:0,maxNum:15000,endNum:1800,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:2,firstNum:0,maxNum:15000,endNum:1300,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:3,firstNum:0,maxNum:15000,endNum:1000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:4,firstNum:0,maxNum:15000,endNum:1200,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:5,firstNum:0,maxNum:15000,endNum:1300,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:6,firstNum:0,maxNum:150000,endNum:1450,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:7,firstNum:0,maxNum:150000,endNum:1550,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:8,firstNum:0,maxNum:150000,endNum:2800,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:9,firstNum:0,maxNum:150000,endNum:3700,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:10,firstNum:0,maxNum:150000,endNum:3800,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:10,firstNum:0,maxNum:150000,endNum:4500,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:11,firstNum:0,maxNum:150000,endNum:4300,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:6,indexDetail:12,firstNum:0,maxNum:150000,endNum:4150,startNum:0,aniTime:20,addMultiple:3,israte:false},
			// {indexNum:6,indexDetail:13,firstNum:0,maxNum:100,endNum:100,startNum:0,aniTime:20,addMultiple:3,israte:true},

		]},



		{name:'对象存储OOS',data:[  
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:30000,endNum:3000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:100,endNum:24,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:3000,endNum:1000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			
			{indexNum:3,indexDetail:1,firstNum:0,maxNum:24000,endNum:7200,startNum:0,aniTime:20,addMultiple:3,israte:false},
		]},



		{name:'关系数据库MySQL',data:[
			{indexNum:1,indexDetail:1,firstNum:1000,maxNum:15000,endNum:2400,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:1,firstNum:1000,maxNum:15000,endNum:1600,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:2,firstNum:1000,maxNum:15000,endNum:800,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:3,firstNum:1000,maxNum:15000,endNum:1100,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:4,firstNum:1000,maxNum:15000,endNum:1700,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:5,firstNum:1000,maxNum:15000,endNum:2100,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:6,firstNum:1000,maxNum:15000,endNum:2600,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:7,firstNum:1000,maxNum:15000,endNum:2800,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:8,firstNum:1000,maxNum:15000,endNum:3200,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:9,firstNum:1000,maxNum:15000,endNum:3800,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:10,firstNum:1000,maxNum:15000,endNum:4300,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:11,firstNum:1000,maxNum:15000,endNum:4600,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:12,firstNum:1000,maxNum:15000,endNum:4100,startNum:0,aniTime:20,addMultiple:3,israte:false},
			// {indexNum:1,indexDetail:13,firstNum:1000,maxNum:100,endNum:5000,startNum:0,aniTime:20,addMultiple:3,israte:true},

			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:100,endNum:96,startNum:0,aniTime:20,addMultiple:3,israte:true}, //13
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:4000,endNum:1024,startNum:0,aniTime:20,addMultiple:3,israte:false},//14
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:60,endNum:18,startNum:0,aniTime:20,addMultiple:3,israte:false},//15
			
			{indexNum:3,indexDetail:1,firstNum:2000,maxNum:15000,endNum:4600,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:2,firstNum:2000,maxNum:15000,endNum:3500,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:3,firstNum:2000,maxNum:15000,endNum:5000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:4,firstNum:2000,maxNum:15000,endNum:3800,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:5,firstNum:2000,maxNum:15000,endNum:3500,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:6,firstNum:2000,maxNum:15000,endNum:5000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:7,firstNum:2000,maxNum:15000,endNum:3800,startNum:0,aniTime:20,addMultiple:3,israte:false},

			

		]},

		{name:'CDN内容分发',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:20,endNum:20,startNum:0,aniTime:20,addMultiple:2,israte:true},//网络时延
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:0.7,endNum:0.326,startNum:0,aniTime:20,addMultiple:1.5,israte:true},//丢包率
			{indexNum:1,indexDetail:3,firstNum:0,maxNum:3000,endNum:1000,startNum:0,aniTime:20,addMultiple:3,israte:false}, //宽带大小
			{indexNum:1,indexDetail:4,firstNum:0,maxNum:500,endNum:125,startNum:0,aniTime:20,addMultiple:3,israte:false},//实时流量
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:12000,endNum:1600,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:12000,endNum:2700,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:12000,endNum:3200,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:12000,endNum:4000,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:12000,endNum:3500,startNum:0,aniTime:20,addMultiple:3,israte:true},	
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:12000,endNum:3100,startNum:0,aniTime:20,addMultiple:3,israte:true},	
		]},



		{name:'专属云',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:3000,endNum:1000,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:1200,endNum:400,startNum:0,aniTime:20,addMultiple:3,israte:true},
                                                
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:1000,endNum:1000,startNum:0,aniTime:20,addMultiple:3,israte:true}

		]},
 


        {name:'DDoS高防IP',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:100,endNum:0,startNum:0,aniTime:20,addMultiple:3,israte:false},//被攻击统计
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:100,endNum:0,startNum:0,aniTime:20,addMultiple:3,israte:false},//发起攻击统计
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:150000,endNum:5000,startNum:0,aniTime:20,addMultiple:3,israte:false},//国际发起
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:150000,endNum:12000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:150000,endNum:15000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:150000,endNum:15000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:150000,endNum:20000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:6,firstNum:0,maxNum:150000,endNum:15000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:7,firstNum:0,maxNum:150000,endNum:21000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:8,firstNum:0,maxNum:150000,endNum:13000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:9,firstNum:0,maxNum:150000,endNum:11000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:10,firstNum:0,maxNum:150000,endNum:13000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:11,firstNum:0,maxNum:150000,endNum:16000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:12,firstNum:0,maxNum:150000,endNum:19000,startNum:0,aniTime:20,addMultiple:3,israte:false},

			{indexNum:3,indexDetail:13,firstNum:0,maxNum:150000,endNum:18000,startNum:0,aniTime:20,addMultiple:3,israte:false},//国内发起
			{indexNum:3,indexDetail:14,firstNum:0,maxNum:150000,endNum:23000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:15,firstNum:0,maxNum:150000,endNum:28000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:16,firstNum:0,maxNum:150000,endNum:31000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:17,firstNum:0,maxNum:150000,endNum:42000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:18,firstNum:0,maxNum:150000,endNum:39500,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:19,firstNum:0,maxNum:150000,endNum:46000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:20,firstNum:0,maxNum:150000,endNum:35000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:21,firstNum:0,maxNum:150000,endNum:30000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:22,firstNum:0,maxNum:150000,endNum:39500,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:23,firstNum:0,maxNum:150000,endNum:43500,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:24,firstNum:0,maxNum:150000,endNum:38000,startNum:0,aniTime:20,addMultiple:3,israte:false},
                                ]},



		{name:'web应用防火墙',data:[  
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:150000,endNum:22000,startNum:0,aniTime:20,addMultiple:3,israte:false},//SQL注入攻击数
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:150000,endNum:32000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:3,firstNum:0,maxNum:150000,endNum:40000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:4,firstNum:0,maxNum:150000,endNum:42000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:5,firstNum:0,maxNum:150000,endNum:38000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:6,firstNum:0,maxNum:150000,endNum:40000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:7,firstNum:0,maxNum:150000,endNum:46000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:8,firstNum:0,maxNum:150000,endNum:38000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:9,firstNum:0,maxNum:150000,endNum:32000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:10,firstNum:0,maxNum:150000,endNum:28000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:11,firstNum:0,maxNum:150000,endNum:22000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:1,indexDetail:12,firstNum:0,maxNum:150000,endNum:30000,startNum:0,aniTime:20,addMultiple:3,israte:false},

			{indexNum:2,indexDetail:1,firstNum:0,maxNum:150000,endNum:39000,startNum:0,aniTime:20,addMultiple:3,israte:false},//XSS攻击数
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:150000,endNum:37000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:150000,endNum:35000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:150000,endNum:36000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:150000,endNum:37000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:6,firstNum:0,maxNum:150000,endNum:39000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:7,firstNum:0,maxNum:150000,endNum:45000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:8,firstNum:0,maxNum:150000,endNum:45000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:9,firstNum:0,maxNum:150000,endNum:45000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:10,firstNum:0,maxNum:150000,endNum:39000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:11,firstNum:0,maxNum:150000,endNum:35000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:12,firstNum:0,maxNum:150000,endNum:36000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:13,firstNum:0,maxNum:150000,endNum:39000,startNum:0,aniTime:20,addMultiple:3,israte:false},

			{indexNum:3,indexDetail:14,firstNum:0,maxNum:150000,endNum:22000,startNum:0,aniTime:20,addMultiple:3,israte:false},//恶意爬虫攻击数
			{indexNum:3,indexDetail:15,firstNum:0,maxNum:150000,endNum:15000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:16,firstNum:0,maxNum:150000,endNum:16000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:17,firstNum:0,maxNum:150000,endNum:14000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:18,firstNum:0,maxNum:150000,endNum:14500,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:19,firstNum:0,maxNum:150000,endNum:25000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:20,firstNum:0,maxNum:150000,endNum:20000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:21,firstNum:0,maxNum:150000,endNum:25000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:22,firstNum:0,maxNum:150000,endNum:22000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:23,firstNum:0,maxNum:150000,endNum:27000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:24,firstNum:0,maxNum:150000,endNum:22000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:25,firstNum:0,maxNum:150000,endNum:25000,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:26,firstNum:0,maxNum:150000,endNum:24000,startNum:0,aniTime:20,addMultiple:3,israte:false},

		]},



		{name:'云间高速',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:500,endNum:120,startNum:0,aniTime:20,addMultiple:3,israte:false},//实时流量
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:3000,endNum:960,startNum:0,aniTime:20,addMultiple:3,israte:false},//宽带大小
			{indexNum:1,indexDetail:3,firstNum:0,maxNum:90,endNum:28,startNum:0,aniTime:20,addMultiple:3,israte:false},//网络时延
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:0.5,endNum:0.12,startNum:0,aniTime:20,addMultiple:3,israte:true},//丢包率
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:0.5,endNum:0.3,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:0.5,endNum:0.2,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:0.5,endNum:0.12,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:0.5,endNum:0.38,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:6,firstNum:0,maxNum:0.5,endNum:0.28,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:7,firstNum:0,maxNum:0.5,endNum:0.15,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:8,firstNum:0,maxNum:0.5,endNum:0.08,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:9,firstNum:0,maxNum:0.5,endNum:0.15,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:10,firstNum:0,maxNum:0.5,endNum:0.22,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:11,firstNum:0,maxNum:0.5,endNum:0.3,startNum:0,aniTime:20,addMultiple:3,israte:true},
			{indexNum:2,indexDetail:12,firstNum:0,maxNum:0.5,endNum:0.2,startNum:0,aniTime:20,addMultiple:3,israte:true},
                                           
			
		]},



		{name:'云直播',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:1000,endNum:1000,startNum:0,aniTime:20,addMultiple:3,israte:false},//宽带
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:28,endNum:14,startNum:0,aniTime:20,addMultiple:3,israte:false},//网络时延
			{indexNum:1,indexDetail:3,firstNum:0,maxNum:0.5,endNum:0.21,startNum:0,aniTime:20,addMultiple:2,israte:true},//丢包率
			{indexNum:1,indexDetail:4,firstNum:0,maxNum:100,endNum:1,startNum:0,aniTime:20,addMultiple:3,israte:false},//AI审核
			{indexNum:1,indexDetail:5,firstNum:0,maxNum:100,endNum:1,startNum:0,aniTime:20,addMultiple:3,israte:false},//实施转码
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:4121739,endNum:1121739,startNum:0,aniTime:20,addMultiple:3,israte:false},//高峰连接数
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:714476,endNum:214476,startNum:0,aniTime:20,addMultiple:3,israte:false},//用户数
	
		]},



		{name:'物理机',data:[
			 {indexNum:1,indexDetail:1,firstNum:0,maxNum:100,endNum:67,startNum:0,aniTime:20,addMultiple:3,israte:true},//CPU使用率
			 {indexNum:1,indexDetail:2,firstNum:0,maxNum:100,endNum:51,startNum:0,aniTime:20,addMultiple:3,israte:true},//内存使用率
			
                                               
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:100,endNum:63,startNum:0,aniTime:20,addMultiple:3,israte:true},//物理机使用率
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:100,endNum:67,startNum:0,aniTime:20,addMultiple:3,israte:true},//磁盘使用率
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:3000,endNum:1000,startNum:0,aniTime:20,addMultiple:3,israte:false},//宽带大小
			{indexNum:2,indexDetail:6,firstNum:0,maxNum:100,endNum:27,startNum:0,aniTime:20,addMultiple:3,israte:false},//网络时延
			{indexNum:2,indexDetail:7,firstNum:0,maxNum:100,endNum:20,startNum:0,aniTime:20,addMultiple:3,israte:false},//每秒I/O
			
		]},
 


        {name:'GPU云主机',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:100,endNum:89.62,startNum:0,aniTime:20,addMultiple:3,israte:true},//GPU使用率
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:100,endNum:68.15,startNum:0,aniTime:20,addMultiple:3,israte:true},//内存使用率
			{indexNum:1,indexDetail:3,firstNum:0,maxNum:100,endNum:43.78,startNum:0,aniTime:20,addMultiple:3,israte:true},//磁盘使用率
			{indexNum:1,indexDetail:4,firstNum:0,maxNum:0.5,endNum:0.15,startNum:0,aniTime:20,addMultiple:3,israte:true},//丢包率
			 
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:3000,endNum:800,startNum:0,aniTime:20,addMultiple:3,israte:false},//宽带大小
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:3000,endNum:700,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:3000,endNum:600,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:3000,endNum:450,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:3000,endNum:400,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:6,firstNum:0,maxNum:3000,endNum:550,startNum:0,aniTime:20,addMultiple:3,israte:false},

			{indexNum:3,indexDetail:7,firstNum:0,maxNum:300,endNum:90,startNum:0,aniTime:20,addMultiple:3,israte:false},//实时流量
			{indexNum:3,indexDetail:8,firstNum:0,maxNum:300,endNum:86,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:9,firstNum:0,maxNum:300,endNum:75,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:10,firstNum:0,maxNum:300,endNum:64,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:11,firstNum:0,maxNum:300,endNum:51,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:3,indexDetail:12,firstNum:0,maxNum:300,endNum:79,startNum:0,aniTime:20,addMultiple:3,israte:false},
		]},

                        
                             
        {name:'弹性负载均衡ELB',data:[
			{indexNum:1,indexDetail:1,firstNum:0,maxNum:9685147,endNum:2685147,startNum:0,aniTime:20,addMultiple:3,israte:false},//网络连接数
			{indexNum:1,indexDetail:2,firstNum:0,maxNum:100,endNum:14.37,startNum:0,aniTime:20,addMultiple:3,israte:true},//网络连接数 同比百分比   
			{indexNum:1,indexDetail:3,firstNum:0,maxNum:100,endNum:65,startNum:0,aniTime:20,addMultiple:3,israte:true},//单机负载
			{indexNum:1,indexDetail:4,firstNum:0,maxNum:100,endNum:0.16,startNum:0,aniTime:20,addMultiple:3,israte:true},//单机负载 同比百分比
			
			{indexNum:2,indexDetail:1,firstNum:0,maxNum:15000,endNum:2164,startNum:0,aniTime:20,addMultiple:3,israte:false},//高峰并发值
			{indexNum:2,indexDetail:2,firstNum:0,maxNum:15000,endNum:3416,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:3,firstNum:0,maxNum:15000,endNum:3782,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:4,firstNum:0,maxNum:15000,endNum:2940,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:5,firstNum:0,maxNum:15000,endNum:3389,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:6,firstNum:0,maxNum:15000,endNum:2691,startNum:0,aniTime:20,addMultiple:3,israte:false},
			{indexNum:2,indexDetail:7,firstNum:0,maxNum:15000,endNum:3461,startNum:0,aniTime:20,addMultiple:3,israte:false},
                                         	
		]},




    ],
}