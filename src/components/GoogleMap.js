function GoogleMap() {
	return (
<<<<<<< HEAD
=======
	<div>
>>>>>>> 08579863dcdaa872b6af9ae2c6323bca702b66aa
	<div id="map"></div>
    <script>
      function initMap() {
        var myLatlng = {lat: -40.9006, lng: 174.8860};

        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 7, center: myLatlng});
          
        map.addListener('click', function(mapsMouseEvent) {

          var infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
          infoWindow.setContent(mapsMouseEvent.latLng.toString());
          infoWindow.open(map);
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC-TQvCUYWNNIKtZH7d1nvYntfAuPXWwo0&callback=initMap">
    </script>
<<<<<<< HEAD
=======
    </div>
>>>>>>> 08579863dcdaa872b6af9ae2c6323bca702b66aa
	)
}

export default GoogleMap