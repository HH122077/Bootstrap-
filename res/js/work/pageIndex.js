$(function(){
	// 基于准备好的dom，初始化echarts实例
	var myChart = echarts.init(document.getElementById('main'));
	
	var option = {
	    title: {
	        text: '用户pv和uv'
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross',
	            label: {
	                backgroundColor: '#6a7985'
	            }
	        }
	    },
	    legend: {
	        data: ['pv', 'uv']
	    },
	    toolbox: {
	        feature: {
	            saveAsImage: {}
	        }
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: [
	        {
	            type: 'category',
	            boundaryGap: false,
	            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value'
	        }
	    ],
	    series: [
	        {
	            name: 'pv',
	            type: 'line',
	            stack: '总量',
	            areaStyle: {},
	            data: [120, 132, 101, 134, 90, 230, 210]
	        },
	        {
	            name: 'uv',
	            type: 'line',
	            stack: '总量',
	            areaStyle: {},
	            data: [220, 182, 191, 234, 290, 330, 310]
	        } 
	    ]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
})