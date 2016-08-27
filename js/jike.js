$(document).ready(function() {


    // 搜索栏 focus
    $("#web_search_header").focus(function() {
            $("#headsearch input:nth-child(3)").addClass(" search-btn2");
            $("#headsearch .hot-words").css("display", "none");
        }).blur(function() {

            $("#headsearch input:nth-child(3)").removeClass(" search-btn2");
            $("#headsearch .hot-words").css("display", "block");
        }),

        // 中间轮播区域  滚动图标
        $(".index-banner").mouseover(function() {
            $("#banner-left").show();
            $("#banner-right").show();
        }).mouseout(function() {
            $("#banner-left").hide();
            $("#banner-right").hide();
        });

    // 中间轮播区域 下方  滚动图标
    $("#focusWorkWrap").mouseover(function() {
        $("#workLeft").show();
        $("#workRight").show();
    }).mouseout(function() {
        $("#workLeft").hide();
        $("#workRight").hide();
    });

    // 战略合作企业  滚动图标
    $("#enterprise").mouseover(function() {
        $("#banner-left3").show();
        $("#banner-right3").show();
    }).mouseout(function() {
        $("#banner-left3").hide();
        $("#banner-right3").hide();
    });

    // 媒体报道  滚动图标
    $("#strateg4").mouseover(function() {
        $("#banner-left4").show();
        $("#banner-right4").show();
    }).mouseout(function() {
        $("#banner-left4").hide();
        $("#banner-right4").hide();
    });



    // 标签切换
    $("#recommendName ul li").each(function(index) {
        // alert("....................");
        var liNode = $(this);
        $(this).mouseover(function() {
            timeoutId = setTimeout(function() {
                // 删除内容
                $("#hot-lessonbox > div.contenttt").removeClass("contenttt");
                // 删除标签
                $("#recommendName ul li.on").removeClass("on");
                // 添加内容
                $("#hot-lessonbox > div").eq(index).addClass("contenttt");
                // 添加标签
                liNode.addClass("on");
            }, 10);

        }).mouseout(function() {
            clearTimeout(timeoutId);
        })
    });

    // 中间主题广告轮播
    $(function() {

        var i = 0;
        // 克隆第一个轮播图片
        var clone = $("#swiperWra:nth-child(1)").clone();
        console.log(clone);
        // 将克隆的图片插入到最后一个
        $("#swiperWra a").append(clone);
        // 计算轮播的个数
        var size = $("#swiperWra a").size();
        console.log(size);
        for (var j = 0; j < size; j++) {
            $("#paginSwiper").append("<span></span>");
        }
        $("#paginSwiper  span").first().addClass("swiper-active-switch2");

        /*鼠标划入圆点*/
        $("#paginSwiper  span").hover(function() {
            var index = $(this).index();
            i = index;
            $("#swiperWra a").stop().animate({
                left: -index * 560
            }, 100)
            $(this).addClass("swiper-active-switch2").siblings().removeClass("swiper-active-switch2")
        })

        /*自动轮播*/
        var t = setInterval(function() {
            i++;
            move()
        }, 1000)


        /*对banner定时器的操作*/
        $(".swiper-container").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(function() {
                i++;
                move()
            }, 1000)
        })

        /*向左的按钮**/
        $("#banner-left").click(function() {
            i++
            move();
        })

        /*向右的按钮**/
        $("#banner-right").click(function() {
            i--
            move();
        })

        function move() {

            // 向左
            if (i == size - 1) {
                $("#swiperWra").css({
                    left: 0
                })
                i = 0;
            }

            // 向右
            if (i == -1) {
                $("#swiperWra a").css({
                    left: -(size - 1) * 560
                })
                i = size - 2;
            }

            $("#swiperWra a").stop().animate({
                left: -i * 560
            }, 300)

            if (i == size - 1) {
                $("#paginSwiper  span").eq(0).addClass("swiper-active-switch2").siblings().removeClass("swiper-active-switch2")
            } else {
                $("#paginSwiper  span").eq(i).addClass("swiper-active-switch2").siblings().removeClass("swiper-active-switch2")
            }
        }
    });


    // 主题轮播下方 轮播
    $(function() {

        var i = 0;
        // 克隆第一个轮播图片
        var clone = $("#focusWorkWrap  ul li").first().clone();
        // 将克隆的图片插入到最后一个
        $("#focusWorkWrap  ul").append(clone);
        // 计算轮播的个数
        var size = $("#focusWorkWrap  ul li").size();
        console.log("下方" + size);


        /*自动轮播*/
        // var t = setInterval(function() {
        //     i++;
        //     move()
        // }, 2000)


        /*对banner定时器的操作*/
        $("#focusWorkWrap").hover(function() {
                clearInterval(t);
            }, function() {
                t = setInterval(function() {
                    i++;
                    move()
                }, 2000)
            }),

            /*向左的按钮*/
            $("#workLeft").click(function() {
                i++
                move();
            })
            // (function() {
            //     i++
            //     move();
            // })

        /*向右的按钮*/
        $("#workRight").click(function() {
                i--
                move()
            }),

            function move() {
                if (i == size - 2) {
                    $("#focusWorkWrap ul").css({
                        left: 0
                    })
                    i = 1;
                }
                if (i == -1) {
                    $("#focusWorkWrap ul").css({
                        left: -(size - 1) * 185
                    })
                    i = size - 2;
                }
                $("#focusWorkWrap ul").stop().animate({
                    right: -i * 185
                }, 500)

            }
    });

    // 企业战略合作 轮播
    $(function() {
        var i = 0;

        // 轮播的个数
        var size = $("#co-enter a").size();
        console.log(size);
        // 向左滑动
        $("#banner-left3").click(function() {
                i--;
                if (i == -1) {
                    i = size - 6;
                }
                $("#co-enter a").stop().animate({ right: i * 160 }, 500)
            })
            // 向右滑动
        $("#banner-right3").click(function() {
            i++;
            if (i == size - 6) {
                i = 0;
            }
            $("#co-enter a").stop().animate({ right: i * 160 }, 500)
        })

    });


    // 媒体报道 轮播
    $(function() {
        var i = 0;


        // 轮播的个数
        var size = $("#co-uni a").size();
        console.log(size);
        // 向左滑动
        $("#banner-left4").click(function() {
                i--;
                if (i == -1) {
                    i = size - 6;
                }
                $("#co-uni a").stop().animate({ right: i * 160 }, 500)
            })
            // 向右滑动
        $("#banner-right4").click(function() {
            i++;
            if (i == size - 6) {
                i = 0;
            }
            if (i == 7) {

                i = 0;
                $("#co-uni a").stop().animate({ right: i * 160 }, 0)
                return;
            };
            $("#co-uni a").stop().animate({ right: i * 160 }, 500)
        })

    });


});




// 埋点
// var _vds = _vds || [];
// window._vds = _vds;
// (function() {
//     _vds.push(['setAccountId', 'aacd01fff9535e79']);

//     var jkuid = new RegExp("(^| )uid=([^;]*)(;|$)");
//     if (document.cookie.match(jkuid) && document.cookie.match(jkuid)[2]) {
//         var uidVal = document.cookie.match(jkuid)[2];
//         _vds.push(['setCS1', 'uid', uidVal]);
//     }

//     (function() {
//         var vds = document.createElement('script');
//         vds.type = 'text/javascript';
//         vds.async = true;
//         vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';
//         var s = document.getElementsByTagName('script')[0];
//         s.parentNode.insertBefore(vds, s);
//     })();
// })();
// </script>
// <script>
// (function(i, s, o, g, r, a, m) {
//     i['GoogleAnalyticsObject'] = r;
//     i[r] = i[r] || function() {
//         (i[r].q = i[r].q || []).push(arguments)
//     }, i[r].l = 1 * new Date();
//     a = s.createElement(o),
//         m = s.getElementsByTagName(o)[0];
//     a.async = 1;
//     a.src = g;
//     m.parentNode.insertBefore(a, m)
// })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

// ga('create', 'UA-50413628-1', 'auto');
// ga('send', 'pageview');
