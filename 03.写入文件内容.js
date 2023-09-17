// 1.导入fs文件系统模块
const fs = require('fs')

// 2.调用fs.writeFile()方法，写入文件的内容
    // 参数1：表示文件的存放路径
    // 参数2：表示要写入的内容
    // 参数3：回调函数
fs.writeFile('./files/3.txt', 'adcd', function(err){ 
    // 如果写入成功，则 err 的值等于 null
    // 如果写入失败，则 err 的值调用一个 错误对象
    console.log(err);
})