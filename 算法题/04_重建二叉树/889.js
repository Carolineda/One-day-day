/**
 * 已知前序 后序构建二叉树
 * 
 * 输入 pre = [1,2,4,5,3,6,7]  root left right
 *      post = [4,5,2,6,7,3,1]  left right root
 * 
 * 前序后序遍历，不像前序中序，根据前序获取到根节点在中序里面去切割左右子树
 *  在前序遍历中遍历是先从根节点开始遍历，则取第二个下标的位置开始，获取该索引在后序遍历中去切割左右子树的划分
 * 
 * 
 * 
 */

 var constructTree = function (pre,post){
   if(!pre.length || !post.length) return null;
   let rootval = pre[0]
   let root = new TreeNode(rootval)  //构建节点树
   if(pre.length < 1)  return null    //确保能够从前序遍历中第二个下标位置开始
   let i = post.findIndex(e => e=== pre[1])
   root.left = constructTree(pre.slice(1,i+2),post.slice(0,i+1))
   root.right = constructTree(pre.slice(i+2),post.slice(i+1,post.length -1))
   return root

 }