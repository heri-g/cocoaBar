/**
 * Created by herigutierrez on 8/1/17.
 */
$('a[href*=\\#]').on('click', function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1400);
});


// Stellar.js code
$.stellar({
    horizontalScrolling: false,
    responsive: true
});

//MAPS
let map;
// let label = 'A';
let cocoaBar = {lat: 40.720866, lng: -73.984446};

    function initMap() {


        map = new google.maps.Map(document.getElementById('map'), {
            center: cocoaBar,
            zoom: 15
        });

  let markerImage = '../img/cocoabar/coffee2.png';
    let marker = new google.maps.Marker({
        position: cocoaBar,
        map: map,
        title: 'Cocoa Bar',
        // label: label,
        icon: markerImage
    });
}

// let map;
// function initMap() {
//     let myLatLng = {lat: 40.720866, lng: -73.984446};
//
//     map = new google.maps.Map(document.getElementById('map'), {
//         center: {lat: 40.720866, lng: -73.984446},
//         zoom: 15
//     });
//
// }