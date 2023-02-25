//Initialize and add the map
function initMap() {
	// Locations of markers
	const mapCenter = { lat: 46.3, lng: -93.5 };
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	// The map, centered at mapCenter
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 6.9,
		center: mapCenter,
	});
	
	// The markers
	const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
	
	for( var i = 0; i < markers.length; i++ ) {
    google.maps.event.addListener(markers[i], 'mouseover', 
    	function () {
    		loadData();
        $(".chart1").show();
    	});
    google.maps.event.addListener(markers[i], 'mouseout', 
      function () {
    		$( ".equipmentTable tbody" ).empty();
        $(".chart1").hide();
      });
    google.maps.event.addListener(markers[i], 'click', 
      function () {
    	window.open("detail.html", '_blank').focus()
      });
	}
	
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  
}


const locations = [
  { lat: 45.1, lng: -93.1 },
  { lat: 45.101, lng: -93.105 },
  { lat: 48.1, lng: -94.1 },
  { lat: 45.1, lng: -95.1 },
  { lat: 45.1043, lng: -93.105 },
  { lat: 47.11, lng: -95.7 },
];

  
var data = [];
function loadData() {
	$.getJSON('json/equipmentData.json', function (data) {
    $.each(data.equipment, function(i, f) {
      var tblData = "<tr><td>Site Id: </td><td>" + f.siteId + "</td></tr>" +
      							"<tr><td>Serial Number: </td><td>" + f.serialNumber + "</td></tr>" + 
                   	"<tr><td>City: </td><td>" + f.city + "</td></tr>" + 
                   	"<tr><td>County: </td><td>" + f.county + "</td></tr>" +
      							"<tr><td>Segment: </td><td>" + f.segment + "</td></tr>" +
      							"<tr><td>Type: </td><td>" + f.type + "</td></tr>"+
      							"<tr><td>Start Time: </td><td>" + f.startTime + "</td></tr>";
      $(tblData).appendTo(".equipmentTable tbody");
     });

   });
  };
  
