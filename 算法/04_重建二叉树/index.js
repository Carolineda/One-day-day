// /* function TreeNode(x) {
//     this.val = x;
//     this.left = null;
//     this.right = null;
// } */




function reConstructBinaryTree(pre, vin) {
    // write code here
    var head = new TreeNode(pre[0]),
        headIndex = vin.indexOf(pre[0]),
        leftVin = vin.slice(0, headIndex),
        rightVin = vin.slice(headIndex + 1),
        leftPre = pre.slice(1, 1 + leftVin.length),
        rightPre = pre.slice(1 + leftVin.length);
    if(leftPre.length != 0){
        head.left = reConstructBinaryTree(leftPre, leftVin);
    }
    if(rightPre.length !=0 ){
        head.right = reConstructBinaryTree(rightPre, rightVin);
    }
    return head;
}
