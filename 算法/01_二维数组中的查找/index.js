
// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。
// 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。


function find(targer, array) {
  if (!array)
    return false
  let rows = array.length, cols = array[0].length;
  let row = 0,
    col = cols - 1;   //从左下角开始查找

  while (row <= rows - 1 && col >= 0) {
    if (targer == array[row][col]) {
      return true
    }
    else if (targer > array[row][col]) {
      row++
    }
    else {
      col--
    }
  }
  return false
}



console.log(find(6, [[1, 2, 3],[4,5,6],[7, 8, 9]]))