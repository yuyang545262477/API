#nodeMailer使用文档
####版本1.2.1
---------

##基本配置

    //依赖包
    var nodemailder = require('nodemailder');
    
    
    
    //  主体邮箱设置
    var myEmail = {
        serve:'qq', // 这里用QQ邮箱测试
        secureConnection: true,//这里指SSL,一定要开启的,不然不能使用
        port:465,   //端口号,默认的.
        auth:{
            user:yourQQmailNumber,
            pass:****   //这里指的是你的授权码,非你的QQ密码,详情查看==>设置>账户>开启服务>生成授权码
        }
    };
    
    //  邮箱发射器(好中二的名字)
    
    var transpoter = nodemailer.createTransport(myEmail);
    
    //  目标邮箱设置
    
    var otherEmail = {
         from:yourQQmailNumber,
         to: distMailnumber@x.com,//目标邮箱地址
         subject:'邮箱标题',
         text:'邮箱内容',
         html:'支持HTML模板'//text 与html 互斥,所以只能二选一
    };
    
    //  开启发送
    
    transport.sendEmail(otherEmail,function(err,successInfo){
           if(err) throw err;
           console.log(successInfo);
    }
    
    
    


