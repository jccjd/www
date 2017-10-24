/*
var pattern = /g.gle/; //点符号表示匹配除了换行符外的任意字符
var str = /g1gle/;
alert(pattern.test(str));

var pattern = /go*gle/; //0* , 表示0个，1个，或者多个0
var str = 'goooogle';
alert(pattern.test(str));

var pattern = /go+gle/;// o+匹配至少一个
var str = 'google';
alert(pattern.test(str));

var pattern = /g.?gle/;//o? 匹配0 或1个的任意字符
var str = 'gogle';
alert(pattern.test(str));

var pattern = /go{2,4}gle/;//o{3},表示只能限制三次{3,}表示三次以上
var str = 'gooogle';
alert(pattern.test(str));

var pattern = /[a-z]oogle/;//[a-z]表示26个小写字母，任意一个都可以匹配
var str = 'google';
alert(pattern.test(str));

*/
var pattern = /[^0-9]oogle/;//[a-z]表示26个小写字母，任意一个都可以匹配
var str = '4oogle';
alert(pattern.test(str));
