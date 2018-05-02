
const makeBarMarker = (map, coords, name) => {
    map.addLayer({
      id: name+'-marker',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features:[{
            'type':'Feature',
            'geometry':{'type':'Point',
            'coordinates': coords }}]}
      },
      layout: {
        'icon-image': 'bar',
        'icon-size': .1
      }
    });

  };
    

export default makeBarMarker;