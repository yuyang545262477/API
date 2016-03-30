# Node
----

#文件操作模块——fs


##  1   如何同步写入文件  ==> fs.writeFileSync();|| 如何异步写入文件    ==> fs.writeFile();
    //参数:文件名,内容,文件编码
    var x = fs.writeFileSync('./test/one.text,'hello world','utf-8');
    console.log(x); //undefined
    //无返回值.
##  2   如何同步读取文件  ==> fs.readFileSync();||  如何异步读取文件    ==> fs.readFile();
    //参数:文件名,文件编码;
    var x = fs.readFileSync('./test/one.text','uft-8);
    console.log(x);//''hello world'
    //返回文件内容.
##  3.  如何判断一个文件是否存在  ==> fs.exists();
    //参数:文件路径,回调函数
    fs.exists('./test/one.text',function(data){console.log(data)};// true;
    
    
    
    






    




