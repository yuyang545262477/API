var fs = require('fs');


//写入文件 --- writeFile 方法,对应的文件名,必须存在,不然会报错.
// fs.writeFile('./test/one.text','hello world',function (err) {
//     if(err)throw  err;
//     console.log('successing');
// });
//读取文件.
// fs.readFile('./test/one.text',function (err,data) {
//     // if (err) throw err;
//     console.log(data.toString());
// });


//同步写入一个文件.
// var x = fs.writeFileSync('./test/one.text','hello world2','utf-8');
// console.log(x);

//判断一个文件是否存在
// fs.exists('./test/one.text',function (data) {
//     console.log(data);
// });

//新建文件夹
function mkdir(name) {
    fs.mkdir(name, 0777, function (err) {
        if (err) throw  err;
        console.log('创建成功')
    });
}
//删除文件夹
function rmdir(name) {
    fs.rmdir(name, function (err) {
        if (err) throw  err;
        console.log('删除成功')
    })
}
var path = './test4';
fs.exists(path, function (err) {
    // err?mkdir(test3):console.log('hello');
    // err?console.log('已经存在了'):mkdir('./test3');
    err ? rmdir(path) : mkdir(path);
});
