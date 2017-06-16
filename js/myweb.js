// 单例模式

// 侧边栏
var aside = {
    init: function () {
        this.bind();
    },
    bind: function () {
        var me = this;
        $(".more").hover(function () {
            $("#moreProduct").toggle()
        });
        $("#moreProduct").hover(function () {
            $("body").css({
                'overflow': 'hidden'
            });
            $(this).show()
        }, function () {
            $("body").css({
                'overflow': 'scroll'
            });
            $(this).hide()
        });
    }
};
$(function () {
    aside.init();
});
// 浮动搜索框出现，236px
var showSearch = {
    init:function(){
        this.bind();
    },
    bind:function(){
        this.showSearcher();
    },
    showSearcher:function(){
        var showHeight = 236;
        $(window).scroll(function(event) {
            if ($(window).scrollTop()>showHeight) {
                $(".searchpanel").slideDown();
            }else if ($(window).scrollTop()<showHeight) {
                $(".searchpanel").slideUp();
            }
        });
    }

}
$(function () {
    showSearch.init()
});

// 标签页切换
var changeLabel = {
    init: function () {
        this.bind();
    },
    bind: function () {
        this.changeTab();
    },
    changeTab: function () {
        var boxArr = [];
        $("#s_ctner_menus .s-menu-item").each(function (index) {
            $(this).click(function () {
                $("#s_ctner_menus .current").removeClass("current");
                $(this).addClass("current");
                $('#s_ctner_contents div:eq(' + index + ')').show().siblings().hide();
            });
        });
    }
};
$(function () {
    changeLabel.init()
});


// 返回顶部

var backTop = {
    init: function () {
        this.bind()
    },
    bind: function () {
        var me = this;
        var timer = null;
        var pageHeight = document.documentElement.clientHeight;
        window.onscroll = function () {
            me.toShow();
        };
        $("#s_top_feed").click(function () {
            me.toTop();
        })
    },
    toShow: function () {
        var backtop = document.body.scrollTop; //获取滚动条滚动的垂直距离
        if (backtop >= 180) {
            $("#s_top_feed").show(); //若滚动条滚动的垂直距离大于180px，则显示回到顶部链接，否则隐藏
        } else {
            $("#s_top_feed").hide();
        }
    },
    toTop: function () {
        timer = setInterval(function () {
            var backtop = document.body.scrollTop;
            var speedTop = backtop / 5;
            document.body.scrollTop = backtop - speedTop;
            if (backtop == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
};
$(function () {
    backTop.init()
});


