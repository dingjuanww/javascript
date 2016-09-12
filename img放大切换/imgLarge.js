/*
* 图片放大、左右切换
* 思路：1、将所有图片的路径保存到一个数组中；
* 2、每次点击小图的时候记录好当前图的index下标；
* 3、点击左边就是将现有图片的下标index-1，去数组中拿到这个路径，丢到展示的div中。
* */
window.onload = function(){
   var ul = document.getElementById('imgUl');
   var lis = ul.getElementsByTagName('li');
   var allImg = document.querySelectorAll('.picture');

   var mark =  document.getElementById('mark');
   var bigImgDiv = document.querySelector('.bigImgDiv');
   var left = document.getElementById('goLeft');
   var right = document.getElementById('goRight');
   var pictureArr = [];
   var $index = null;
   var currPic = '';

   //冒泡方法点击ul，每个li接收到事件，这种方法条件是<li><li>里面没有其他标签元素，不然冒泡事件将传递到最底层的元素上，就不是li上了。所以通常产生了闭包事件
   //闭包事件，事件还是作用在li上，在循环体内执行点击事件，好处是用了全局的变量，不管<li>中有多少标签和元素，都可以将事件执行在当前元素上。
   for(var i=0;i<lis.length;i++){
       (function(i){
           lis[i].onclick = function(){
               $index = i;
               currPic = lis[i].getElementsByTagName('img')[0].getAttribute('src');
               console.log($index,currPic);
               arryImg(i,currPic);
           }
       }(i))
   }

   //将所有图片的路径保存到一个数组中
   function arryImg(index){
       var j = 0;
       pictureArr = [];
       for(;j<allImg.length;j++){
           pictureArr.push(allImg[j].src);
       }
       console.log(pictureArr);
       for(var n=0;n<pictureArr.length;n++){
           var imgSrc = pictureArr[n];
           if(index == n){
               showImg(imgSrc);
           }
       }
   }
   //展示放大点击的那张图片
   function showImg(src){
        var imgShow = document.getElementById('imgShow');
        var img = imgShow.getElementsByTagName('img')[0];
        img.setAttribute("src",src);
        mark.style.display = 'block';
       bigImgDiv.style.display = 'block';
   }

   left.onclick = function(){
       console.log(pictureArr,$index,currPic);
       if($index == 0){
           console.log('左边到头了');
           return;
       }else{
           for(var i=0;i<pictureArr.length;i++){
               if(pictureArr[i] == 'file:///E:/xampp/htdocs/jsTest/'+currPic.replace('.','') || pictureArr[i] == 'file:///E:/xampp/htdocs/jsTest'+currPic.replace('.','') || pictureArr[i] == currPic){
                   console.log("123");
                   $index = i-1;  //记录当前的图片坐标
                   currPic = pictureArr[i-1];   //记录当前的图片路径
                   showImg(pictureArr[i-1]);
               }
           }
       }
       console.log($index,currPic);
   };

   right.onclick = function(){
       console.log(pictureArr,$index,currPic);
       if($index == pictureArr.length){
           console.log('右边到头了');
           return;
       }else{
           for(var i=0;i<pictureArr.length;i++){
               if(pictureArr[i] == 'file:///E:/xampp/htdocs/jsTest/'+currPic.replace('.','') || pictureArr[i] == 'file:///E:/xampp/htdocs/jsTest'+currPic.replace('.','') || pictureArr[i] == currPic){
                   console.log("456");
                   $index = i+1;  //记录当前的图片坐标
                   currPic = pictureArr[i+1];   //记录当前的图片路径
                   showImg(pictureArr[i+1]);
               }
           }
       }
       console.log($index,currPic);
   };

   //点击屏幕关闭关闭遮罩层和图片放大层
   mark.onclick = function(){
       mark.style.cssText = "display:none;";
       bigImgDiv.style.cssText = "display:none;";
   };
   bigImgDiv.onclick = function(e){
       //注意这里要阻止冒泡事件，点击里面的子元素弹层也会关闭
       if(e.target == e.currentTarget){  //当监听事件的元素（currentTarget）与事件的发起者（target）相同时
           mark.style.cssText = "display:none;";
           bigImgDiv.style.cssText = "display:none;";
       }
   };

};

