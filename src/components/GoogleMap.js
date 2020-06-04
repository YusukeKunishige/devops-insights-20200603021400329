function initMap() {
        var myLatlng = {lat: -40.9006, lng: 174.8860};

        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 7, center: myLatlng});
          
        // Configure the click listener.
        map.addListener('click', function(mapsMouseEvent) {

          // Create a new InfoWindow.
          var infoWindow = new google.maps.InfoWindow({position: mapsMouseEvent.latLng});
          infoWindow.setContent(mapsMouseEvent.latLng.toString());
          infoWindow.open(map);
        });
      }