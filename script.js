require(["esri/Map", "esri/views/MapView"], function(Map, MapView){
    let map1 = new Map({basemap:"topo"});
    let map2 = new Map({basemap: "streets"})
    let mapContainer = new MapView({
        container: "mapview",
        map: map2,
        center: [22.56, 51.25],
        zoom: 13
    });
    let przycisk = document.getElementById("przycisk");
});