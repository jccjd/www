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

<<<<<<< HEAD
var pattern = /[^0-9]oogle/;//[^0-9]表示非0-9的任意字符，任意一个都可以匹配
var str = '4oogle';
alert(pattern.test(str));


var pattern = /^[0-9]oogle/;//这个^符号是加在/后面的而不是【】里面的
var str = '4444oogle';
alert(pattern.test(str));


var pattern = /^[0-9]+oogle/;//这个^符号是加在/后面的而不是【】里面的+号可以匹配多个
var str = '4444oogle';
alert(pattern.test(str));


var pattern = /\woogle/;//\w表示【a-zA-Z_】
var str = 'qoogle';
alert(pattern.test(str));

var pattern = /\Woogle/;//\w表示【^a-zA-Z_】匹配非字母和数字及_
var str = 'qoogle';
alert(pattern.test(str));

var pattern = /\doogle/;//\d表示【0-9】
var str = 'qoogle';
alert(pattern.test(str));

var pattern = /\Doogle/;//\D表示非【0-9】
var str = 'qoogle';
alert(pattern.test(str));

var pattern = /^google$/;//多余的字符不能匹配 ^强制首匹配，$强制尾匹配
var str = 'google';
alert(pattern.test(str));

var pattern = /^google$/;
var str = 'google';
*/
var pattern = /[^0-9]oogle/;//[a-z]表示26个小写字母，任意一个都可以匹配
var str = '4oogle';
alert(pattern.test(str));
