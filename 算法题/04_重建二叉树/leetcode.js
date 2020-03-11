/**
 * 力扣 从前序遍历和中序遍历构建二叉树
 * function TreeNode(val) {
 *    this.val = val
 *    this.left = this.right = null     //定义树
 *  }
 */

 var buildTree = function(preorder,inorder){
   if(!preorder.length || !inorder.length) return null;   //递归的终止条件
    let rootval = preorder[0]
    let root = new TreeNode(rootval)
    let i = inorder.findIndex(e => e===rootval)    //根节点在中序遍历的位置
    root.left = buildTree(preorder.slice(1,i+1),inorder.slice(0,i))
    root.right = buildTree(preorder.slice(i+1),inorder.slice(i+1))
 }

 