$(document).ready(function(){    
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
    $("#all_product").mouseover(function(){
        var eThis3 = $(this);
        eThis3.find("#show_all").slideDown(600);
    });
    $("#all_product").mouseleave(function(){
        var eThis4 = $(this);
        eThis4.find("#show_all").slideUp(600);
    });
    $("#load_menu").click(function(){
        $(".show_menu_all").slideToggle(500);
    });   
    $("#pComputer").click(function(){
        $("#pComputer").css.color="red";
        $("#computer_component").remove();
        $("#accessories").remove();
        $("#server").remove();
        $("#network").remove();
        $("#software").remove();
        $("#bettery").remove();
        $("#printer").remove();
        $("#display").remove();
        $("#telephone").remove();
        $("#camera").remove();
        $("#service").remove();
        $("#brand_name").remove();
        $("#sub_menu_right").append("<div id='personal_computer'><div class='row'><div class='col-md-4 text-left border_right_me'><p>Notebook</p><ul class='per-computer'><li><a href='#'><i class='fas fa-angle-right'></i> Ultrabook</a></li><li><a href='#'><i class='fas fa-angle-right'></i> All Notebooks</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Macbook</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Laptop Gaming</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Laptops 2 in 1</a></li></ul></div><div class='col-md-4 text-left border_right_me'><p>Desktops</p><ul class='per-computer'><li><a href='#'><i class='fas fa-angle-right'></i> All in one</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Clone PC</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Workstation</a></li><li><a href='#'><i class='fas fa-angle-right'></i> BrandDesktops</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Desktops Gaming</a></li></ul></div><div class='col-md-4 text-left'><p>Tablets</p><ul class='per-computer'><li><a href='#'><i class='fas fa-angle-right'></i> IOS</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Android</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Surface</a></li></ul></div></div></div>"); 
    });
     $("#cComponent").click(function(){
        $("#personal_computer").remove();
         $("#accessories").remove();
         $("#server").remove();
         $("#network").remove();
         $("#software").remove();
         $("#bettery").remove();
         $("#printer").remove();
         $("#display").remove();
         $("#telephone").remove();
        $("#camera").remove();
        $("#service").remove();
        $("#brand_name").remove();
        $("#sub_menu_right").append("<div id='computer_component'> " +
                                            "<div class='row'>" +
                                                "<div class='col-md-4 text-left border_right_me'>" +
                                                    "<p>PC Components</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> CPU</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Motherboards</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Graphic Cards</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> RAM/Memory</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Cases/Chasses</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Power Supply</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-4 text-left border_right_me'>" +
                                                    "<p>Periperials</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Keyboards</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Mouses</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Speaker</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> CD/DVD/Blu-Ray Burners</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Monitors</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Headphone/Earphone</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-4 text-left'>" +
                                                    "<p>Storage Devices</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Hard Drive</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> SSDs</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> External Hard Drives</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> USB Flash Drives</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Memory Card</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                            "</div>" +
                                        "</div>");
    });
    $("#cAccessories").click(function(){
        $("#personal_computer").remove();
        $("#computer_component").remove();
        $("#server").remove();
        $("#network").remove();
        $("#software").remove();
        $("#bettery").remove();
        $("#printer").remove();
        $("#display").remove();
        $("#telephone").remove();
        $("#camera").remove();
        $("#service").remove();
        $("#brand_name").remove();
        $("#sub_menu_right").append("<div id='accessories'><div class='row'><div class='col-md-9 text-left border_right_me'><p>Accessories</p><ul class='per-computer'><li><a href='#'><i class='fas fa-angle-right'></i> Adapters</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Carrying Bag</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Power Header</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Webcam</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Cable</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Cleaning Screen</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Gaming</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Presenter</a></li><li><a href='#'><i class='fas fa-angle-right'></i> Paper Shredder</a></li><li><a href='#'><i class='fas fa-angle-right'></i> USB Hub</a></li></ul></div><div class='col-md-3 text-left'></div></div></div>");
    });
    $("#cServer").click(function(){
        $("#personal_computer").remove();
        $("#computer_component").remove();
        $("#accessories").remove();
        $("#network").remove();
        $("#software").remove();
        $("#bettery").remove();
        $("#printer").remove();
        $("#display").remove();
        $("#telephone").remove();
        $("#camera").remove();
        $("#service").remove();
        $("#brand_name").remove();
        $("#sub_menu_right").append("<div id='server'>" +
                                            "<div class='row'>" +
                                                "<div class='col-md-4 text-left border_right_me'>" +
                                                    "<p>Server</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Tower Server</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Rack Server</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Blade Server</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-4 text-left border_right_me'>" +
                                                    "<p>Storage</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Network Attached Storage (NAS)</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Storage Area Network (SAN)</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Tape Backup</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-4 text-left'>" +
                                                "</div>" + 
                                            "</div>" +
                                        "</div>");
    });
    $("#cNetwork").click(function(){
        $("#personal_computer").remove();
        $("#computer_component").remove();
        $("#accessories").remove();
        $("#server").remove();
        $("#software").remove();
        $("#bettery").remove();
        $("#printer").remove();
        $("#display").remove();
        $("#telephone").remove();
        $("#camera").remove();
        $("#service").remove();
        $("#brand_name").remove();
        $("#sub_menu_right").append("<div id='network'>" +
                                            "<div class='row'>" +
                                                "<div class='col-md-2 text-left border_right_me'>" +
                                                    "<p>Server</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Access Points</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Repeater</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Switch/Hub</a></li>" +                                                       
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Router</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-2 text-left border_right_me'>" +
                                                    "<p>Wireless Adaptor</p>" +                                                
                                                "</div>" +
                                                "<div class='col-md-2 text-left border_right_me'>" +
                                                    "<p>Print Server</p>" +
                                                "</div>" +
                                                "<div class='col-md-2 text-left border_right_me'>" +
                                                    "<p>Module</p>" +
                                                "</div>" +
                                                "<div class='col-md-2 text-left border_right_me'>" +
                                                    "<p>USB Modem</p>" +
                                                "</div>" +
                                                "<div class='col-md-2 text-left'>" +
                                                    "<p>Network Card</p>" +
                                                "</div>" +
                                            "</div>" +
                                        "</div>");
    });
    $("#cSoftware").click(function(){
        $("#personal_computer").remove();
        $("#computer_component").remove();
        $("#accessories").remove();
        $("#server").remove();
        $("#network").remove();
        $("#bettery").remove();
        $("#printer").remove();
        $("#display").remove();
        $("#telephone").remove();
        $("#camera").remove();
        $("#service").remove();
        $("#brand_name").remove();
        $("#sub_menu_right").append("<div id='software'>" +
                                            "<div class='row'>" +
                                                "<div class='col-md-9 text-left border_right_me'>" +
                                                    "<p>Software</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Antivirus & Security</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Office & Accounting</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Operating System</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Server Software</a></li>" +
                                                    "</ul>" +
                                                "</div>" +                                                
                                                "<div class='col-md-3 text-left'>" +                                                    
                                                "</div>" +
                                            "</div>" +
                                        "</div>");
    });
    $("#cBettery").click(function(){
        $("#personal_computer").remove();
        $("#computer_component").remove();
        $("#accessories").remove();
        $("#server").remove();
        $("#network").remove();
        $("#software").remove();
        $("#printer").remove();
        $("#display").remove();
        $("#telephone").remove();
        $("#camera").remove();
        $("#service").remove();
        $("#brand_name").remove();
        $("#sub_menu_right").append("<div id='bettery'>" +
                                            "<div class='row'>" +
                                                "<div class='col-md-4 text-left border_right_me'>" +
                                                    "<p>External Battery</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Power Bank</a></li>" +
                                                    "</ul>" +
                                                "</div>" +                                             
                                                "<div class='col-md-4 text-left border_right_me'>" +
                                                    "<p>UPS</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Battery</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Line Interactive UPS</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Online UPS</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-4 text-left'>" +
                                                "</div>" +
                                            "</div>" +
                                        "</div>");    
    });
    $("#cPrinter").click(function(){
        $("#personal_computer").remove();
        $("#computer_component").remove();
        $("#accessories").remove();
        $("#server").remove();
        $("#network").remove();
        $("#bettery").remove();
        $("#display").remove();
        $("#telephone").remove();
        $("#camera").remove();
        $("#service").remove();
        $("#brand_name").remove();
        $("#sub_menu_right").append("<div id='printer'>" +
                                            "<div class='row'>" +
                                                "<div class='col-md-3 text-left border_right_me'>" +
                                                    "<p>Printer</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Inkjet Printers</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> WidePage Printers</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Laser Jet Printer</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Multi-Function Printers</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> A3 Printers</a></li>" +
                                                    "</ul>" +
                                                "</div>" +                                            
                                                "<div class='col-md-3 text-left border_right_me'>" +
                                                    "<p>Scanner</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Document Scanner</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Flated Scanner</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Fax Machine</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-3 text-left border_right_me'>" +
                                                    "<p>Photoconies</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Monochrome</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Color</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-3 text-left'>" +
                                                    "<p>Ink & Toner</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Toner</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Cartridge</a></li> " +
                                                    "</ul>" +
                                                "</div>" +                                                
                                            "</div>" +
                                        "</div>");
    });
    $("#cProjector").click(function(){
        $("#personal_computer").remove();
        $("#computer_component").remove();
        $("#accessories").remove();
        $("#server").remove();
        $("#network").remove();
        $("#bettery").remove();
        $("#printer").remove();
        $("#telephone").remove();
        $("#camera").remove();
        $("#service").remove();
        $("#brand_name").remove();
        $("#sub_menu_right").append("<div id='display'>" +
                                            "<div class='row'>" +
                                                "<div class='col-md-9 text-left border_right_me'>" +
                                                    "<p>Projectors</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Home Theater Projectors</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Short Throw Projectors</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Mobile Projectors</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Value Projectors</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Professional Projectors</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Projectors Screen</a></li>" +
                                                    "</ul>" +
                                                "</div>" +                                          
                                                "<div class='col-md-3 text-left'>" +
                                                "</div>" +
                                            "</div>" +
                                        "</div>");
        
    });
    $("#cTelephone").click(function(){
        $("#personal_computer").remove();
        $("#computer_component").remove();
        $("#accessories").remove();
        $("#server").remove();
        $("#network").remove();
        $("#bettery").remove();
        $("#printer").remove();
        $("#display").remove();
        $("#camera").remove();
        $("#service").remove();
        $("#brand_name").remove();
        $("#sub_menu_right").append("<div id='telephone'>" +
                                            "<div class='row'>" +
                                                "<div class='col-md-3 text-left border_right_me'>" +
                                                    "<p>Corded Phones</p>" +             
                                                "</div>" +                           
                                                "<div class='col-md-3 text-left border_right_me'>" +
                                                    "<p>Cordless phones</p>" +               
                                                "</div>" +
                                                 "<div class='col-md-3 text-left border_right_me'>" +
                                                    "<p>PBX System</p>" +         
                                                "</div>" +                              
                                                "<div class='col-md-3 text-left'>" +
                                                    "<p>VOIP Internet Phones</p>" +
                                                "</div>" +                                                                  
                                            "</div>" +
                                        "</div>");
    });
    $("#cCamera").click(function(){
        $("#personal_computer").remove();
        $("#computer_component").remove();
        $("#accessories").remove();
        $("#server").remove();
        $("#network").remove();
        $("#bettery").remove();
        $("#printer").remove();
        $("#display").remove();
        $("#telephone").remove();
        $("#service").remove();
        $("#brand_name").remove();
        $("#sub_menu_right").append("<div id='camera'>" +
                                            "<div class='row'>" +
                                                "<div class='col-md-4 text-left border_right_me'>" +
                                                    "<p>Analog Camera</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> DVR (Digital Video Recorder)</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Bullet Camera</a></li>" +
                                                    "</ul>" +
                                                "</div>" +  
                                                "<div class='col-md-4 text-left border_right_me'>" +
                                                    "<p>IP Camera</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Bullet Camera</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Dome Camera</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> PTZ Dome Camera</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> NVR (Network Video Recorder)</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Fish-Eye IP Camera</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i>  Body Cam</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-4 text-left'>" +
                                                "</div>" +
                                            "</div>" +
                                        "</div>");
    });
    $("#cService").click(function(){
        $("#personal_computer").remove();
        $("#computer_component").remove();
        $("#accessories").remove();
        $("#server").remove();
        $("#network").remove();
        $("#bettery").remove();
        $("#printer").remove();
        $("#display").remove();
        $("#telephone").remove();
        $("#camera").remove();
        $("#brand_name").remove();
        $("#sub_menu_right").append("<div id='service'>" +
                                            "<div class='row'>" +
                                                "<div class='col-md-9 text-left border_right_me'>" +
                                                    "<p>Services</p>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Repairing</a></li>" +
                                                        "<li><a href='#'><i class='fas fa-angle-right'></i> Software Installation</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-3 text-left'>" +
                                                "</div>" +
                                            "</div>" +
                                        "</div>");
    
    });
    $("#cBrand_name").click(function(){
        $("#personal_computer").remove();
        $("#computer_component").remove();
        $("#accessories").remove();
        $("#server").remove();
        $("#network").remove();
        $("#bettery").remove();
        $("#printer").remove();
        $("#display").remove();
        $("#telephone").remove();
        $("#camera").remove();
        $("#service").remove();
        $("#sub_menu_right").append("<div id='brand_name'>" +
                                            "<div class='row'>" +
                                                "<div class='col-md-2 text-left'>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li class='m-2'><a href='#'>TOSHIBA</a></li>" +
                                                        "<li class='m-2'><a href='#'>DELL</a></li>" +
                                                        "<li class='m-2'><a href='#'>HP</a></li>" +
                                                        "<li class='m-2'><a href='#'>ACER</a></li>" +
                                                        "<li class='m-2'><a href='#'>LENOVO</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-2 text-left'>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li class='m-2'><a href='#'>ASUS</a></li>" +
                                                        "<li class='m-2'><a href='#'>NEC</a></li>" +
                                                        "<li class='m-2'><a href='#'>EPSON</a></li>" +
                                                        "<li class='m-2'><a href='#'>SUPERMICRO</a></li>" +
                                                        "<li class='m-2'><a href='#'>PROLINK</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-2 text-left'>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li class='m-2'><a href='#'>TRANSCAND</a></li>" +
                                                        "<li class='m-2'><a href='#'>RAZER</a></li>" +
                                                        "<li class='m-2'><a href='#'>LOGITECH</a></li>" +
                                                        "<li class='m-2'><a href='#'>EG</a></li>" +
                                                        "<li class='m-2'><a href='#'>ANITECH</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                                "<div class='col-md-2 text-left'>" +
                                                    "<ul class='per-computer'>" +
                                                        "<li class='m-2'><a href='#'>PLANET</a></li>" +
                                                        "<li class='m-2'><a href='#'>APPLE</a></li>" +
                                                        "<li class='m-2'><a href='#'>AMP</a></li>" +
                                                        "<li class='m-2'><a href='#'>VAIO</a></li>" +
                                                        "<li class='m-2'><a href='#'>MICROSOFT</a></li>" +
                                                    "</ul>" +
                                                "</div>" +
                                            "</div>" +
                                        "</div>");
    });
    
//Sart menu left
//     $("#li_menu_1").mouseover(function(){
// //       alert("Hello") ;
//         $("#show_menu1").fadeIn(60);
//     });
//     $("#li_menu_1").mouseleave(function(){
// //       alert("Hello") ;
//         $("#show_menu1").fadeOut(60);
//     });
//      $("#li_menu_2").mouseover(function(){
// //       alert("Hello") ;
//         $("#show_menu2").fadeIn(60);
//     });
//     $("#li_menu_2").mouseleave(function(){
// //       alert("Hello") ;
//         $("#show_menu2").fadeOut(60);
//     });
    
    
//End menu left   
     
    
});