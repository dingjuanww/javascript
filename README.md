# 
 用原生javascript实现jquery的一些方法：
 
 新增了slideUp、slideDown。(slideUp-slideDown)
 
 新增了fadeIn、fadeOut。（fade）
 
 新增了点击左边右边按钮，向左边右边切换内容的demo。因为还没有实现jq的animate方法，所以直接去cdn下载的jq，切换时候的动画用的是animate。后面会把用原生js实现animate方法的demo放上来。同时新增了jq与js比较创建元素绑定事件的不同。（left-right）
 
 新增了用原生js实现jq的animate方法。（animate）

 新增了点击ul通过冒泡事件来实现li被点击，以及通过闭包来实现当前li被点击（用闭包是因为当li里面有多个标签的时候）。
 
 新增了点击图片放大切换的功能，这里不是以插件的形式做的，所以没有接口提供，这里只是为了解决图片放大切换的问题，后期有空会封装成插件。
 
 新增了适用于PC端的分页，为了快速布局，用了jquery结合bootstrap的样式来做，没有封装，有空会封装成一个方法。
 
 新增了common文件夹：浏览器嗅探器browser.js、公共方法common.js
 
 新增了modal-popover文件夹：用原始的bootstrap插件来完成modal和popover框，不依赖其他改写方式。
 
 新增了start文件夹：加星减星，星级评分。
 
 新增了基于jquery的插件jquery.json.js：这个插件实现了JSON对象与JSON字符串之间的转换。尽管可以用js自带的objstr=JSON.stringify(obj)/JSON.parse()、eval()转换，但是用这个插件将更智能的获取JSON字符串的值：$.evalJSON(objstr).name，同时用了这个插件，JSON对象转JSON字符串就很简单了objstr=$.toJSON(obj)。
 
 新增了myPlug文件夹：错误提示框和带按钮的消息弹框。
 
 
 
