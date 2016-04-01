# node_schedule

一个非常智能的定时器,能够帮助我们做一些非常复杂的定时任务

##一共三种写法
*   Cron风格

        var schedule = require("node-schedule");
        var date = '1 * * * * *'; //这里表示,每分钟的第一秒.
        var date2 = '2-10 * * * * *'; //这里表示,每分钟的第二秒和第十秒.
        var date3 = '* */3 * * * *';//这里表示,每个三分钟.
    
        var CronStyle = function(date){
            //定义job
            var job =schedule.scheduleJob( date , function(){
                console.log("这里指,每分钟的第一秒执行函数");
            });
            // 如何结束定时计划呢?这里写一个:5秒之后结束的程序;
            // 其他风格的结束方式一致,之后,不再掩饰.
            setTimeout(function(){
            job.cancel();
            },5000);
        };
        CronStyle(date2);'
    
    
*   递归风格

        var schedule = require('node-schedule');
        var rule = new schedule.RecurrenceRule();
        rule.second = 10;//同样,每分钟的第十秒钟.
        /* 如果我想设定一个范围,如何做呢?
           这里假设,我想要每分钟的 10秒,23秒,50~59秒,执行一个函数*/
        
          //  rule.second [10,23,new schedule.Range(50,59)]; 详情可以翻看此页面的index.js;
           
           
        
        function scheduleRecurrenceRule (rule){
            schedule.scheduleJob(rule,function(){
                console.log('这是递归的掩饰方法');
            }
         }
         
         scheduleRecurrenceRule(rule);
          
        
*   对象文本表示法
       
        var schedule = require('node-schedule');
        
        var date = {
            hour:4,
            minute:22,
            second:[12,45,33,new schedule.Range(55,59)]//此为表示范围的方式
        };
        
        function ObjectLiteralSyntax(date){
            schedule.scheduleJob(date,function(){
                  console.log("对象文本表示法" + new Date());            
            }
        }
        
        ObjectLiteralSyntax(date);

>   参考资料

        [参考资料1](https://github.com/node-schedule/node-schedule)
        
        [参考资料2](http://www.cnblogs.com/zhongweiv/p/node_schedule.html#node_cha)
        
        
    
   
  


   
    


