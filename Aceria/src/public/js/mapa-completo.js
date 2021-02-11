var map = L.map('map-template-all').setView([-2.09, -79.93],15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var myMarker = L.marker([getlatitud(), getlongitud()],{draggable: false}).addTo(map);

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



