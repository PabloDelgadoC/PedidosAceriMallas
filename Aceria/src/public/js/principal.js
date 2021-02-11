var map = L.map('map-template').setView([-2.09, -79.93],13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var myMarker = L.marker([getlatitud(), getlongitud()],{draggable: true}).addTo(map);

myMarker.on('dragend', function() {
			var coord = String(myMarker.getLatLng()).split(',');
			console.log()
			var lat = coord[0].split('(');
			var lng = coord[1].split(')');
			myMarker.bindPopup("Coordenadas: " + lat[1] + ", " + lng[0] + ".");
			
			document.getElementById("coordx").value = lat[1];
			document.getElementById("coordy").value = lng[0];	
});

function getlatitud(){
	const lati = document.getElementById("coordx").value;
	if(lati == ''){
		return -2.09;
	}
	return lati;
}

function getlongitud(){
	const lati = document.getElementById("coordy").value;
	if(lati == ''){
		return -79.93;
	}
	return lati;

}


