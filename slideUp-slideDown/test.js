window.onload = function() {
    // 获取btn和panel
    var btn   = document.getElementById("btn"),
        panel = document.getElementById("panel");

    // 为btn绑定onclick事件
    btn.onclick = function() {
        // 通过panel的offsetHeight来判断元素是否可见
        if (panel.offsetHeight == 0) {
            // 不可见，调用Slider.slideDown函数：在300毫秒内下拉
            Slider.slideDown(panel, 300);
        } else {
            // 可见，调用Slider.slideUp函数：在300毫秒内上滑
            Slider.slideUp(panel, 300);
        }
    };
};