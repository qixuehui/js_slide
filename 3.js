/*
轮播图：
1有个div含有3个img标签
2只显示其中一个img
3加一个按钮点击的时候切换图片：绑定事件



*/
var nextIndex = 0;//当前页面
var img_number = f('gua-slide-img').length
var _timer = setInterval(runFn,2000)//定时2秒
function runFn(){ //定时器函数
  log(nextIndex)
  nextIndex++//当前页面加1，或者位0
  if(nextIndex == img_number){
    nextIndex = 0
  }
  slideTo(nextIndex)//进行切换
 }
//切换banner图片 和 按钮样式
   function slideTo(index){
       console.log(index)
       var index = parseInt(index);//转int类型
       var images = f('gua-slide-img')
       for(var i = 0; i < images.length; i++){//遍历每个图片
           if( i == index ){
               images[i].style.display = 'inline'//显示
           }else{
               images[i].style.display = 'none'//隐藏
           }
       }
       var tabBtn = f('gua-slide-indi')
       for(var j = 0; j < tabBtn.length; j++){//遍历每个按钮
           if( j == index ){
               tabBtn[j].classList.add("gua-white")    //添加轮播按钮hover样式
               nextIndex = j;
           }else{
               tabBtn[j].classList.remove("gua-white")//去除轮播按钮hover样式
           }
       }

   }
var bindEventNext = function() {
    var selector= '.gua-slide-next'
    selectorall(selector, 'click', function(event) {
      clearInterval(_timer)//细节处理，关闭定时，防止点切图和定时器函数冲突
      //求出下一张的id
      nextIndex = (nextIndex + 1) % img_number
      // log(nextIndex)
      //获取当前下一张页面的id
      slideTo(nextIndex)
      _timer = setInterval(runFn,2000)//点击事件处理完成，继续开启定时轮播
    })
}

var bindEventbefor = function() {
    var selector= '.gua-slide-before'
    selectorall(selector, 'click', function(event) {
      clearInterval(_timer)//细节处理，关闭定时，防止点切图和定时器函数冲突
      //按钮处---------div
      // var p = event.target.parentElement
      //如何跳到下一张
      //图片总数，当前图片下标
      // var numberOfImgs = parseInt(p.dataset.imgs)
      // var activeIndex = parseInt(p.dataset.active)
      //求出下一张的id
       nextIndex--
      if(nextIndex == -1){
        nextIndex = img_number - 1
      }
      //获取当前下一张页面的id
        slideTo(nextIndex)
      _timer = setInterval(runFn,2000)//点击事件处理完成，继续开启定时轮播
    })
}
//圆点点击切换轮播图
var bindEventradius = function() {
    var selector= '.gua-slide-indi'
    selectorall(selector, 'click', function(event) {
     clearInterval(_timer);//细节处理，关闭定时，防止点切图和定时器函数冲突
     if(this.attributes['id'].value == 'id-guaspan-0'){
         nextIndex = 0
     }else if(this.attributes['id'].value == 'id-guaspan-1'){
           nextIndex = 1
     }else if(this.attributes['id'].value == 'id-guaspan-2'){
           nextIndex = 2
     }
       slideTo(nextIndex)
     _timer = setInterval(runFn,2000)//点击事件处理完成，继续开启定时轮播
    })
}

bindEventbefor()
bindEventNext()
bindEventradius()

