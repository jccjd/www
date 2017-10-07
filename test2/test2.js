/*使用search来查找匹配数据*/
var patten = /box/ig;
var str = 'This is  a Box! That is a Box too';
alert(str.search(patten));

/**
var pattern = /Box/i;
var str = 'boxss';
alert(typeof pattern.exec(str));  //如果没有匹配到就返回null

var pattern = /Box/i;     //没有开启全局
var str = 'This is a Box! That is a Box!';
alert(typeof str.match(pattern));//匹配到第一个字符串返回数组


var pattern = /Box/i;     //没有开启全局
var str = 'This is a box! That is a Box!';
var a =  str.match(pattern);//匹配到第一个字符串返回数组
alert(a[0]);//证明为数组


var pattern = /Box/ig;    //开启了全局
var str = 'This is a Box! That is a box!';
alert(str.match(pattern));//将所有匹配的字符串组合成数组返回

*/
