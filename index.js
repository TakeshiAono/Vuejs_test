// var app = new Vue({
//   el: '#app',
//   data: {
//     message: 'Hello Vue!a'
//   }
// })

// var app2 = new Vue({
//   el: '#app-2',
//   data: {
//     message: 'some new message' + new Date().toLocaleString()
//   }
// })

// var app3 = new Vue({
//   el: '#app-3',
//   data: {
//     seen: true
//   }
// })

// var app4 = new Vue({
//   el: '#app-4',
//   data: {
//     todos: [
//       { text: 'Learn JavaScrip'},
//       { text: 'Learn Vue' },
//       { text: 'Build something awesome' }
//     ]
//   }
// })

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

// var app6 = new Vue({
//   el: '#app-6',
//   data: {
//     message: 'Hello Vue!'
//   }
// })

//   // todo-item と呼ばれる新しいコンポーネントを定義
//   Vue.component('todo-item', {
//     // todo-item コンポーネントはカスタム属性のような "プロパティ" で受け取ります。
//     // このプロパティは todo と呼ばれます。
//     props: ['todo'],
//     template: '<li>{{ todo.text }}</li>'
//   })

//   Vue.component('todo-item', {
//     props: ['todo'],
//     template: '<li>{{ todo.text }}</li>'
//   })
  
//   var app7 = new Vue({
//     el: '#app-7',
//     data: {
//       groceryList: [
//         { id: 0, text: 'Vegetables' },
//         { id: 1, text: 'Cheese' },
//         { id: 2, text: 'Whatever else humans are supposed to eat' }
//       ]
//     }
//   })

//   // データオブジェクト
// var data = { a: 1 }

// // Vue インスタンスにオブジェクトを追加する
// var vm = new Vue({
//   data: data
// })

// // インスタンスのプロパティを取得すると、
// // 元のデータからそのプロパティが返されます
// vm.a == data.a // => true

// // プロパティへの代入は、元のデータにも反映されます
// vm.a = 2
// data.a // => 2

// // ... そして、その逆もまたしかりです
// data.a = 3
// vm.a // => 3

// vm.b = 'hi'

// var obj = {
//   foo: 'bar'
// }

// Object.freeze(obj)

// new Vue({
//   el: '#app',
//   data: obj
// })

// var data = { a: 1 }
// var vm = new Vue({
//   el: '#example',
//   data: data
// })

// vm.$data === data // => true
// vm.$el === document.getElementById('example') // => true

// // $watch はインスタンスメソッドです
// vm.$watch('a', function (newValue, oldValue) {
//    // このコールバックは `vm.a` の値が変わる時に呼ばれます
// })

// new Vue({
//   data: {
//     a: 1
//   },
//   created: function () {
//     // `this` は vm インスタンスを指します
//     console.log('a is: ' + this.a)
//   }
// })
// // => "a is: 1"

// var data = { a: 1 }
// var vm = new Vue({
//   el: '#example',
//   data: data
// })

// vm.$data === data // => true
// vm.$el === document.getElementById('example') // => true

// // $watch はインスタンスメソッドです
// vm.$watch('a', function (newValue, oldValue) {
//    // このコールバックは `vm.a` の値が変わる時に呼ばれます
// })

// var aono = new Vue({
//   id
// })

// var vm = new Vue({
//   el: '#example',
//   data: {
//     message: 'Hello'
//   },
//   // computed: {
//   //   reversedMessage: function () {
//   //     return Date.now()
//   //   }
//   // }
//   methods: {
//     reversedMessage: function () {
//       Date.now()
//     }
//   }
// })

// var example1 = new Vue({
//   el: '#example-1',
//   data: {
//     items: [
//       { message: 'Foo' },
//       { message: 'Bar' }
//     ]
//   }
// })


// var example2 = new Vue({
//   el: '#example-2',
//   data: {
//     parentMessage: 'Parent',
//     items: [
//       { message: 'Foo' },
//       { message: 'Bar' }
//     ]
//   }
// })

// // new Vue({
//   el: '#v-for-object',
//   data: {
//     object: {
//       title: 'How to do lists in Vue',
//       author: 'Jane Doe',
//       publishedAt: '2016-04-10'
//     }
//   }
// })


// new Vue({
//   el: '#v-for-object',
//   data: {
//     object: {
//       value: '2016-04-10aa',
//       name: 'How to do lists in Vueaaaaaaaaa'
//     }
// //   }
// // })

// var example1 = new Vue({
//   el: '#example-1',
//   data: {
//     counter: 0
//   }
// })

// var example2 = new Vue({
//   el: '#example-2',
//   data: {
//     name: 'Vue.js'
//   },
//   // `methods` オブジェクトの下にメソッドを定義する
//   methods: {
//     greet: function (event) {
//       // メソッド内の `this` は、 Vue インスタンスを参照します
//       alert('Hello ' + this.name + '!')
//       // `event` は、ネイティブ DOM イベントです
//       if (event) {
//         alert(event.target.tagName)
//       }
//     }
//   }
// })

// JavaScript からメソッドを呼び出すこともできます
// example2.greet() // => 'Hello Vue.js!'

new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})