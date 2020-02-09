  var map = L.map('map').setView([1,1],2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{noWrap: true,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      var someFeatures = [{
        "type": "Feature",
        "properties": {
            "name": "Garden of Gethsemane, Jerusalem Israel",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [35.2137,31.7683]
        }
    }];
    
    L.geoJSON(someFeatures, {
        filter: function(feature, layer) {
            return feature.properties.show_on_map;
        }
    }).addTo(map);

    L.circle([98.5, -84.54], {color: "red",radius: 200}).addTo(map);
    L.circle([-88.5, 74.54], {radius: 200}).addTo(map);
    