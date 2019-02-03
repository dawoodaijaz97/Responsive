$("document").ready(function () {


    setMenu();

    $(".hamburger").on("click", function () {
        $(".hamburger").toggleClass("is-active");
        $(".navbar-nav").toggleClass("move-navbar");
        $(".navbar").toggleClass("trans-navbar");
    });
    $(window).on("resize", function () {
        console.log($(window).width());
        if ($(window).width() < 969) {
            if ($(".haburger").hasClass("is-active")) {
                $(".hamburger").removeClass("is-active");
            }
        }
        setMenu();
    });
    if ($(window).width() < 969) {
        $(".hamburger").trigger("click");
        // $(".navbar-collapse").removeClass("show").addClass("collapse")
    }


});
var setMenu = function () {
    if ($(window).width() > 969 && $(window).width() < 1400) {
        console.log("true screen");
        $(".nav-item .nav-link").css({
            fontSize: "0.8rem"
        })
    }else{
        $(".nav-item .nav-link").css({
            fontSize: "1rem"
        })
    }
};