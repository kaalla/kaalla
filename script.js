
require(["esri/Map", "esri/views/MapView", 'esri/WebMap'], function(Map, MapView, WebMap){
    let map1 = new Map({basemap:"satellite"});
    let map2 = new Map({basemap: "topo"});
    let map3 = new Map({basemap: "osm"});
    let map4 = new WebMap({
        portalItem:{
            id:'204c475d92b54c03a015db7ae52738e8'
        }
    });
    let przycisk1 = document.getElementById("przycisk1");
    let przycisk2 = document.getElementById("przycisk2");
    let przycisk3 = document.getElementById("przycisk3");
    let przycisk4 = document.getElementById('przycisk4');



    let mapContainer = new MapView({
        container: "mapview",
        map: map4,
        center: [22.56, 51.25],
        zoom: 13
    });

    przycisk4.addEventListener('click', function(){
        mapContainer.map = map4;
    })
    przycisk1.addEventListener('click', function(){
        mapContainer.map=map1;

    })

    przycisk2.addEventListener('click', function(){
        mapContainer.map = map2;
    })
    przycisk3.addEventListener('click', function(){
        mapContainer.map = map3
    })
    

});



