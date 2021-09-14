const mapStyle = [{
    'featureType': 'administrative',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'on',
    },
    {
      'lightness': 33,
    },
    ],
  },
  {
    'featureType': 'landscape',
    'elementType': 'all',
    'stylers': [{
      'color': '#f2e5d4',
    }],
  },
  {
    'featureType': 'poi.park',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#c5dac6',
    }],
  },
  {
    'featureType': 'poi.park',
    'elementType': 'labels',
    'stylers': [{
      'visibility': 'on',
    },
    {
      'lightness': 20,
    },
    ],
  },
  {
    'featureType': 'road',
    'elementType': 'all',
    'stylers': [{
      'lightness': 20,
    }],
  },
  {
    'featureType': 'road.highway',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#c5c6c6',
    }],
  },
  {
    'featureType': 'road.arterial',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#e4d7c6',
    }],
  },
  {
    'featureType': 'road.local',
    'elementType': 'geometry',
    'stylers': [{
      'color': '#fbfaf7',
    }],
  },
  {
    'featureType': 'water',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'on',
    },
    {
      'color': '#acbcc9',
    },
    ],
  },
  ];

  /* function initMap()  {
    const home = { lat: 50.8129259, lng: 3.332698 };

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: home,
    });

    const marker = new google.maps.Marker({
        position: home,
        map: map,
    });
*/
    function initMap() {
  // Create the map.
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: { lat: 50.8129259, lng: 3.332698 },
  });
 
    // Load the stores GeoJSON onto the map.
    map.data.loadGeoJson('location.json', {idPropertyName: 'tag'});

    const apiKey = 'AIzaSyCd097yoP0Le6Qa2-JctA8ZQSjq1UTEF60';
    const infoWindow = new google.maps.InfoWindow();

    // Show the information for a store when its marker is clicked.
    map.data.addListener('click', (event) => {
        const devEui = event.feature.getProperty('devEui');
        // const tag = event.feature.getProperty('tag');
        const timestamp = event.feature.getProperty('timestamp');        
        const position = event.feature.getGeometry().get();
        const content = `
                        <h2>${devEui}</h2><p>${timestamp}</p>`;

            infoWindow.setContent(content);
            infoWindow.setPosition(latitude);
            infoWindow.setPosition(longitude);
            infoWindow.setOptions({pixelOffset: new google.maps.Size(0, -30)});
            infoWindow.open(map);
    });
}