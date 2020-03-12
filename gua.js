//element 目标   selector 所选‘XXX’


// 单个选择器
var e = function(selector) {
  return document.querySelector(selector)
}
var f = function(className) {
  return document.getElementsByClassName(className);
}
//控制台
var log = function() {
  console.log.apply(console, arguments)
}

// 在原html上添加css or html
var appendHtml = function(element, html) {
  element.insertAdjacentHTML('beforeend', html)
}

//事件监听
var bindEvent = function(element, eventName, callback) {
  element.addEventListener(eventName, callback)
}

//隐藏，显示
var toggleClass = function(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}
//点击全部所选 responseClass事件委托方 , responseClass
var selectorall = function(selector, eventName, callback) {
  //querySelectorAll
  var elements = document.querySelectorAll(selector)
    for(var i = 0 ; i < elements.length; i++) {
        var ee = elements[i];
          bindEvent(ee, eventName, callback)
     }
}
var removeclassall = function(className){
  var selector = '.' + className
  var elements = document.querySelectorAll(selector)
    for(var i = 0 ; i < elements.length; i++) {
        var ee = elements[i];
          ee.classList.remove(className)
     }
}
// 查找 element 的子元素
var find = function(element, selector ) {
  return element.querySelector(selector)
}
