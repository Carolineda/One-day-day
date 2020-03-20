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