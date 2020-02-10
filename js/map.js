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
    }, {
        "type": "Feature",
        "properties": {
            "name": "Greenville, MI",
            "show_on_map": true
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-85.2908369,43.1825601]
        }
    }];
    
    L.geoJSON(someFeatures, {
        filter: function(feature, layer) {
            return feature.properties.show_on_map;
        }
    }).addTo(map);

    L.circle([41.799089, 12.7067611], {color: "red",radius: 200}).addTo(map);
    L.circle([55.580748,36.8251174], {radius: 200}).addTo(map);
    