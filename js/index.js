
$("document").ready(function () {
   $(".hamburger").on("click",function () {
       $(".hamburger").toggleClass("is-active");
       $(".navbar-nav").toggleClass("move-navbar");
       $(".navbar").toggleClass("trans-navbar");
   }) ;
   $(window).on("resize",function () {
       console.log($(window).width());
       if($(window).width()<969){
           if($(".haburger").hasClass("is-active")){
               $(".hamburger").removeClass("is-active");
           }
       }
   });


});