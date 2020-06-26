$(document).ready(function(){    
// Chart 
    $("#closing_chart").click(function(){
        $("#my_chart").fadeOut(400);
    });
    $("#show_chart").click(function(){
        $("#my_chart").fadeIn(400);
    });

//End chart
    $(".main_card").mouseover(function(){
       var eThis0 = $(this);
        eThis0.find(".sub_card").fadeIn(600);
    });
    $(".main_card").mouseleave(function(){
       var eThis0 = $(this);
        eThis0.find(".sub_card").fadeOut(600);
    });
    $("#menu_sub").mouseover(function(){
        var eThis1 = $(this);
        eThis1.find("#sub_menu").slideDown(600);
    });
    $("#menu_sub").mouseleave(function(){
        var eThis2 = $(this);
        eThis2.find("#sub_menu").slideUp(600);
    });


    // Doube sub menu
    $("#d_ub_main1").mouseover(function(){
        $("#d_sub_menu").slideDown(600);
    });
    $("#d_ub_main1").mouseleave(function(){
        $("#d_sub_menu").slideUp(600);
    });
    // End Double sub menu
//Sart menu left
    $("#P1").mouseover(function(){
        $("#show_plist1").fadeIn(60);
    });
    $("#P1").mouseleave(function(){
        $("#show_plist1").fadeOut(60);
    });
    $("#P2").mouseover(function(){
        $("#show_plist2").fadeIn(60);
    });
    $("#P2").mouseleave(function(){
        $("#show_plist2").fadeOut(60);
    });
    $("#P3").mouseover(function(){
        $("#show_plist3").fadeIn(60);
    });
    $("#P3").mouseleave(function(){
        $("#show_plist3").fadeOut(60);
    });
    
//End menu left   

    
});
