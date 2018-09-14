$(function () {
    /*1. 初始化 渲染页面*/
    var render = function (data) {
        //1. 选中筛选项  根据返回的数据中的tag
        $('nav a').removeClass('now');
        $('nav a[data-tag="'+data.tag+'"]').addClass('now');
        //2. 商品列表
        var html = '';
        data.list.forEach(function (item,i) {
            html += '<li>' +
                '        <p>名称：'+item.name+'</p>' +
                '        <p>价格：'+item.price+'</p>' +
                '    </li>';
        });
        $('ul').html(html);
    };
    //默认第一个页签
    /*2. 页面初始化的时候 也要根据地址栏信息 渲染页面*/
    var search = location.search;
    var tag = search.replace('?tag=','');
    if(!tag){
        //默认值代替
        tag = 'thinkPad'
    }
    $.ajax({
        type:'get',
        url:'./api/data.php',
        data:{
            tag:tag
        },
        dataType:'json',
        success:function (data) {
            render(data);
        }
    });
    /*2. 点击筛选项渲染页面*/
    $('nav a').on('click',function (e) {
        e.preventDefault();
        var that = this;//a
        //开始业务
        var tag = that.dataset.tag;
        $.ajax({
            type:'get',
            url:'./api/data.php',
            data:{
                tag:tag
            },
            dataType:'json',
            success:function (data) {
                render(data);
                //追加历史
                history.pushState(null,null,that.href);
            }
        });
    });

    /*1. 切换历史的时候 根据地址栏信息 重新渲染页面*/
    window.onpopstate = function () {
        var search = location.search;
        var tag = search.replace('?tag=','');
        if(!tag){
            //默认值代替
            tag = 'thinkPad'
        }
        $.ajax({
            type:'get',
            url:'./api/data.php',
            data:{
                tag:tag
            },
            dataType:'json',
            success:function (data) {
                render(data);
            }
        });
    };

});