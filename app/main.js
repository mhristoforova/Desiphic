/*====================================
 Preloader Function
 ======================================*/

$(document).ready(function() {
    $('body').scrollspy(
        {
            target: '#target-nav'
        });

    $("#status").fadeOut("slow");
    $("#preloader").delay(500).fadeOut("slow").remove();

});