
function cargarDescuento(){
    var sub = document.getElementById("subtotal1").value;
    var des = document.getElementById("descuento").value;
    var y = sub - des;
    if(y>0){
        document.getElementById("subtotal2").value = y;
        var iva=y*0.12;
        document.getElementById("iva").value = iva;
        total = y+iva;
        document.getElementById("total").value = total;
    }
}

function cargarData(){
    var fecha = document.getElementById("fecha").value;
    document.getElementById("fechadata").value = fecha;

    var paga = document.getElementById("fpago").value;
    document.getElementById("fpagodata").value = paga;

    var entrega = document.getElementById("fentrega").value;
    document.getElementById("fentregadata").value = entrega;
}


