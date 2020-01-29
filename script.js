
// require(["esri/Map", "esri/views/MapView", 'esri/WebMap', "esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery"], function(Map, MapView, WebMap, BasemapToggle, BasemapGallery){
//     let map1 = new Map({basemap:"satellite"});
//     let map2 = new Map({basemap: "topo"});
//     let map3 = new Map({basemap: "osm"});
//     let map4 = new WebMap({
//         portalItem:{
//             id:'204c475d92b54c03a015db7ae52738e8'
//         }
//     });
//     let przycisk1 = document.getElementById("przycisk1");
//     let przycisk2 = document.getElementById("przycisk2");
//     let przycisk3 = document.getElementById("przycisk3");
//     let przycisk4 = document.getElementById('przycisk4');
//     let basemapToggle = new BasemapToggle({
//         view: view,
//         nextBasemap: "satellite"
//     });



//     let mapContainer = new MapView({
//         container: "mapview",
//         map: map1,
//         center: [22.56, 51.25],
//         zoom: 13
//     });
//     var basemapGallery = new BasemapGallery({
//         view: mapContainer,
//         source: {
//           portal: {
//             url: "https://www.arcgis.com",
//             useVectorBasemaps: true  // Load vector tile basemaps
//           },
//         }
//       });


//     mapContainer.ui.add(basemapGallery, "top-right");
  

//     przycisk4.addEventListener('click', function(){
//         mapContainer.map = map4;
//     })
//     przycisk1.addEventListener('click', function(){
//         mapContainer.map=map1;

//     })

//     przycisk2.addEventListener('click', function(){
//         mapContainer.map = map2;
//     })
//     przycisk3.addEventListener('click', function(){
//        mapContainer.map = map3
//     })
    

// });

require([
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
    "esri/layers/GraphicsLayer",
    "esri/widgets/Sketch",
    "esri/layers/FeatureLayer"
  ], function(Map, MapView, BasemapToggle, BasemapGallery, GraphicsLayer, Sketch, FeatureLayer) {
var graphicsLayer = new GraphicsLayer();
    var map = new Map({
        basemap: "topo-vector",
        layers: [graphicsLayer]
    });
    
    var view = new MapView({

        container: "viewDiv",
        map: map,
        center: [-118.80543,34.02700],
        zoom: 13
    });
    
    
    var basemapGallery = new BasemapGallery({
      view: view,
      source: {
        portal: {
          url: "http://www.arcgis.com",
          useVectorBasemaps: true,
        },
      } 
    });

    view.ui.add(basemapGallery, "top-right"); 

         
    
      
         
    var sketch = new Sketch({
        view: view,
        layer: graphicsLayer
    });
   
    view.ui.add(sketch, "top-right");  

    var trailheadsLayer = new FeatureLayer({
        url:"https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
    });

    map.add(trailheadsLayer);
         
    
  });


