function log(data) {
    console.log(data);
}
//依赖包
var schedule = require('node-schedule');

//情况二,特定情况下,运行程序.
// var rule = new schedule.RecurrenceRule();

// rule.second = [10,20,30,40,50];


// var jodb = schedule.scheduleJob(rule, function () {
//     log('hello');
//     log(new Date());
// });*/

// // 情况一,具体时间执行情况
//
// var dat2 = new Date(2016, 3, 1, 23, 01, 01);//注意月份,这里指的是,4月1日.
//
// schedule.scheduleJob(dat2, function () {
//     log('hello2');
// });
//
//
// //


// //情况三,使用CRON风格的定时器 && 取消
//
// var time ='1-59 * * * * * ';
//
// var func = schedule.scheduleJob(time,function () {
//     log("CronStyle: " + new Date());
// });
//
// setTimeout(function(){
//     func.cancel();
//     log("已经取消了")
// },3000);



