define(["jquery", "async!//maps.google.com/maps/api/js?sensor=false"], function(jQuery){
    return function(){
        var myOptions = {
            zoom: 14,
            center: new google.maps.LatLng(43.133350, -80.339225),
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            scrollwheel: false
        };
        map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
        markers = [new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(43.133350, -80.339225)
        }), new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(43.152448, -80.318157)
        }), new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(43.170471, -80.299977)
        }), new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(43.123042, -80.350052)
        }), new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(43.103372, -80.363738)
        })];
        infowindows = [new google.maps.InfoWindow({
            content: "<b>Brantford Flight Center</b><br/> Center of Runway <br/>43.133350, -80.339225"
        }), new google.maps.InfoWindow({
            content: "<b>Grand River Bridge</b><br/> Center of Runway <br/>43.133350, -80.339225"
        }),new google.maps.InfoWindow({
            content: "<b>403 Clover Leaf</b><br/> Center of Runway <br/>43.133350, -80.339225"
        }),new google.maps.InfoWindow({
            content: "<b>White Roof - Colborne Street Farm</b><br/> Center of Runway <br/>43.133350, -80.339225"
        }),new google.maps.InfoWindow({
            content: "<b>Godby Road Pond</b><br/> Center of Runway <br/>43.133350, -80.339225"
        })];
        for (var n = 0; n < markers.length; n++) {
            google.maps.event.addListener(markers[n], "click",
                                          jQuery.proxy(function (evt) {
                infowindows[this.n].open(map, markers[this.n]);
            }, {n:n} ));
        }
    };
});
