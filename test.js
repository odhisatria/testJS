 <script>
/*field ids*/
var dropdown_cid = '25540687';
var textarea_cid = '25540688';
var phone_cid = '25540649';

/* Form ids */
var numeric_validation_form_id = "2443556";
var dropdown_textarea_form_id = "2446227";
var image_form_id = "2443556";
var thank_you_alert_form_id = "2443556";

$(document).ready(function (e) {

    if(window.location.href.indexOf(dropdown_textarea_form_id) > -1) {
        $('#id123-control'+dropdown_cid).change(function () {
            fill_textarea($(this).val());
        });
    }

    if(window.location.href.indexOf(numeric_validation_form_id) > -1) {
        $('*[id^="id123-control'+phone_cid+'"]').keypress(function (event) {
            phone_number_actions();
        });
    }
    if(window.location.href.indexOf(thank_you_alert_form_id) > -1) {
        $('#id123-thankyou').css("color","#2BAF2B");
    }

});

if(window.location.href.indexOf(image_form_id) > -1) {
    $('img').on("dblclick", function (event) {
        $(this).css("width", "980px");
        $(this).css("z-index", "100000");
        $(this).css("position", "relative");
        $(this).css("margin-left", "-70px");
		var parent_c = $(this).closest(".fieldcontainer.currentPageActive");
        $(".fieldcontainer.currentPageActive").not(parent_c).css("-webkit-opacity", "0.3");
        $(".fieldcontainer.currentPageActive").not(parent_c).css("-moz-opacity", "0.3");
        $(".fieldcontainer.currentPageActive").not(parent_c).css("opacity", "0.3");
        $(".fieldcontainer.thebuttons").not(parent_c).css("-webkit-opacity", "0.3");
        $(".fieldcontainer.thebuttons").not(parent_c).css("-moz-opacity", "0.3");
        $(".fieldcontainer.thebuttons").not(parent_c).css("opacity", "0.3");
        var resize = 200; // resize amount in percentage
        var origH = 132;  // original image height
        var origW = 198; // original image width
        var mouseX = event.x;
        var mouseY = event.y;
        var newH = origH * (resize / 100);
        var newW = origW * (resize / 100);

        // Set the new width and height
        $('.uberfieldlat').css("height", newH);
        $('.uberfieldlat').css("width", newW);
    });

   // $('img').on("click", function () {
      //  $(this).css("width", "inherit");
      //  $(this).css("z-index", "auto");
       // $(this).css("margin-left", "initial");
      //  $(".fieldcontainer.currentPageActive").css("-webkit-opacity", "1");
       // $(".fieldcontainer.currentPageActive").css("-moz-opacity", "1");
       // $(".fieldcontainer.currentPageActive").css("opacity", "1");
       // $(".fieldcontainer.thebuttons").css("-webkit-opacity", "1");
      //  $(".fieldcontainer.thebuttons").css("-moz-opacity", "1");
      //  $(".fieldcontainer.thebuttons").css("opacity", "1");
      //  $('.uberfieldlat').css("height", 132);
      //  $('.uberfieldlat').css("width", 198);
  //  });
}
function phone_number_actions(){
    var keycode = event.which;
    if (!(event.shiftKey == false && (keycode == 46 || keycode == 8 || keycode == 37 || keycode == 39 || (keycode >= 48 && keycode <= 57)))) {
        alert("Please insert only numeric values.");
        event.preventDefault();
    }
}

function fill_textarea(val)
{
    val = $( '#id123-control'+dropdown_cid ).val();
    switch(val) {
        case "Request":
            $( '#id123-control'+textarea_cid ).css("background-color","#2BAF2B");
            $( '#id123-control'+textarea_cid ).css("color","white");
            break;
        case "Proposal":
            $( '#id123-control'+textarea_cid ).css("background-color","#1BA8CE");
            $( '#id123-control'+textarea_cid ).css("color","white");
            break;
        case "Suggestion":
            $( '#id123-control'+textarea_cid ).css("background-color","#FFC83E");
            $( '#id123-control'+textarea_cid ).css("color","#4C4C4C");
            break;
        default:
            $( '#id123-control'+textarea_cid ).css("background-color","#FFE9E9");
            $( '#id123-control'+textarea_cid ).css("color","#4C4C4C");
    }
    var textarea_message_value = 'This is a demo message for subject "'+val+'", adding a nice background color and a suited font color.';
    $( '#id123-control'+textarea_cid ).val( textarea_message_value ) ;
  </script>
