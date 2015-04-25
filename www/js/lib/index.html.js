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

                var center = new google.maps.LatLng(43.133350, -80.339225);
                var p1 = new google.maps.LatLng(43.152448, -80.318157);
                var p2 = new google.maps.LatLng(43.170471, -80.299977);
                var p3 = new google.maps.LatLng(43.123042, -80.350052);
                var p4 = new google.maps.LatLng(43.103372, -80.363738);

                function calcDistance(p1, p2) {
                    return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
                }

                var distanceTofirstPoint=(calcDistance(center, p1));
                var distanceToSecondPoint=(calcDistance(center, p2));
                var distanceToThirdPoint=(calcDistance(center, p3));
                var distanceToFourthPoint=(calcDistance(center, p4));

        infowindows = [new google.maps.InfoWindow({
            content: "<b>Brantford Flight Center</b><br/> Center of Runway <br/>Coordinates: 43.133350, -80.339225"
        }), new google.maps.InfoWindow({
            content: "<b>Grand River Bridge</b><br/>Distance from center: " + distanceTofirstPoint + " km <br/>Coordinates: 43.152448, -80.318157<br/>"
        }),new google.maps.InfoWindow({
            content: "<b>403 Clover Leaf</b><br/>Distance from center: " + distanceToSecondPoint + " km <br/>Coordinates: 43.170471, -80.299977<br/>"
        }),new google.maps.InfoWindow({
            content: "<b>White Roof - Colborne Street Farm</b><br/>Distance from center: " + distanceToThirdPoint + " km <br/>Coordinates: 43.123042, -80.350052<br/>"
        }),new google.maps.InfoWindow({
            content: "<b>Godby Road Pond</b><br/>Distance from center: " + distanceToFourthPoint + " km <br/>Coordinates: 43.103372, -80.363738<br/>"
        })];
        for (var n = 0; n < markers.length; n++) {
            google.maps.event.addListener(markers[n], "click",
                                          jQuery.proxy(function (evt) {
                infowindows[this.n].open(map, markers[this.n]);
            }, {n:n} ));
        }
    };
});
