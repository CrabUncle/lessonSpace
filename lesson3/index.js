// 定义购物车类
function Cart() {
  var total = 0 // 总价格
  var flag = false // 购物车的显示与隐藏开关，true显示
  var cartDom = document.querySelector('.cart') // 购物车的dom
  var showTotal = document.querySelector('.showTotal') // 总价格的dom
  // 已经选择的商品集合
  var items = []
  // 遍历购物车的商品集合，渲染出dom
  var refreshCartDom = function(items) {
    var template = '<li class="clazz"><span>name</span><span>price</span><i>-</i><span>amount</span><i>+</i></li>'
    var str = ''
    if (items.length > 0) {
      items.forEach(e => {
        str += template
          .replace('name', e.name)
          .replace('price', e.price)
          .replace('amount', e.amount)
          .replace('clazz', 'item-' + e.id)
      })
    } else {
      str = '<p>购物车为空哦！</p>'
    }
    var myCart = document.querySelector('.cart-items')
    myCart.innerHTML = str
    items.forEach(e => {
      var i1 = document.querySelectorAll('.item-' + e.id + ' i')[0]
      i1.addEventListener('click', ev => {
        removeFromCart(e.id)
      })
      var i2 = document.querySelectorAll('.item-' + e.id + ' i')[1]
      i2.addEventListener('click', ev => {
        addToCart(e)
      })
    })
  } // end of refreshCartDom()

  // 添加清空购物车功能到Dom上
  var clearDom = document.querySelectorAll('.cart .titles span')[1]
  clearDom.addEventListener('click', e => {
    clearCart()
  })

  // 相关属性的getter、setter
  Object.defineProperties(this, {
    total: {
      set: v => {
        total = v
        showTotal.innerText = total
        refreshCartDom(this.items)
      },
      get: () => {
        return total
      }
    },
    flag: {
      set: v => {
        flag = v
        if (flag) {
          cartDom.style.height = '400px'
        } else {
          cartDom.style.height = '0px'
        }
      },
      get: () => {
        return flag
      }
    },
    items: {
      enumerable: true,
      writable: true,
      value: []
    }
  })
}

// 全部商品集合
var allItems = [
  {
    id: 1,
    name: '地摊炒面',
    price: 10
  },
  {
    id: 2,
    name: '俄罗斯鱼子酱',
    price: 20
  },
  {
    id: 3,
    name: '美国烤肉味薯片',
    price: 12
  },
  {
    id: 4,
    name: '贵妃下午茶',
    price: 100
  },
  {
    id: 5,
    name: '山东醋蒜',
    price: 1
  }
]

// 初始化一个购物车对象
var cart = new Cart()

// 商品右侧的“+”按钮
var btn1 = document.querySelector('.btn1')
var btn2 = document.querySelector('.btn2')
var btn3 = document.querySelector('.btn3')
var btn4 = document.querySelector('.btn4')
var btn5 = document.querySelector('.btn5')

// 给商品有侧的加号按钮添加事件
btn1.addEventListener('click', e => {
  addToCart(allItems[0])
})
btn2.addEventListener('click', e => {
  addToCart(allItems[1])
})
btn3.addEventListener('click', e => {
  addToCart(allItems[2])
})
btn4.addEventListener('click', e => {
  addToCart(allItems[3])
})
btn5.addEventListener('click', e => {
  addToCart(allItems[4])
})

// 添加到购物车
function addToCart(item) {
  var hasFlag = false
  if (cart.items.length > 0) {
    cart.items.forEach(e => {
      if (e.id == item.id) {
        e.amount += 1
        hasFlag = true
      }
    })
  }
  if (!hasFlag) {
    item.amount = 1
    cart.items.push(item)
  }
  cart.total += item.price
}

// 从购物车删除商品
function removeFromCart(id) {
  var index = null
  var price = null
  cart.items.forEach((e, i) => {
    if (e.id == id) {
      price = e.price
      if (e.amount > 1) {
        e.amount -= 1
      } else {
        index = i
      }
    }
  })
  if (index || index == 0) {
    cart.items.splice(index, 1)
  }
  cart.total -= price
}

// 清空购物车
function clearCart() {
  cart.items = []
  cart.total = 0
}

// 展示与隐藏购物车
var showCartDom = document.querySelector('.total')
showCartDom.addEventListener('click', e => {
  cart.flag = !cart.flag
})
