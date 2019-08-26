jQuery.getJSON("https://gist.githubusercontent.com/sixthroadconsulting/06fb6c6081d7605ec05d332cdff5ae06/raw/9f385adcbeadd6a4a6caaa780659dd62243717ed/pak_districts.json", function(data) {
  
  // convert GeoJSON to JavaScript Maps comptible object
  var mapVar = AmCharts.parseGeoJSON(data);
  
  // create the map
  var map = AmCharts.makeChart("chartdiv", {
    "type": "map",
    "theme": "light",
    "dataProvider": {
      "mapVar": mapVar,
      "getAreasFromMap": true
    },
    "areasSettings": {
      "color": "#00226b",
      "autoZoom": true,
      "selectedColor": "#00327b"
    }
  });
  
});

/**
 * Convert GeoJSON to SVG
 */
AmCharts.parseGeoJSON = function(geojson, fieldMap) {
  
  // init field map
  if (typeof(fieldMap) !== "object")
    fieldMap = {};
  
  // init calibration
  var bounds = {
    "left": -180,
    "bottom": -90,
    "right": 180,
    "top": 90
  };
  
  // init empty map
  var mapVar = {
    "svg": {
      "defs": {
        "amcharts:ammap": {
          "projection":"mercator",
          "leftLongitude":"-180",
          "topLatitude":"90",
          "rightLongitude":"180",
          "bottomLatitude":"-90"
        }   
      },
      "g":{
        "path":[]
      }
    }
  };
  
  // convert GeoJSON to SVG paths
  var converter = geojson2svg({
    "output": "svg",
    "explode": false,
    "attributes": {"class": "land"},
    "mapExtent": bounds,
    "viewportSize": {
      "width": 800,
      "height": 800
    }
  });
  var svg = converter.convert(geojson, {});
  // parse each path into JavaScript Maps data structure
  for(var i = 0; i < svg.length; i++) {
    var path = svg[i];
    var attrs = path.match(/\w+=".*?"/g);
    var area = {};
    for(var x = 0; x < attrs.length; x++) {
      var parts = attrs[x].replace(/"/g, '').split("=");
      var key = fieldMap[parts[0]] || parts[0];
      area[key] = parts[1];
    }
    //added for hover-over balloons
    area["title"] = area["id"];
    mapVar.svg.g.path.push(area);
  }
  
  return mapVar;
}