
window.jQuery || document.write('jquery-1.12.0.min.js')
$(document).ready();

var countTennis = 0;
var countSoccer = 0;
var countBasketball = 0;
var countGolf = 0;




$('#btnTennis').click(function () {
    var t = parseInt($('#tennisC').val());
    countTennis = t + 1;
    $("#tennisC").val(countTennis);
});
$("#btnSoccer").click(function () {
    var s = parseInt($('#soccerC').val());
    countSoccer = s + 1;
    $("#soccerC").val(countSoccer);
});
$("#btnBasketball").click(function () {
    var b = parseInt($('#basketballC').val());
    countBasketball = b + 1;
    $("#basketballC").val(countBasketball);
});
$("#btnGolf").click(function () {
    var g = parseInt($('#golfC').val());
    countGolf = g + 1;
    $("#golfC").val(countGolf);
});
$('#btnTennis-').click(function () {
    var t = parseInt($('#tennisC').val());
    if (t > 0) {
        countTennis = t - 1;
        $("#tennisC").val(countTennis);
    }
});
$("#btnSoccer-").click(function () {
    var s = parseInt($('#soccerC').val());
    if (s > 0) {
        countSoccer = s - 1;
        $("#soccerC").val(countSoccer);
    }
});
$("#btnBasketball-").click(function () {
    var b = parseInt($('#basketballC').val());
    if (b > 0) {
        countBasketball = b - 1;
        $("#basketballC").val(countBasketball);
    }
});
$("#btnGolf-").click(function () {
    var g = parseInt($('#golfC').val());
    if (g > 0) {
        countGolf = g - 1;
        $("#golfC").val(countGolf);
    }
});







var products = {

    'tennisJ': countTennis,
    'soccerJ': countSoccer,
    'basketballJ': countBasketball,
    'golfJ': countGolf
};

$(".btn ,.btn-primary").click(function () {
    var g = parseInt(countBasketball + countGolf + countSoccer + countTennis);

    $("#lblCart").empty();
    $("#lblCart").append(g);
});

function ToCart() {
     window.location.href = "ViewCartPage.html";
}


function setOrderCookie() {
    document.cookie = "tennis=" + document.getElementById("tennisC").value;
    document.cookie = "soccer=" + document.getElementById("soccerC").value;
    document.cookie = "basketball=" + document.getElementById("basketballC").value;
    document.cookie = "golf=" + document.getElementById("golfC").value;
}


function getOrderCookie() {
    if (document.cookie.length != 0) {

        var cookiesArray = document.cookie.split("; ");

        for (var i = 0; i < cookiesArray.length; i++) {
            var nameValueArray = cookiesArray[i].split("=");
            if (nameValueArray[0] == "tennis" ) {
               
                document.getElementById("tennisC1").value = nameValueArray[1];
                
            } else if (nameValueArray[0] == "soccer") {
                
                document.getElementById("soccerC1").value = nameValueArray[1];
            } else if (nameValueArray[0] == "basketball") {
                                
                document.getElementById("basketballC1").value = nameValueArray[1];
            }
            else if (nameValueArray[0] == "golf" ) {
               
                document.getElementById("golfC1").value = nameValueArray[1];
            }
        }    
    }


    else {
        alert("No items in cart!");
        window.location.href = "ProductPage.html";
    }
}

function multiCall()
{
    setOrderCookie();
    ToCart();

}


