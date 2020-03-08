## 题目描述
  输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。


## 
<strong>关于二叉树 </srtong>
      1
  2      3        根节点<   左节点< 右节点  
4   5  6   7    

树节点属性  Node
   data：节点值
   parent ：指向节点的父节点
   left：指向节点的左节点
   right：指向节点的右节点

function Node (data,left,right){
  this.data = data;
  this.left = left;
  this.right = right
}

  前序遍历 ： 根节点  -> 左子树  -> 右子树
  中序遍历：  左子树  -> 根节点  ->  右子树
  后序遍历 ： 左子树  -> 右子树  ->  根节点

              A

        B            C
    D       E    F      G
H      I  J    
前序：ABDHIEJCFG
中序：HDIBJEAFCG
后序：HIDJEBFGCA