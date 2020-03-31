## css中的盒模型  
    文章：https://www.cnblogs.com/chengzp/p/cssbox.html
  CSS包括两种和模型
  1.IE 盒模型
      border + padding + Contentwidth +margin
  2.W3C标准盒模型
    contnetWidth

  box-sizing默认属性就是content-box，即标准盒子模式，
  IE盒子模型呢，是属性border-box。
## CSS优先级
  ！important  > 行内样式 > ID选择器 > 类选择器 = 属性选择器 = 伪类选择器： > 标签选择器=伪元素选择器::


## 样式引用
link 属于html标签 @import是css提供得
  页面加载时会同时加载link，@import是引用得css等页面加载完成后加载

## animation与transition区别





## Flex 浮动布局
传统网页布局基于盒模型，依赖display + position +float  在特殊布局不易实现，出现Flex布局响应页面布局

## Flex布局
 任何容器可指定成Flex布局，行内元素display:inline-block 设置为Flex布局后，子元素的float、clear\vertical-align失效。


`在容器中的属性(box)`
  1. flex-direction : 方向
        row（默认值）：主轴为水平方向，从左向右。
        row-reverse：主轴为水平方向，起点在右端。
        column：主轴为垂直方向，起点在上沿。
        column-reverse：主轴为垂直方向，起点在下沿。

  2. flex-wrap ：默认在轴线上 换行问题
        nowrap（默认）：不换行。
        wrap: 换行 第一行在上方
        wrap-reverse: 换行 第一行在下方

  3. justify-content 定义项目在主轴方向的对齐方式
        flex-start(默认) ： 左对齐
        flex-end        :右对齐
        center          居中
        space-between    两端对齐，中间项目的间隔都相等
        spact-around     项目两侧间隔相等

  4. align-items   属性定义项目在交叉轴上如何对齐
        flex-start：交叉轴的起点对齐。
        flex-end：交叉轴的终点对齐。
        center：交叉轴的中点对齐。
        baseline: 项目的第一行文字的基线对齐。
          stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

  5. align-content属性定义了多根轴线的对齐方式。属性针对是多根轴线 （和点4相似，在垂直方向上）
        flex-start：与交叉轴的起点对齐。                                        
        flex-end：与交叉轴的终点对齐。
        center：与交叉轴的中点对齐。
        space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
        space-around：每根轴线两侧的间隔都相等。
        stretch（默认值）：轴线占满整个交叉轴。

  `在项目上  在子元素中`
     
      1. flex  设置flex属性  子容器是有弹性的



## 关于页面布局水平居中（使用较多）

   `水平居中`
      1. 行内元素  父级text-align:center
      2. 块级元素  在那层盒子margin: 0  auto
      3. 设置浮动   子元素浮动float:left    在父级盒子宽度设置width:fit-content;margin:0 auto
      4. 浮动布局   子元素上 display:flex  justify-content: center
      5. 绝对定位   子元素上  position:absolute;
                              width:固定;
                              left:50%;
                              margin-left:-0.5宽度;

   `垂直居中`
      1. 单行文本     line-height
      2. vertical-align : 而vertical-align只有在父层为 td 或者 th 时, 才会生效 
                        父级设置 display:table
                        子元素：display:table-cell;vertical-align:middle;
      3. flex布局      父元素：display:flex,align-item:center

   `垂直水平居中`
      已知高度得水平居中
        1. 绝对定位+负边距
        利用绝对定位，将元素的top和left属性都设为50%，再利用margin边距，将元素回拉它本身高宽的一半，实现垂直居中
             width:100px;
            height:100px;
            position:absolute;
            top:50%;
            left:50%;
            margin:-50px 0 0 -50px;

      不定宽高水平居中
        1.利用table-cell父级元素
          display:table-cell;
          text-align:center;
          vertical-align:middle;
          
        2.  display:flex;
            justify-content:center;
            align-items: center;


## 🏆隐藏或者透明元素的方法：
1. opacity: 0;   透明度为 0，整体都看不见了，还是占据位置；
2. visibility: hidden; 这个和上边类似但是不会触发当前元素绑定得事件；
3. display: none; 消失，不占用位置；相当于删除该元素
4. background-color: rgba(0, 0, 0, 0.2); 只是背景色透明。




## 三栏布局 左右固定中间自适应
  1. 用flex布局
    .container{
    display: flex;
}
.left，.right{
    flex-basis:200px;
    background: green;
}
.main{
    flex: 1;
    background: red;
}

## 左边定宽 右边自适应
  1. left:{
      float:left
  }
  right{
    width: 100%
  }
  2. 父级容器设置 display:flex   右边盒子.right{
                                              flex:1
                                                      }
  3. 父级容器
      .parent{
        float:left
        width:100%
      }
      .left{
        float:left
        margin-left:100%
      }
      .right{
        margin-left:200px
      }

  ## css画一个三角形
  width:0
  height:0
  border-width: 100px;
  border-style: solid;
  border-color: transparent #0099CC transparent transparent;




  ## CSS性能优化



  ## BFC块级上下文
