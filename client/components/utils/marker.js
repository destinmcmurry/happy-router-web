
const makeBarMarker = (map, coords) => {
  map.loadImage('/images/bar-icon.png', (error, image) => {
      if (error) throw error;
      map.addImage(''+coords, image);
      map.addLayer({
        id: ''+coords+'marker',
        type: "symbol",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features:[{
              "type":"Feature",
              'properties': {
                "description": "<h4>bar name</h4><p><a href=\"localhost:5050/results-map/single-result/1\"target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>",
              },
              "geometry":{
                "type":"Point",
                "coordinates": coords 
              }}]}
        },
        layout: {
          "icon-image": ''+coords,
        }
      });
    });

    // doesnt work..
    
  //   map.on('click', ''+coords+'marker', function (e) {
  //     var coordinates = e.features[0].geometry.coordinates.slice();
  //     var description = e.features[0].properties.description;

  //     new mapboxgl.Popup()
  //         .setLngLat(coordinates)
  //         .setHTML(description)
  //         .addTo(map);
  // });

}

export default makeBarMarker;