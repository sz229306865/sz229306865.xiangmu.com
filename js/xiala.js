/**
 * Created by lenovo on 2017/11/24.
 */
$(function(){
    $(".sz_nav>ul>li").hover(function(){
            $(this).find("ol").stop(true,true).delay(0).slideDown(400);
        }, function(){
            $(this).find("ol").stop(true,true).delay(100).slideUp(400);
        }
    );

});

$(function(){
    $(".sz_buttom>ul>li").hover(
        function(){
            $(this).stop(true,false).delay(0).animate({top:"-10px"}, 500);
        },
        function(){
            $(this).stop(true,false).delay(0).animate({top:"0px"}, 500);
        }
    )
})

$(function(){
    $(".p2>ul>li").hover(
        function(){
            $(this).stop(true,false).delay(0).animate({top:"-10px"}, 500);
        },
        function(){
            $(this).stop(true,false).delay(0).animate({top:"0px"}, 500);
        }
    )
})

$(function(){
    $(".div_pro1>.div2>ul>li").hover(
        function(){
            $(this).stop(true,false).delay(0).animate({top:"-10px"}, 500);
        },
        function(){
            $(this).stop(true,false).delay(0).animate({top:"0px"}, 500);
        }
    )
})