//an array ready to fill with points and the data array of sightings!
//function initMap() {
	
	var poiArray = [];

var markerData = [
["FC-01",45.1,-93.1,"Moose"],
["FC-02",45.2,-93.2,"Cougar"]
];

//design a marker image, in this case a white cross

var image = new google.maps.MarkerImage("http://snippets.sparkgeo.com/pics/labels/white-cross.png",
new google.maps.Size(10,10),
new google.maps.Point(0,0),
new google.maps.Point(0,0));			

//pull in each marker to the map and give it the icon and the label it…
//note, content comes from my data array, the class references the style class (above, nice!)
//anchor puts it in the right place and label style allows us to make any style amendments we want to make, like opacity 

for (var i = 0; i < markerData.length; i++) {
var animal = markerData[i];
var myLatLng = new google.maps.LatLng(animal[2], animal[1]);
var marker = new MarkerWithLabel({
  clickable: false,
  draggable: false,
  position: myLatLng,
  map: map,
  icon: image,
  labelContent: animal[3],
  labelClass: "labels",
  labelAnchor: new google.maps.Point(-10,0),
  labelStyle: {opacity:0.8}

});
  poiArray.push(marker);
}

//}

//}
//  const locations = [
//  { lat: 45.1, lng: -93.1 },
//  { lat: 45.101, lng: -93.105 },
//  { lat: 48.1, lng: -94.1 },
//  { lat: 45.1, lng: -95.1 },
//  { lat: 45.1043, lng: -93.105 },
//  { lat: 47.11, lng: -95.7 },
//];
//
//  
//var data = [];
//function loadData() {
//	$.getJSON('equipmentData.json', function (data) {
//    $.each(data.equipment, function(i, f) {
//      var tblData = "<tr><td>Serial Number: </td><td>" + f.serialNumber + "</td></tr>" + 
//                   	"<tr><td>City: </td><td>" + f.city + "</td></tr>" + 
//                   	"<tr><td>County: </td><td>" + f.county + "</td></tr>" +
//      							"<tr><td>Segment: </td><td>" + f.segment + "</td></tr>" +
//      							"<tr><td>Type: </td><td>" + f.type + "</td></tr>"+
//      							"<tr><td>Start Time: </td><td>" + f.startTime + "</td></tr>";
//      $(tblData).appendTo(".equipmentTable tbody");
//     });
//
//   });
//  };
    