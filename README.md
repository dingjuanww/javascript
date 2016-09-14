# 
 用原生javascript实现jquery的一些方法：
 
 新增了slideUp、slideDown。(slideUp-slideDown)
 
 新增了fadeIn、fadeOut。（fade）
 
 新增了点击左边右边按钮，向左边右边切换内容的demo。因为还没有实现jq的animate方法，所以直接去cdn下载的jq，切换时候的动画用的是animate。后面会把用原生js实现animate方法的demo放上来。同时新增了jq与js比较创建元素绑定事件的不同。（left-right）
 
 新增了用原生js实现jq的animate方法。（animate）

 新增了点击ul通过冒泡事件来实现li被点击，以及通过闭包来实现当前li被点击（用闭包是因为当li里面有多个标签的时候）。
 
 新增了点击图片放大切换的功能，这里不是以插件的形式做的，所以没有接口提供，这里只是为了解决图片放大切换的问题，后期有空会封装成插件。
 
 新增了适用于PC端的分页，结合bootstrap的样式来做，没有封装，有空会封装成一个方法。
