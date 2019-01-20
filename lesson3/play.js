/***********************************/
/**********双向数据绑定课程**********/
/***********************************/

/**
 * 最基础版
 * -- addEventListener()
 */
var myInput1 = document.getElementById('myInput1')
var mySpan1 = document.getElementById('mySpan1')
myInput1.addEventListener('keyup', e => {
  mySpan1.innerText = e.target.value
})

/**
 * 数据劫持版
 * -- Object.defineProperty()
 */
var myInput2 = document.getElementById('myInput2')
var mySpan2 = document.getElementById('mySpan2')
var obj = {}
Object.defineProperty(obj, 'input', {
  set: v => {
    mySpan2.innerText = v
  }
})
myInput2.addEventListener('keyup', e => {
  v = e.target.value
  obj.input = v
})

/**
 * 脏数据检查版
 * -- oldVal != newVal ?
 */
var myInput3 = document.getElementById('myInput3')
var mySpan3 = document.getElementById('mySpan3')
var oldVal = null
var newVal = null
setInterval(() => {
  newVal = myInput3.value
  if (oldVal != newVal) {
    oldVal = newVal
    mySpan3.innerText = newVal
  }
}, 200)

/**
 * 赝个Vue
 * -- DOM获取属性名和对应的值
 * -- innerText对比
 * -- Object.defineProperty()
 */
var myInput4 = document.querySelector('input[v-model="myInput4"]')
var mySpan4 = null
var spans = document.querySelectorAll('span')
for (e of spans) {
  if (e.innerText == '{{mySpan4}}') {
    mySpan4 = e
    mySpan4.innerText = myInput4.value
    break
  }
}
var vue = {}
Object.defineProperty(vue, 'input', {
  set: v => {
    mySpan4.innerText = v
  }
})
myInput4.addEventListener('keyup', e => {
  vue.input = e.target.value
})
