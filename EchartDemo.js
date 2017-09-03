import React, {Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import ReactEcharts from '../../../components/ReactECharts';
import { Form } from 'antd';

class EchartDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {     
      mychart1: {},
      mychart2: {},
      mychart3: {},
      mychart4: {}
    };
  }

animal=(type='cat')=>{
console.log(type)
}

  xround = (x, num) => {
    return Math.round(x * Math.pow(10, num)) / Math.pow(10, num) ;
  }
 

  render() {
    console.log(0.1+0.2);
console.log(0.1+0.2==0.3);
this.animal('dog');
    const chart1 = {
        title : {
            text: '人力资源预警',
            x:'center'
        },
        tooltip : {
            formatter: "{b} : {c}%"
        },       
        series: [
            {
                name: '',
                type: 'gauge',
                detail: {formatter:'{value}%'},
                data: [{value: 7.28, name: '离职率'}]
            }
        ]
    };

    const chart2 = {
        title : {
            text: '自愿离职分析',       
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            top:'8%',
             orient: 'horizontal', // 'vertical'
             x: 'center', // 'center' | 'left' | {number},
             y: 'center', // 'center' | 'bottom' | {number}
            data: ['工作压力','薪资福利','职业发展','个人原因','外部环境']
        },
        
        series : [
            {
                name: '自愿离职分析',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:3.1, name:'工作压力'},
                    {value:3.2, name:'薪资福利'},
                    {value:3.3, name:'职业发展'},
                    {value:3.4, name:'个人原因'},
                    {value:1, name:'外部环境'}
                ],
                itemStyle : {
                   normal : {
                         label : {
                           show:true,
                           formatter:"{b}: {c}({d}%)"
                         },
                         labelLine : {
                             show : true
                         }
                     },
                     emphasis : {
                         label : {
                             show : false
                         }
                     }
                }
            }
        ]
    };
    const chart3 = {
        title : {
            text: '人员学历分布',       
            x:'center'
        },
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
             top:'8%',
             orient: 'horizontal', // 'vertical'
             x: 'center', // 'center' | 'left' | {number},
             y: 'center', // 'center' | 'bottom' | {number}
            data:['百度','谷歌','必应','其他']
        },
        
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日'],
                axisLabel : {
                    rotate: 30
                }           
            }
        ],
        yAxis: [            
             {
                 type : 'value',
                 name : '数量'                 
             }       
        ],
        grid: {
            top: '22%'
        },
        series : [
            
            {
                name:'百度',
                type:'bar',
                barWidth : 10,
                stack: '搜索引擎',
                data:[620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
                name:'谷歌',
                type:'bar',
                stack: '搜索引擎',
                data:[120, 132, 101, 134, 290, 230, 220]
            },
            {
                name:'必应',
                type:'bar',
                stack: '搜索引擎',
                data:[60, 72, 71, 74, 190, 130, 110]
            },
            {
                name:'其他',
                type:'bar',
                stack: '搜索引擎',
                data:[62, 82, 91, 84, 109, 110, 120]
            }
        ]
    };

    // Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];

for (var i = 0; i < 7; i++) {
    var date = new Date(dottedBase += 3600 * 24 * 1000);
    category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('-'));
    var b = this.xround(Math.random() * 200,2) ;
    var d = this.xround(Math.random() * 200,2);
    barData.push(b)
    lineData.push(this.xround(d + b,2));
}


const chart4 = {
        title : {
            text: '在职人员年龄分布',       
            x:'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
             top:'8%',
             orient: 'horizontal', // 'vertical'
             x: 'center', // 'center' | 'left' | {number},
             y: 'center', // 'center' | 'bottom' | {number}
            data:['搜索引擎','百度','谷歌','必应','其他','line']
        },
        grid: {
            top: '22%',
            left: '13%',
            right: '14%'
            
        },
        xAxis: {
            type : 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            axisLabel : {
                rotate: 30
            }           
        },
        yAxis: [
            {
                 type : 'value',
                 name : '数量',
                 axisLabel : {
                     formatter: '{value}人'
                 }
             },
             {
                 type : 'value',
                 name : '年龄',
                 axisLabel : {
                     formatter: '{value}岁'
                 }                 
             }       
        ],
       
        series: [
        {
            name: 'line',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            yAxisIndex: 1,
            data: lineData
        }, 
        {
                name:'搜索引擎',
                type:'bar',
                barWidth : 5,
                data:[862.12, 1018.12, 964.12, 1026.12, 1679.12, 1600.12, 1570.12],
                
            },
            {
                name:'百度',
                type:'bar',
                barWidth : 5,
                stack: '搜索引擎',
                data:[620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
                name:'谷歌',
                type:'bar',
                stack: '搜索引擎',
                data:[120, 132, 101, 134, 290, 230, 220]
            },
            {
                name:'必应',
                type:'bar',
                stack: '搜索引擎',
                data:[60, 72, 71, 74, 190, 130, 110]
            },
            {
                name:'其他',
                type:'bar',
                stack: '搜索引擎',
                data:[62, 82, 91, 84, 109, 110, 120]
            }
        ]
    };

    return (
      <div>
        <div className="row">
          <div className="col-xl-6">
            <div className="card card-inverse">
              <div className="card-block">                 
                <ReactEcharts style={{height: '300px'}} option={chart1} showLoading={false} />
              </div>
            </div>
          </div>          
          <div className="col-xl-6">
            <div className="card card-inverse">
              <div className="card-block">
                <ReactEcharts style={{height: '300px'}} option={chart2} showLoading={false} />
              </div>
            </div>
          </div>          
        </div> 
        <div className="row">
          <div className="col-xl-6">
            <div className="card card-inverse">
              <div className="card-block">
                <ReactEcharts style={{height: '400px'}} option={chart3} showLoading={false} />
              </div>
            </div>
          </div>          
          <div className="col-xl-6">
            <div className="card card-inverse">
              <div className="card-block">
                <ReactEcharts style={{height: '400px'}} option={chart4} showLoading={false} />
              </div>
            </div>
          </div> 
        </div>          
      </div> 
      );
  }
}
export default EchartDemo;

