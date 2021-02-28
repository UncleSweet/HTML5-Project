function lazyLoad(obj,ncss,ocss,animate_time){

    //1、定义全局变量获取img节点，可以节省资源使滚动事件更流畅
    var _this = obj; 

    //2、设置透明度为0，铺垫下面动画实现
    _this.css('opacity',0);

    //如果元素已经在可视范围内则直接加载
    for(var i = 0;i<_this.length;i++){
        if(_this.eq(i).offset().top <= document.documentElement.clientHeight){
            lazyLoadanimate(_this.eq(i),ncss,ocss,animate_time);
        }
    }

    $(window).scroll(function(){
        //实时保存可视窗口高度+滚动条移动距离
        var move_height = document.documentElement.clientHeight + $(document).scrollTop();
        //设置定时器让滑动时更平滑，不会影响性能
        setTimeout(function(){
            //循环遍历预加载对象
            for(var i = 0;i<_this.length;i++){
                //如果移动总高度大于元素顶端距离body高度，则实现替换加载且添加动画效果
                if(move_height >= _this.eq(i).offset().top){
                    lazyLoadanimate(_this.eq(i),ncss,ocss,animate_time);
                }
            }
        },300);
    });


    function lazyLoadanimate(obj,ncss,ocss,animate_time){
        //设置xsrc替换src实现加载效果
        obj.attr(ncss,obj.attr(ocss));
        //设置缓慢加载动画
        obj.animate({
            opacity : 1
        },animate_time);
    }
}