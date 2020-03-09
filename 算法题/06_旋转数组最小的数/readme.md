## 
 使用二分法查找，  区分两个区间，一个是递增的区间(left)，一个是递减的区间(right)

  mid = parseInt(left + (right -left) / 2)  不用转换成整型数据结果会有错误

 当mid 》 right 此时说明是递减，9 7 5  最小值在右边  left = mid+1 继续查找
 
