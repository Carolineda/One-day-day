  var inStack = []
  var outStack = []

function push(node)
{
    inStack.push(node)
}
function pop()
{
    // write code here
    if(!outStack.length){
      while(inStack.length){
        outStack.push(inStack.pop())
      }
    }
    return outStack.pop()
}