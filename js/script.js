 $(function () {
         $('[data-toggle="tooltip"]').tooltip()
       })

       $(window).scroll(function() {
           if ($(document).scrollTop() > 280) {
               $('#the-top').removeClass('d-none');
           } else {
               $('#the-top').addClass('d-none');
           }
           // nav
           if ($(document).scrollTop() > 565) {
               $('.nav').addClass('affix');
               $('.nav').removeClass('invisible');
           } else {
               $('.nav').removeClass('affix');
               $('.nav').addClass('invisible');
           }
           // end nav
           // about
           if ($(document).scrollTop() > 650) {
               $('#abs').addClass('line');
           } else {
               $('#abs').removeClass('line');
           }
           // end about
           // skills
           if ($(document).scrollTop() > 1150){
               $('#ski').addClass('line');
               $('#abs').removeClass('line');
           }
           else {
               $('#ski').removeClass('line');
           }
           // end skills
           // works
           if ($(document).scrollTop() > 1780){
               $('#port').addClass('line');
               $('#abs').removeClass('line');
               $('#ski').removeClass('line');
           }
           else {
               $('#port').removeClass('line');
           }
           // end works
           // contact
           if ($(document).scrollTop() > 2260){
               $('#con').addClass('line');
               $('#abs').removeClass('line');
               $('#ski').removeClass('line');
               $('#port').removeClass('line');
           }
           else {
               $('#con').removeClass('line');
           }
           // end contact
       });
       $('.navTrigger').click(function () {
          $(this).toggleClass('active');
          $("#mainListDiv").toggleClass("show_list");
          $("#mainListDiv").fadeIn("main_list");

       });