    var d = new Date();
    var n = d.getFullYear();
    document.getElementById("year").innerHTML = n;

$(document).ready(function(){    
// Chart 
    $("#closing_chart").click(function(){
        $("#my_chart").fadeOut(400);
    });
    $("#show_chart").click(function(){
        $("#my_chart").fadeIn(400);
    });

//End chart
// Scroll
    $("#show_scroll").click(function (){
        $('html, body').animate({
            scrollTop: $("#header_scroll_up").offset().top
        }, 2000);
    });

// Click favorite 
    $("#favorite0").click(function(){
        $("#favorite0").hide();
        $("#favorite").show();
    });
    $("#favorite").click(function(){
        $("#favorite").hide();
        $("#favorite0").show();
    });
    $("#favorite2").click(function(){
        $("#favorite2").hide();
        $("#favorite1").show();
    });
    $("#favorite1").click(function(){
        $("#favorite1").hide();
        $("#favorite2").show();
    });
    $("#favorite3").click(function(){
        $("#favorite3").hide();
        $("#favorite4").show();
    });
    $("#favorite4").click(function(){
        $("#favorite4").hide();
        $("#favorite3").show();
    });
    $("#favorite5").click(function(){
        $("#favorite5").hide();
        $("#favorite6").show();
    });
    $("#favorite6").click(function(){
        $("#favorite6").hide();
        $("#favorite5").show();
    });
    $("#favorite7").click(function(){
        $("#favorite7").hide();
        $("#favorite8").show();
    });
    $("#favorite8").click(function(){
        $("#favorite8").hide();
        $("#favorite7").show();
    });
    $("#favorite9").click(function(){
        $("#favorite9").hide();
        $("#favorite10").show();
    });
    $("#favorite10").click(function(){
        $("#favorite10").hide();
        $("#favorite9").show();
    });
    $("#favorite11").click(function(){
        $("#favorite11").hide();
        $("#favorite12").show();
    });
    $("#favorite12").click(function(){
        $("#favorite12").hide();
        $("#favorite11").show();
    });
    $("#favorite13").click(function(){
        $("#favorite13").hide();
        $("#favorite14").show();
    });
    $("#favorite14").click(function(){
        $("#favorite14").hide();
        $("#favorite13").show();
    });


    $(".main_card").mouseover(function(){
       var eThis0 = $(this);
        eThis0.find(".sub_card").fadeIn(600);
    });
    $(".main_card").mouseleave(function(){
       var eThis0 = $(this);
        eThis0.find(".sub_card").fadeOut(600);
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

    // Detail page
    $("#img1").click(function(){
        $("#list-img2").hide();
        $("#list-img3").hide();
        $("#list-img4").hide();
        $("#list-img5").hide();
        $("#list-img6").hide();
        $("#list-img1").fadeIn(700);        
    });
    $("#img2").click(function(){
        $("#list-img1").hide();
        $("#list-img3").hide();
        $("#list-img4").hide();
        $("#list-img5").hide();
        $("#list-img6").hide();
        $("#list-img2").fadeIn(700);
    });
    $("#img3").click(function(){
        $("#list-img1").hide();
        $("#list-img2").hide();
        $("#list-img4").hide();
        $("#list-img5").hide();
        $("#list-img6").hide();
        $("#list-img3").fadeIn(700);
    });
    $("#img4").click(function(){
        $("#list-img1").hide();
        $("#list-img2").hide();
        $("#list-img3").hide();
        $("#list-img5").hide();
        $("#list-img6").hide();
        $("#list-img4").fadeIn(700);
    });
    $("#img5").click(function(){
        $("#list-img1").hide();
        $("#list-img2").hide();
        $("#list-img3").hide();
        $("#list-img4").hide();
        $("#list-img6").hide();
        $("#list-img5").fadeIn(700);
    });
     $("#img6").click(function(){
        $("#list-img1").hide();
        $("#list-img2").hide();
        $("#list-img3").hide();
        $("#list-img4").hide();
        $("#list-img5").hide();
        $("#list-img6").fadeIn(700);
    });
    // End detail page

    
});
