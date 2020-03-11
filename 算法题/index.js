var invertTree = function (root){
  // 交换左右子树  借助中间变量/ES6数组结构
  function swap(node){
    if(!node) return     //如果没有左右子树跳出循环的一层
  [node.left,node.right] = [node.right,node.left]
  swap(node.left)
  swap(node.right)

  }
  swap(root) 
  return root              //递归
}