// 求斐波那契数列的前20个数

/**
 * 斐波那契数列描述： 1、1、2、3、5、8、13、21、34
 * 
 *  是指该数列的第三项开始  每一项都等于前两项之和
 *  
 * 
 */

const fibonacci = []; // {1}
fibonacci[1] = 1; // {2}
fibonacci[2] = 1; // {3}

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]; // {4}
}

for (let i = 1; i < fibonacci.length; i++) { // {5}
  console.log(fibonacci[i]); // {6}
}