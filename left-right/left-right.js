window.onload = function(){
   var left = document.getElementById("cli-left");
   var right = document.getElementById("cli-right");
   var ul = document.getElementsByTagName("ul")[0];
   var lis = ul.getElementsByTagName("li");
   var len = lis.length;  //li总个数
   var rlen = len-4; //右边隐藏的li个数
   var llen = 0;  //左边隐藏的li个数
   left.onclick = function(){
       if(llen >= (len-4)){
           console.log("左边到头了");return false;
       }else{
           console.log("点左边了");
           llen++;
           rlen--;
           $("#clr").find("ul").animate({"margin-left":"-=108px"},1000);
       }
   };
   right.onclick = function(){
       if(rlen >= (len-4)){
           console.log("右边到头了");return false;
       }else{
           console.log("点右边了");
           rlen++;
           llen--;
           $("#clr").find("ul").animate({"margin-left":"+=108px"},1000);
       }

   }


}