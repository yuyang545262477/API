
#文件操作模块——fs


##  1   如何同步写入文件  ==> fs.writeFileSync();
    //参数:文件名,内容,文件编码
    var x = fs.writeFileSync('./test/one.text,'hello world','utf-8');
    console.log(x); //undefined
    //无返回值.
##  2   如何同步读取文件  ==> fs.readFileSync();
    //参数:文件名,文件编码;
    var x = fs.readFileSync('./test/one.text','uft-8);
    console.log(x);//''hello world'
    //返回文件内容.
##  3.  如何判断一个文件是否存在  ==> fs.exists();
    //参数:文件路径,回调函数
    fs.exists('./test/one.text',function(data){console.log(data)};// true;
##  4.  如何新建目录  ==> fs.mkdir();
    //参数:目录名称,目录权限,回调.
    fs.mkdir('./test2',0755,function(err){if(err) throw err;console.log('创建成功');}
##  5.  如何删除目录  ==> fs.rmdir();
    //参数:目录名称(注意,不能删除非空目录);
    fs.rmdir('./test2',function(err){if(err)throw err;console.log('删除成功)});
    //无返回值.
    
    
    
    






    




