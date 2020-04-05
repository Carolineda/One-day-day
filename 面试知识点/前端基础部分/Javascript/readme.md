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
  7. Function



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






## This的使用
