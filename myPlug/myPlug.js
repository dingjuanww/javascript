/*
* 错误提示框
* 调用：在onload之后就初始化 myPopPlug.init();
* 赋值：操作之后就赋值 myPopPlug.show('赋值信息');
**/
var myPopPlug={
    mark:'', //错误框最外层
    WIDTH:document.documentElement.clientWidth, //视窗宽
    HEIGHT:document.documentElement.clientHeight, //视窗高
    positionPlug:'', //定位函数
    init : function(){
        this.mark = document.createElement('div');
        var child = document.createElement('div');
        this.mark.id = 'popMark';
        child.className = 'markText';
        this.mark.appendChild(child);
        document.body.appendChild(this.mark);
    },
    show:function(msg){
        this.mark.className='alert_fadeIn';
        this.mark.style.cssText='display:block;';
        document.querySelector('.markText').innerHTML = msg;
        this.positionPlug = function(){
            var left = Number(this.WIDTH/2 - this.mark.clientWidth/2);
            var top =  Number(this.HEIGHT/2 - this.mark.clientHeight/2);
            this.mark.style.left = left+'px';
            this.mark.style.top = top+'px';
        };
        this.positionPlug();  //调用定位函数
        myPopPlug.setAnimation();  //调用显隐函数
    },
    setAnimation:function(){
        setTimeout(function(){
            myPopPlug.mark.className = 'alert_fadeOut';
        },1000);
        setTimeout(function(){
            myPopPlug.mark.style.cssText = 'display:none;';
        },2000);
    }
};

/*
* 带按钮（确定、取消）的消息弹框
* 首先放出来的接口有：具体信息msg、左边按钮的字leftbtn、右边按钮的字rightbtn、回调方法、关闭弹框方法
* */
function MyModalPlug(){
     this.myMark = document.createElement('div'); //遮罩层
     this.myMark.id = 'myMark';
     this.myModal = document.createElement('div'); //modal框
     this.myModal.id = 'myModal';
     document.body.appendChild(this.myMark);
     document.body.appendChild(this.myModal);
     this.myMsg = null;  //msg框
     this.myBtn = null;  //btn框
     this.leftBtn = null; //leftBtn框
     this.rightBtn = null; //rightBtn框
     function init(_this){  //创建modal里面的内容输出框和两个按钮
         _this.myMsg = document.createElement('div');
         _this.myMsg.className = 'myMsg';
         _this.myModal.appendChild(_this.myMsg);
         _this.myBtn = document.createElement('div');
         _this.myBtn.className = 'myBtn';
         _this.leftBtn = document.createElement('div');
         _this.leftBtn.className = 'leftBtn btnStyle js-hasBtn';
         _this.rightBtn = document.createElement('div');
         _this.rightBtn.className = 'rightBtn btnStyle js-hasBtn';
         _this.myBtn.appendChild(_this.leftBtn);
         _this.myBtn.appendChild(_this.rightBtn);
         _this.myModal.appendChild(_this.myBtn);
     };
    this.show = function(msg,leftbtn,rightbtn,fn){   //放出展示的接口
        this.myMark.style.display = 'block';
        this.myMsg.innerHTML = msg;
        this.leftBtn.innerHTML = leftbtn;
        this.rightBtn.innerHTML = rightbtn;
        var btns = this.myBtn.getElementsByClassName('js-hasBtn');
        this.myBtn.onclick = function(e){  //冒泡设置两个btn方法，一个一定是关闭弹框，还有一个是自定义的事件
            var btn = e.target;
            for(var i=0;i<btns.length;i++){
                if(btns[i] == btn){
                    fn(btns[i]);
                }
            }
        };
        this.setPosition();
    };
    init(this);
}
MyModalPlug.prototype.setPosition = function(){
    var left = Number(window.innerWidth/2 - this.myModal.offsetWidth/2);
    var top = Number(window.innerHeight/2 - this.myModal.offsetHeight/2);
    console.log(this.myModal.offsetWidth);
    console.log(this.myModal.offsetHeight);
    console.log(top,left);
    this.myModal.style.cssText = 'display:block;top:'+top+'px;left:'+left+'px;';
};
MyModalPlug.prototype.closeMark = function(){
    this.myMark.style.display = 'none';
    this.myModal.style.display = 'none';
};

