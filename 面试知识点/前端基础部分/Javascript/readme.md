## Javascript中的基础类型
  1. Undefine: 
      表示此处未定义 当访问未初始化的变量、不存在的对象属性、不存在的数组元素等，转为数值是NaN
  2. Null:  
      表示为空的对象，null 是表示缺少的标识，指示变量未指向任何对象。把 null 作为尚未创建的对象,转为数值为0
  3. Boolean: 
  4. Number:  
      在Javascript中，数字以浮点64位存储。来表示整数和浮点的值 0.1+0.2!0.3  Number默认是十进制表示，然而在计算的时候，会将数先转换成二进制进行计算再转换成十进制
      `数值范围`
          64位浮点数部分的长度是11个进制，最大指数2047（2的11次方-1），超出这个值，发生正向溢出，则会返回Infinity,反之返回0
          Infinity: 表示正的数值太大或者负的数值太小无法表示则返回Infinity  0除以0
          NaN: 用来表示一个本来要返回数值的操作但是没有返回数值
          isNaN:这个函数判断一个参数是否是数值，若参数不是数值时，尝试转换为数值，无法转换时则会返回false

      `数值方法`
          parseInt() 将字符串转为整数
          parseFloat() 将字符串转为浮点数
  5. String类型：字符串是不可变得
      `转义符`： 
    
  6. Object类型：对象是Javascript得基础
        `对象属性的读取`：
          对象所有属性的查看： Object.keys(obj )
          判断属性是否存在： in运算符 例如："key" in obj
          属性的遍历： for ..  in循环，用来遍历对象的全部属性
  7. Symbol·

## 基础类型和引用类型
  `内存空间`：分为栈内存和堆内存
      栈内存：  
        存储的值大小固定
        空间较小
        可以直接操作保存的变量
    Javascript中的原始类型的值被直接存储在栈中，在定义变量时，栈就为其分配好空间

      堆内存
        存储的值大小不一定，可动态调整
        无法直接操作内部存储，使用引用地址读取
  1. 基础类型是保存在栈内存中的数据，保存在栈空间。因为栈空间中的大小是固定的，所以存储在栈中的变量是不可变的

  2. 引用类型是通过使用引用地址读取，通过保存在栈内存中的引用地址，去堆内存找对应的值。引用类型有：Array\Object\Date\Function.
  当使用引用类型查询时，我们需要从栈中读取内存地址，找到保存在在堆内存中的值

  例如：  
    let a1 = 0; // 栈内存
    let a2 = "this is string" // 栈内存
    let a3 = null; // 栈内存
    let b = { x: 10 }; // 变量b存在于栈中，{ x: 10 }作为对象存在于堆中
    let c = [1, 2, 3]; // 变量c存在于栈中，[1, 2, 3]作为对象存在于堆中
        栈内存                                堆内存
    变量名    具体值
    b         此对象的访问地址   ---->(引用)  {x:10}    

  `值传递和引用传递`
    值传递是指没有改变
    引用传递是通过函数等改变函数内的变量
    例如：  
        let name = 'ConardLi';
          function changeValue(name){
            name = 'code秘密花园';
          }
          changeValue(name);
          console.log(name);  // 'ConardLi' 值传递

  ECMAScript中所有的函数的参数都是按值传递的。




## typeOf instanceOf  Object.prototype.toString() 数据类型的判别
  1. typeOf 返回的是字符串，typeOf可以判别 Stirng,Number,Function,Boolean,Undefined,Object基础的数据类型

  2. instanceOf 返回的结果是true false. 用来判别复杂的数据类型。可以判断Array,但是在复杂类型中，instanceOf又不能判断null
    例如： var arr = [1,2,3]
           arr instanceOf Array    结果：true

    其实现原理：是通过原型链的查找返回的结果

       function instance_of(L,R) {    //在此l：fn  R是类型  判断fn是否是R类型
          let O = R.prototype
          L=L.__proto__
          while(true){
            if(L === null) {  //已经找到顶 下一层Object(万物返回对象)
            return false
            }
            if(O === L){
              return true
              L= L.__proto__
            }
         
          }
        }



  3. 所以想精确的判别数据类型，应该用Object.prototype.toString.call()
      其返回的结果形式如： [object,class],class则是我们判断想要获取到的类型
        例如： Object.prototype.toString.call(2)   返回结果：[Object,Number]

    其实现原理：


  ## 原型和原型链
  `原型`： 1.每一个实例对象都有隐式原型_proto_属性，万物皆对象。
           2.每一个函数都有peototype属性，原型对象上拥有的属性和方法可以被实例对象共享。

  `原型链`:  当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去它的__proto__隐式原型上查找，即它的构造函数的prototype，如果还没有找到就会再在构造函数的prototype的__proto__中查找，这样一层一层向上查找就会形成一个链式结构，最终找到的最上层为Object,此过程我们称为原型链。

  显示原型：prototype  隐式原型:__proto__

  其之间符合的公式：
    Object._proto_  === Function.prototype
    Functoin.prototype._proto_ === Object.prototype
    Object.prototype._proto_ === null

    例如：
    var arr = [1,2,4]
    arr._proto_ = Array.prototype。
    
## __proto__ 和 prototype
  1.只有function才有原型链 prototype
  2.万物皆有__proto__

(方法)function.__proto__.__.proto__ =(对象) object.__proto__ :
 let a = {}  let b = function(){}
 a.__proto__   =  b.__proto__.__.proto__

  a: a.protype
    undefined
    a.__proto__
    {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

  b: b.__proto__
    ƒ () { [native code] }
    b.__proto__.__proto__
    {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}




## Javascript中的闭包
在JS中，变量的作用域属于函数作用域，在函数执行后作用域就会被清理、内存也随之被收回。在闭包产生中，可以访问上一级作用域，即使上一级函数执行完后，作用域不会销毁
  闭包： 有权访问另外一个函数中变量作用域的函数
  是指有权限访问另一个函数作用域中的变量的函数 
  可以访问定义方法函数在的词法作用域
  垃圾回收机制
作用：   1.阻止函数词法作用域被垃圾回收机制回收
        2.私有化变量 
        3.能够访问函数定义时所在的词法作用域(阻止其被回收)  ->导致浏览器卡顿
        4.模拟块级作用域: 
- 使用修改作用域可以实现闭包的方法

    function waitSomeTime(msg, time) {
      setTimeout(function () {
        console.log(msg)
      }, time);
    }
  waitSomeTime('hello', 1000);


  闭包就是将函数内部和函数外部连接，闭包可以缓存上级作用域，打破函数作用域的舒服，可以访问函数内部的变量。闭包的作用：
      可以读取函数内部的变量
      让变量的值始终保存在内存中

`应用场景`
  1.Ajax请求成功的回调，一个setTimeout的延时回调


## 垃圾回收机制
  在Javascript中，不再使用变量，意味着变量生命周期的结束，如果一个对象不再引用，此对象就会被垃圾回收机制回收。
    垃圾回收的实现方式：
    1.` 标记清楚`
        在函数中声明的变量，当变量进入执行环境时标记为“进入环境”，变量离开执行环境是标记为"离开环境"，在进入环境阶段不能被回收，在离开环境变量是可以回收的。
          例如： function fun(){
            const a = 1
            const b = 2   //此时a,b被标记"进入环境"
          }
          fun()  //函数执行结束，a,b标记为离开环境，变量回收

            垃圾回收机制在运行的时候会给存储在内存中的变量都加上标记方式，在标记'离开环境'的变量标记时，无法访问到变量，垃圾回收机制周期运行时，将释放此变量的内存，回收他们所占用的空间

  2. `引用计数`
    是指统计引用类型变量声明后被引用的次数，当引用值为0时，此变量回收

      `内存泄漏`
        不再需要的内存，由于某种原因，无法被释放所占的内存
          1.全局变量，不会被回收
          2.闭包的使用，不会被回收
          3.没有销毁的定时器和回调函数  手动删除定时器
          4.Dom


## This的使用

  This永远指向最后调用它的对象
  `This的作用域`
    1.指向全局时：window  在使用严格模式时为undefined
    2.指向对象：指的是调用的对象，当前上下文的对象
    3.在构造函数中，指向的是实例对象

改变This指向问题
  1. 使用箭头函数
    箭头函数中的this始终指向函数内的this,如果箭头函数被非箭头函数包围，this绑定的是最近一层非箭头函数的this 
                 
            var name = "dahuang"
            var o = {
              name: "cherr",
              func1: function () {
                console.log(this.name)
              },
              func2: function () {
                setTimeout(() => {
                  this.func1()
                }, 1000)
              }
            }
            o.func2()   //输出cheer

  2. 在函数内部给this赋值在另外一个变量上  let _this = this

  3. 使用call apply bind方法改变this
    `Call`
      接受多个参数：func.call(thisValue, arg1, arg2, ...) 第一个参数是this要指向的那个对象，后面的参数是函数调用时所需要的参数。如果传入的参数为空、null、undefined，则默认传入全局对象
        例如：  function add(a, b) {
          return a + b;
        }
        add.call(this, 1, 2) // 3

    `Apply`
      改变作用域与call相似，不同之处，apply接受的参数是数组作为函数执行时的参数。
        func.apply(thisValue,[arg1,arg2....])
        例如：
          function f (x,y){
            console.log(x+y)
          }
          f.call(null,1,1)
          f.apply(null,[1,1]) 输出2
        `apply应用场景`
        1. 用apply求出数组最大元素
          var a = [1,2,3,4,67]
          Math.max.call(null,a)
        2. 将数组为空的元素返回undefined
          通过apply方法，利用Array构造函数将数组空的元素变成undefined
            例如：  
              Array.apply(null,['a','','b'])   //输出['a','undefined','b']
            在数组遍历中forEach()会跳过空元素，但是不会跳过undefined

    `Bind`
  bind()方法用于将函数体内的this绑定到某个对象，然后返回一个新函数。


## 类的继承
  




## Js中的执行机制
  Javascript是单线程的，它的主要用途是与用户互动以及操作DOM。
  `任务队列`
    任务执行栈，判断同步、异步
    1. 同步任务进入主线程，异步任务进入Event Table(事件表)，当事件表中的异步完成后在Event Queue(事件队列中注册回调函数)
    2. 主线程任务完成后，才会完成事件队列中的任务
    3. Js解析器不断重复检查主线程的执行栈再重复，此过程是事件循环(Event Loop)
  "任务队列"中的事件，除了IO设备的事件以外，还包括一些用户产生的事件（比如鼠标点击、页面滚动等等）。只要指定过回调函数，这些事件发生时就会进入"任务队列"，等待主线程读取。
  
  所谓"回调函数"（callback），就是那些会被主线程挂起来的代码。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。
  `在任务中又分为微任务和宏任务`
      宏任务（macrotask ）
     setTimeout
     setInterval
     requestAnimationFrame
     Html解析
     Js的主线程
     页面加载
     用户交互



  微任务（microtask
    promise
    process.nextTick
    setImmediate
    mutation.oberver  (node的异步)
  - Script(主程序代码) ---> process.nextTick ----> promise ---->setTimeout ----> setInterval --->setImmediate --->I/O ---->UI reading

  在执行微任务和宏任务时，会先完成微任务的执行再去执行宏任务。

## 异步回调
  `Javascript中异步和同步`
    Javascript是单线程语言，一个时间里处理一件事情，多个事件处理时会导致主线程阻塞，使得页面处于长时间无响应状态，因此引入异步解决线程阻塞问题。
  在传统的ajax请求中，当异步请求之间的数据存在依赖关系的时候，就可能产生很难看的多层回调，俗称'回调地狱'（callback hell）

  解决回调地狱问题：
    1. Promise Promise对象表示将来要发生的事情，但在new Promise时，作为Promise参数传入的函数会立即执行，执行的这部分代码可以是异步。
  




  ## 阻止事件冒泡










  ## 对象中的方法
  `Object.defineProperty()`
    此方法可以在一个对象上直接定义一个新的属性，或者修改已经存在的属性，最后这个对象。通过配置属性描述符，可以精准的控制属性的行为。
    Object.defineProperty(obj,pre,desc)接受三个参数
      obj:要在其上定义属性的对象
      prop:要定义或修改的属性
      desc:将被定义或者修改的属性描述符

    属性描述符：属性描述符可分为数据描述符和访问器描述符，在属性描述符中，无论时数据描述符还是访问描述符须包含configurable和enumerable键值
      configurable： 表示对象的属性是否可以删除，以及除writable和value之外的特性是否可以进行修改
      enumerable： 定义对象的属性是否可以在for..in 循环中和Object.keys()被枚举
      数据描述符：
        value: 该属性对应的值，可以是所有Javascript的值
        writable：当writable属性为true时，value才能进行赋值运算
      访问器描述符：  
          get: 给属性提供getter的方法，如果没有getter则是undefined
          set: 给属性提供setter方法，如果没有setter时为undefined。当属性值修改时触发此方法
