$(document).ready(function(){
    
    //capturando el evento click
    $('#btn_buscar').click(()=>{
        
        //obteniendo el valor del combo box
        let valorCombo=$('#categoria').val();
        console.log(valorCombo)

        if(valorCombo=='movil'){
            console.log('reporte movil');

            //obtengo los datos de los usuarios móvil
            $.ajax({
                dataType: "json",
                url: 'http://localhost:4000/reportes/movil',
                success: function(data){
                    console.log(data)
                }
            });



            //limpiando el contedor anterior
            $("#tabla_reporte > thead").empty();//limpia solo los registros del body
            $("#tabla_reporte > tbody").empty();//limpia solo los registros del body

            //obteniendo la referencia a la tabla

            let tabla=$('#tabla_reporte');
            
            let encabezado=$(`<thead class="cabecera">
                                <tr><th class="sep" style="color:#ffffff;">Nombres</th>
                                    <th class="sep" style="color:#ffffff;">Apellidos</th>
                                    <th class="sep" style="color:#ffffff;">Correo</th>
                                </tr>
                            </thead>`)
            
            
            
            tabla.append(encabezado)

        }else if(valorCombo=='web'){
            console.log('reporte web')

            $.ajax({
                dataType: "json",
                url: 'http://localhost:4000/reportes/web',
                success: function(data){
                    console.log(data)
                }
            });

        }else if(valorCombo=='ventas'){
            console.log('reporte ventas')

        }else if(valorCombo=='generados'){
            console.log('reportes generados')
        }
    })

})