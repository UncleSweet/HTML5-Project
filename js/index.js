$(function(){

    var wait_load = $('.wait_load');

    //AJAX加载外部js
    $.getScript("js/lazyLoad.js",function(){
        lazyLoad(wait_load,'src','xsrc',500);
    });

    /*
    body里面内容的宽度和高度
    //不包括边框和线
    console.log(document.body.clientWidth);
    console.log(document.body.clientHeight);

    //包括边框和线
    console.log(document.body.offsetWidth);
    console.log(document.body.offsetHeight);

    //加上滚动条，比上面多20
    console.log(document.body.scrollWidth);
    console.log(document.body.scrollHeight);
    */

    //当前窗口的可视宽度和高度
    //console.log(document.documentElement.clientWidth);
    //console.log(document.documentElement.clientHeight);

    //浏览器距离屏幕边缘的距离
    //console.log(window.screenTop);
    //console.log(window.screenLeft);

    /*
    //屏幕高度和宽度
    console.log(window.screen.height);
    console.log(window.screen.width);

    //屏幕可用宽度和高度，和上面一样大小
    console.log(window.screen.availHeight);
    console.log(window.screen.availWidth);
    */
});

