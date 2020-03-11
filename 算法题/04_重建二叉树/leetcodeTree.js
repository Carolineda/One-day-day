/**
 * 已知中序和后序遍历重构二叉树
 * 
 * 中序：[9,3,5,20,7]  left root  right
 * 
 * 后序：[9,15,7,20,3]  left right root
 */

 var buildTree = function (inorder,postorder){
   if(!inorder.length || !postorder.length) return null;
   let rootval = postorder[postorder.length - 1]
   let root = new TreeNode(rootval)   //构造根节点

   let i = inorder.findIndex(e=> e === rootval)   //找到索引 切割左右子树的划分

   root.left = buildTree(inorder.slice(0,i),postorder.slice(0,i))

   root.right = buildTree(inorder.slice(i+1),postorder.slice(i,postorder.length - 1))   //不断的切割左右子树
   return root
 }