//$(".btn").click(function() {
//      $("ul").toggle();
//    })
$(window).scroll(function(){
  var navBar = $(".nav");
   navBar.toggleClass("stick", window.scrollY>650);
   navBar.toggleClass("unstick", window.scrollY>0 && window.scrollY<650);
  
})

$(".toggle").click(function(){
  var select = $(".nav-right");
  select.toggleClass("show");  
})