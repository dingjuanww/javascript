/*
 *手机端通用提示框，常用于错误提示
 * alert = new myMaskMsg();初始化，只用初始化一次就好了
 *  alert.show('我是错误1信息。。。');赋值
 * */
function myMaskMsg(){
   this.modalMsg = document.createElement('div');
   this.modalMsg.id = 'alert_msg';
   this.divTxt = document.createElement('div');
   this.divTxt.className = 'text';
   this.modalMsg.appendChild(this.divTxt);
   document.body.appendChild(this.modalMsg);
};
myMaskMsg.prototype.show = function(msg){
   this.divTxt.innerHTML = msg;
   this.modalMsg.className = 'alert_fadeIn';
   this.modalMsg.style.cssText = 'display:block;';
   setAnimation(this);
};
function setAnimation($this){
   setTimeout(function(){
        $this.modalMsg.className = 'alert_fadeOut';
   },1000);
   setTimeout(function(){
        $this.modalMsg.style.cssText = 'display:none;';
   },2000);
}

/*
* 禁止浏览器页面内容滑动
* */
var stopTouchmove =  function (e) {e.preventDefault();} //禁止浏览器滑动
function addStopTouchmove(){
    document.querySelector('.allDiv').addEventListener('touchmove',stopTouchmove);
}
function removeStopTouchmove(){
    document.querySelector('.allDiv').addEventListener('touchmove',stopTouchmove);
}

/*
* 数组去重---自定义一个数组Array原型对象方法unique()
* 注意调用这个方法的时候，一定要是数组来调用：arry.unique()
* */
Array.prototype.unique = function(){
    var res = [];  //临时数组
    var json = {}; //json为hash表
    for(var i = 0; i < this.length; i++){
        if(!json[this[i]]){
            res.push(this[i]); //把当前数组的当前项push到临时数组里面
            json[this[i]] = 1; //存入hash表
        }
    }
    return res;
};

/*
 * 去掉数组中的所有空格
 * splice(ele1,ele2)：第一个参数表示要删除的位置从0开始，第二个参数表示，删除多少个
 * */
function filterWhiteNode(arr){
    for(var i =0;i<arr.length;i++){
        if(arr[i] =='' || typeof(arr[i]) == 'undefined') {
            arr.splice(i, 1);
            i = i - 1;
        }
    }
    return arr;
}

/*
 * 去掉字符串中所有空格
 * replace中的第一个参数是 RegExp 对象，那么replace第二个参数就是要替换过去的元素。
 * 例如：replace(/\s/g,"0")，意思是只要找到一个空格，就用0来替换空格。
 * */
function trimAll(str,is_global){
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g,"");
    if(is_global.toLowerCase()=="g"){
        result = result.replace(/\s/g,"");
    }
    return result;
}

/*
 * 去掉字符串中前后的空格，等同于jq中的$.trim()功能
 * 注意，jq中的$.trim()也只是去掉字符串收尾的空格，而对中间的空格是没有去除的
 * */
function trimPart(str){
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g,"");
    return result;
}

/*
 * 时间转码：将中国时间转化为标准时间
 * /*$watch监听输入框中的时间变化*/
 //$scope.dt 是ng-model="dt",监听
//$scope.$watch("dt",function(){
//    console.log(formatTime($scope.dt,"yyyy-MM-dd"));
//});

function formatTime(time, format){
    var t = new Date(time);
    var tf = function(i){return (i < 10 ? '0' : "") + i};
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
        switch(a){
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
}



