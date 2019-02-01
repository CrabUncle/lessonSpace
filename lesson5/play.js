/******************************/
/*********** 正则入门 **********/
/******************************/
/*
基本规则：
\w  word  a-z A-Z 0-9 _ 一个英文字母，或者一个数字，或者_
\W  取反\w
\d  digit  0-9
\D  取反\d
.   万能通配
\s  whiteSpace  空格、tab
\S  取反\s

\b  boundary 单词边界(word)
\B  取反\b
^   以什么什么开头  (String) 
$   以什么什么结尾  (String) 

[]  匹配中括号里的任意一个
[^] 取反
()  组 
|   或

{n}  匹配n个
{n,m}  匹配n~m个
*  0~无穷大
+  1~无穷大
?  0~1
*/

/*  
正则锻炼网站：https://regexr.com/
*/

var str = 'https://www.baidu.com?username=admin&password=88888888&code=1234'
var obj = {}
var pattern = /(\w+)=(\w+)/gi

/* 
// 方法一：exec()
var result = null
do {
  result = pattern.exec(str)
  if (result != null) {
    let k = result[1]
    let v = result[2]
    Object.defineProperty(obj, k, {
      value: v,
      enumerable: true,
      writable: true
    })
  }
} while (result != null)
 */

// 方法二: replace()
/* str.replace(pattern, (match, k, v) => {
  Object.defineProperty(obj, k, {
    value: v,
    enumerable: true,
    writable: true
  })
}) */

/* var reg = new RegExp(/(\w+)=(\w+)/, 'gi')
str.replace(reg, (match, k, v) => {
  Object.defineProperty(obj, k, {
    value: v,
    enumerable: true,
    writable: true
  })
}) */

// test()  exec() replace() RegExp()