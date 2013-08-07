 
 function initialize() {

     var mapOptions = {
         zoom: 20,
         center: new google.maps.LatLng(22.76758770, 120.37921390),
         mapTypeId: google.maps.MapTypeId.ROADMAP
     }

     var map = new google.maps.Map(document.getElementById("map"),
                   mapOptions);
};

 function btnClick(){
     if (address.value.length >= 1)
     {
         $.ajax({
             type: "post",
             dataType: "json",
             url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address.value + "&sensor=false&language=zh-tw",
             success: function (data)
             {

                 if (data.status == "OK")
                 {
                     var mapOptions = {
                         zoom: 16,
                         center: new google.maps.LatLng(data.results[0].geometry.location.lat,
                      data.results[0].geometry.location.lng),
                         mapTypeId: google.maps.MapTypeId.ROADMAP
                     }

                     var map = new google.maps.Map(document.getElementById("map"),
                   mapOptions);
                 }
                 else
                 {
                     alert("沒有地圖資料");
                 }
             },
             error: function ()
             {
                 alert("資料錯誤");
             }
         });
     }
     else
     {
         alert("請輸入正確地址");
         document.getElementById('#address').focus()
     }
};