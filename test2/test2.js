
var pattern = /google/gim;
var str = 'google google google';

// alert(pattern.ignoreCase);//是否忽略大小写
// alert(pattern.global);//true是否全局了
// alert(pattern.multiline);//是否支持换行
// alert(pattern.lastIndex);//下次匹配的位置
// alert(pattern.source);//正则表达式的源字符串
pattern.test(str);
pattern.test(str);
pattern.lastIndex = 100;
alert(pattern.lastIndex);

// var pattern = /Box/i;
// var str = 'boxss';
// alert(typeof pattern.exec(str));  //如果没有匹配到就返回null
//
// var pattern = /Box/i;     //没有开启全局
// var str = 'This is a Box! That is a Box!';
// alert(typeof str.match(pattern));//匹配到第一个字符串返回数组
//

// var pattern = /Box/i;     //没有开启全局
// var str = 'This is a box! That is a Box!';
// var a =  str.match(pattern);//匹配到第一个字符串返回数组
// alert(a[0]);//证明为数组
//
//
// var pattern = /Box/ig;    //开启了全局
// var str = 'This is a Box! That is a box!';
// alert(str.match(pattern));//将所有匹配的字符串组合成数组返回

/*使用search来查找匹配数据*/
// var patten = /box/ig;
// var str = 'This is a Box! That is a Box too';
// alert(str.search(patten));//返回第一个匹配的位置不需要全局 (i/ig) 找不到返回-1
/*使用replace替换匹配到的数据*/
// var pattern = /Box/ig;
// var str = 'This is a Box, That is a Box too';
// alert(str.replace(pattern, 'Tom'));//返回的是修改后的字符串

/*使用split拆分字符串数组*/
// var pattern = / /ig;
// var str = 'This is a Box!, That is a Box too';
// alert(str.split(pattern));
// alert(str.split(pattern).length);

// var patten = /google/i;
// var str = 'This is google !';
// patten.test(str);
// alert(RegExp.input);
// alert(RegExp.leftContext);
// alert(RegExp.rightContext);
// alert(RegExp.nightContext);
// alert(RegExp.lastMatgh);
// alert(RegExp.multiline);
// alert(RegExp.lastParen);
