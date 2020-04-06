// // // this
// // var name = "dahuang"

// // var o = {
// //   name: "cherr",
// //   func1: function () {
// //     console.log(this.name)
// //   },
// //   func2: function () {
// //     setTimeout(() => {
// //       this.func1()
// //     }, 1000)
// //   }
// // }

// // o.func2()



// //call方法
// // function add(n,m){
// //   console.log(n+m)
// // }
// // add.call(this, 1, 2) // 3

// var a = 123
// var obj = {
//   a:45
// }
// function fun(){
//   // console.log(this)
//   console.log('输出',this.a)
// }
// fun.call()
// fun.call(obj)

// function add(n,m){
//   console.log(n+m)
// }
// add.call(this,1,4)

// var a = [1,2,3,4,67]
// Math.max.call(null,a)
