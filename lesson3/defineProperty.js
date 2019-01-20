var obj = {}
/* Object.defineProperty(obj, 'name', {
  value:'鹿晗！！！'
})
Object.defineProperty(obj, 'birthday', {
  value:'1990年4月20日',
  writable: false
}) */
/* Object.defineProperties(obj, {
  name: {
    value: '鹿晗！！！'
  },
  birthday: {
    value: '1990年4月20日',
    writable: false
  },
  age: {
    value: 30
  },
  money: {
    value: '20亿'
  }
}) */

/* 
var name = null
Object.defineProperty(obj, 'n', {
  get: () => {
    return name
  },
  set: v => {
    name = v
  }
})*/

/* 
var name = null
var age = null
Object.defineProperties(obj, {
  name: {
    set: v=>{
      name = v
    },
    get: ()=>{
      return name
    }
  },
  age: {
    set: v=>{
      age = v
    },
    get: ()=>{
      return age
    }
  }
}) */

/* 
function Student() {
  var name = null
  Object.defineProperty(this, 'name', {
    set: v => {
      name = v + '真丑'
    },
    get: () => {
      return name + ', 学习真差！'
    }
  })
}
var xiaoming = new Student()
xiaoming.name = '小明'
var xiaohong = new Student()
xiaohong.name = '小红'
console.log(xiaoming.name)
console.log(xiaohong.name) */
