var Tarkomia = new google.maps.LatLng(31.5848996, 34.9753847);
var Meithar = new google.maps.LatLng(31.3435126, 34.9357407);
var HOZSH = new google.maps.LatLng(32.3645887, 35.5279336);
var LA = new google.maps.LatLng(31.6881002, 34.9862989);
var HIT = new google.maps.LatLng(32.2894619, 35.0802272);


function initialize() {

    var homeIcon = '../icons/Untitled-1.png';
    var cinemaIcon = '../icons/Untitled-1.png';
    var fitnessIcon = '../icons/Untitled-1.png';
    var workIcon = '../icons/Untitled-1.png';
    var hitIcon = '../icons/Untitled-1.png';

    var directionsDisplay = new google.maps.DirectionsRenderer;
    var directionsService = new google.maps.DirectionsService;

    var mapOptions = {
        center: Tarkomia,
        zoom:9,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("myGoogleMap"), mapOptions);

    directionsDisplay.setMap(map);
    directionsService.route({
        origin: Tarkomia,
        destination: HIT,
        travelMode: 'DRIVING'
    },
     function (response, status) {
         if (status == 'OK') {
             directionsDisplay.setDirections(response);
         } else {
             window.alert('Directions request failed due to ' + status);
         }
     });

    var HomeMarker = new google.maps.Marker({
        position: Tarkomia,
        animation: google.maps.Animation.DROP,
        icon: homeIcon

    });
    HomeMarker.setMap(map);

    var CinemaMarker = new google.maps.Marker({
        position: Meithar,
        animation: google.maps.Animation.DROP,
        icon: cinemaIcon
    });
    CinemaMarker.setMap(map);

    var FitnessMarker = new google.maps.Marker({
        position: HOZSH,
        animation: google.maps.Animation.DROP,
        icon: fitnessIcon
    });
    FitnessMarker.setMap(map);

    var WorkMarker = new google.maps.Marker({
        position: LA,
        animation: google.maps.Animation.DROP,
        icon: workIcon
    });
    WorkMarker.setMap(map);

    var HITMarker = new google.maps.Marker({
        position: HIT,
        animation: google.maps.Animation.DROP,
        icon: hitIcon
    });
    HITMarker.setMap(map);


    var infowindow = new google.maps.InfoWindow({
        content: "מעבר תרקומיא"
    });

    google.maps.event.addListener(HomeMarker, 'click', function () {
        infowindow.open(map, HomeMarker);
    });


    var infowindow2 = new google.maps.InfoWindow({
        content: "מעבר מיתר"
    });

    google.maps.event.addListener(CinemaMarker, 'click', function () {
        infowindow2.open(map, CinemaMarker);
    });


    var infowindow3 = new google.maps.InfoWindow({
        content: "מעבר חוצות שומרון"
    });

    google.maps.event.addListener(FitnessMarker, 'click', function () {
        infowindow3.open(map, FitnessMarker);
    });

    var infowindow4 = new google.maps.InfoWindow({
        content: "מעבר הלה"
    });

    google.maps.event.addListener(WorkMarker, 'click', function () {
        infowindow4.open(map, WorkMarker);
    });

    var infowindow5 = new google.maps.InfoWindow({
        content: "מעבר תאנים"
    });

    google.maps.event.addListener(HITMarker, 'click', function () {
        infowindow5.open(map, HITMarker);
    });

   
}
    google.maps.event.addDomListener(window, 'load', initialize);
