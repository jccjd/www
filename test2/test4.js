/*
var pattern = /goo gle/;
var str = 'goo gle';
alert(pattern.test(str));//直接使用空格匹配

var pattern = /goo\sgle/;//\s可以匹配到空格
var str = 'goo gle';
alert(pattern.test(str));
*/
var pattern = /google\b/;//\b可以匹配是否到了边界
var str = 'googlesd';
alert(pattern.test(str));
alert(pattern.test(str));
alert(pattern.test(str));
