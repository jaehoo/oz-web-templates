var rutaBlankImg = 'img/blank.gif';

function otro(){
    $("#TEST").fadeIn(400);
    $("#TEST1").draggable();

}

function view(){
    var el=$("#TEST");

    if (el.is(':hidden')){
        el.fadeIn(400);
        if (window.PIE) { $("#TEST").each(function() {PIE.attach(this);});    }
    }else{
        el.fadeOut(400);
    }
    //$("#TEST1").draggable();
}

function otradiv(){
    var newDiv =$(document.createElement('div')).attr("class", 'estilojs');
    var newImg =$(document.createElement('span'));

    //newDiv.html('<span class="logo pngFix" style="behavior: url(js/iepngfix.htc);">&nbsp;</span>');
    //newImg.attr('id','logo');
    newImg.addClass('logo_oz pngFix');
    newDiv.append(newImg);
    newDiv.appendTo("#TextBoxesGroup");

    if (window.PIE) { newDiv.each(function() {PIE.attach(this);});    }
    if (window.IEPNGFix) {
        //IEPNGFix.update();
        newImg.css("behavior", "url(js/iepngfix.htc)");
        //IEPNGFix.tileBG(newImg, 'blank.gif');
    }


    // Dinnamic images AJAX
//    newImg.each(function(){
//        $(this).css("filter", "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + $(this).attr('src') + "', sizingMethod='scale')").attr("src", "blank.gif");
//    });
//    newImg.each(function(){
//        var bg = $(this).css("backgroundImage");
//        bg.match(/^url[("']+(.*\.png)[)"']+$/i);
//        bg = RegExp.$1;
//        $(this).css("filter", "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + bg + "', sizingMethod='crop')").css("backgroundImage", "none");
//    });

}

function loadDoc(){
}

function ieLoader(){
    Modernizr.load({
        load: ['ielt8!css/style-ie.css'
            //,'ielt9!js/html5.js'
            //,'ielt9!js/PIE.js'

        ]
        , callback: function (url, result, key) {

            alert('script.js has loaded!');
            if (window.PIE) {
                $('.estilojs').each(function() {
                    PIE.attach(this);
                });
            }
        }
    });

}

function idxevents(){
    $(document).ready(function (){
        $('#viewbtn').click(function() { view(); });
        $('#addother').unbind("click").click(function(){  otradiv();});

    });

}

function loaderJs(){
    $(function(){

//     Modernizr.load({
//         load: 'ielt9!js/html5.js'
//         ,callback: function (url, result, key) {
//             alert("html5 ready");
//         }
//        }
//             );
        // Load ie styles
        Modernizr.load('ielt9!ie9!css/dashboard/style-ie.css');

        Modernizr.load({
            test: Modernizr.cssgradients,
            yep: 'js/jquery.css3finalize.min.js',
            nope: '',
            callback: function (url, result, key) {
                alert('script.js has loaded!:'+result);
            }
        });



        // Load ie styles ccsPie
        Modernizr.load([
            {    // one call for element
                load: [
                    //'js/jquery.css3finalize.min.js'
                    //'ielt9!js/PIE.js'
                    //,'ielt9!js/iepngfix_tilebg.js'
                ]
                , callback: function (url, result, key) {
                alert('script.js has loaded!:'+ url);

                if (url === 'js/PIE.js') {
                    if (window.PIE) {
//                        $('.estilojs').each(function() {
//                            PIE.attach(this);
//                        });
                    }
                }
                else if(url === 'js/iepngfix_tilebg.js'){
                    if(window.IEPNGFix){

//                        clearTimeout(IEPNGFix.update.timer);
//		                IEPNGFix.update.timer = setTimeout(IEPNGFix.update, 100);
                    }
                }



            }
            }
        ]);

//        if (window.PIE) {
//            $('.estilojs').each(function() {
//                PIE.attach(this);
//            });
//        }
    });

}
function page(){
    $(function(){


        // Load ie styles
        Modernizr.load('ielt9!ie9!css/page/style-ie.css');

        Modernizr.load({
            test: Modernizr.cssgradients,
            yep: 'js/jquery.css3finalize.min.js',
            nope: '',
            callback: function (url, result, key) {
                //alert('script.js has loaded!:'+result);
            }
        });


    });
}

