//tab
$(function () {
    $(".menu-box a").hover(function () {
        $(this).addClass("active")
    },function () {
        $(this).removeClass("active")
    })
});
//banner
function play(obj,obj2) {
    var page=0;
    var len =  obj.length;
    var bantimer = null;
    function right() {
        obj.eq(page).fadeOut();
        page++;
        if(page>len-1){
            page=0
        }
        $(obj2).removeClass("active")
        $(obj2).eq(page).addClass("active")
        obj.eq(page).fadeIn();
    }
    function left() {
        obj.eq(page).fadeOut();
        page--;
        if(page<0){
            page=len-1
        }
        $(obj2).removeClass("active")
        $(obj2).eq(page).addClass("active")
        obj.eq(page).fadeIn();
    }
    function autoslide() {
        clearInterval(bantimer);
        bantimer = setInterval(function () {
            right()

        },2000);
    }
    function banchange() {
        $(".banner-prev").click(function () {
            left()
        });
        $(".banner-next").click(function () {
            right()
        });
    }
    banchange()
    autoslide()
    $(obj2).hover(function () {
        clearInterval(bantimer)
        $(obj2).removeClass("active")
        $(this).addClass("active");
        page=$(this).index();
        obj.fadeOut();
        obj.eq(page).fadeIn();
    },function () {
        autoslide()
        $(this).removeClass("active");
    })
}
$(function () {
    play($(".banner-item"))
});
//part1ban
$(function () {
    play($(".middle-part #slide-box .slide-item"),".slide-nav a")
});

