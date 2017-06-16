$(document).ready(function () {
    $(".more").hover(function () {
        $("#moreProduct").toggle();
    });
    $("#moreProduct").hover(function(){
        $('body').css({'overflow':'hidden'});
        $(this).show();
    },function(){
        $('body').css({'overflow':'scroll'});
        $(this).hide();
    });
    changeCurrent();
    backTop();
    downShadow();
});

// 浮动搜索框出现，236px
// $(document).ready(function() {
//     var showHeight = 236;
//     $(window).scroll(function(event) {
//         if ($(window).scrollTop() > showHeight) {
//             $('.searchpanel').slideDown();
//         }else if ($(window).scrollTop() < showHeight) {
//             $('.searchpanel').slideUp(100);
//         };
//     });
// });


// 标签页切换

function changeCurrent() {
    var boxArr = [];
    $("#s_ctner_menus .s-menu-item").each(function (index, value) {
        $(this).click(function () {
            $("#s_ctner_menus .current").removeClass("current");
            $(this).addClass("current");
            $('#s_ctner_contents div:eq(' + index + ')').show().siblings().hide();
        });
    });
}

//返回顶部
function backTop() {
    var timer = null;
    var pageHeight = document.documentElement.clientHeight; //获取可视区域的高度
    window.onscroll = function () { //onscroll事件再元素滚动时执行
        var backtop = document.body.scrollTop; //获取滚动条滚动的垂直距离
        if (backtop >= 150) {
            $("#s_top_feed").show(); //若滚动条滚动的垂直距离大于150px，则显示回到顶部链接，否则隐藏
        } else {
            $("#s_top_feed").hide();
        }

    }

    $("#s_top_feed").click(function () {
        timer = setInterval(function () {
            var backtop = document.body.scrollTop;
            var speedTop = backtop / 5;
            document.body.scrollTop = backtop - speedTop;
            if (backtop == 0) {
                clearInterval(timer);
            }
        }, 30)
    });
};
// function downShadow() {
//     //获取#middle的位置
//     var startPos = $("#s_wrap").offset().top;
//     $.event.add(window, "scroll", function () {
//         var p = $(window).scrollTop();
//         $("#head_wrapper").css('box-shadow', ((p) > startPos) ? '0 0 5px #888' : '0 0 0 #888');
//     });
// }
// }
var top={
    init:function(){
        this.render();
        this.bind();
    },
    render:function(){
        this.top=$(".top");
    },
    bind:function(){
        this.top.click(this.event['top']);
        $(window).scroll(function(event){
            if($(window).scrollTop()>100){
                $(".top").fadeIn(200);
                $(".searchpanel").fadeIn(200);
            }else{
                $(".top").fadeOut(200);
                $(".searchpanel").fadeOut(200);
            }
        });
    },
    event:{
        top:function(){
            $("body,html").animate({ scrollTop:0},300);
        }
    }
};
$(function () {
    top.init()
});