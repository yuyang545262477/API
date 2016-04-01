/*
 *  使用node发送邮件
 *  所用版本 nodemailer 1.2.1
 * */


//依赖包
var nodemailer = require('nodemailer');

//个人邮箱 && Amy 邮箱
var myEmail = '545262477@qq.com';


//测试内容
var textContent = '测试,发送图片的功能';
var htmlContent = '<h1>测试图片发送</h1>' +
    '<br>还是另起一行来,我们上图片 <img src="cid:00001"/>';

//个人配置
var option = {
    service: 'qq',
    secureConnection: true,
    port: 465,
    auth: {
        user: myEmail,
        pass: 'lebfksdwmswjbFDD'
    }
};

//创建发送器.
var transporter = nodemailer.createTransport(option);
//目标地址.
var mailOption = {
    from: myEmail,
    to: '1911099096@qq.com',
    subject: '测试邮箱_附件功能',
    // text: textContent,
    html:htmlContent,
    attachments: [{
        filename: 'yuyang',
        path: './attachment/yu.html'
    }, {
        filename: 'png',
        path: './attachment/nodeMailer.png',
        cid: '00001'
    }]
};


//开启发送
transporter.sendMail(mailOption, function (err, info) {
    if (!err) {
        console.log(info);
    } else {
        console.log(err);
    }
});
