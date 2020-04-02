let Obj = function(name){
  this.name = name
}

let a = new Obj("炸鸡")
console.log(a)

Obj.prototype = {
  process:function(thing){
    console.log(`${this.name}吃${thing}`)
  }
}

