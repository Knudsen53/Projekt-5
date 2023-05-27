console.log("hejsa opaldestatoiner");

function initMap() {
    console.log('initiii')
    const map = new google.maps.Map(document.getElementById("myGoogleMaps"), {
        center: {lat: 56.26392, lng: 9.501785},
        zoom: 10,
        minZoom: 3,
    });
    console.log(map)
}