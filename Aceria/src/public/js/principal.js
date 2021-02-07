var map = L.map('map-template').setView([-2.09, -79.93],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var myMarker = L.marker([-2.09, -79.93],{draggable: true}).addTo(map);

myMarker.on('dragend', function() {
			var coord = String(myMarker.getLatLng()).split(',');
			var lat = coord[0].split('(');
			var lng = coord[1].split(')');
			myMarker.bindPopup("Moved to: " + lat[1] + ", " + lng[0] + ".");
});
