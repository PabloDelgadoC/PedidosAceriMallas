$(document).ready(function(){

    //datos de busqueda
    var lista_movil=[]
    var lista_web=[]
    var lista_ventas=[]
    var lista_generados=[]
    var lista_califica=[]

    tipoActual=''

    
    //capturando el evento click
    $('#btn_buscar').click(()=>{
        
        //obteniendo el valor del combo box
        let valorCombo=$('#categoria').val();
        console.log(valorCombo)

        if(valorCombo=='movil'){
            console.log('reporte movil');
            tipoActual='movil'
            
            //limpiando el contedor anterior
            $("#tabla_reporte > thead").empty();//limpia solo los registros del body
            $("#tabla_reporte > tbody").empty();//limpia solo los registros del body

            //obteniendo la referencia a la tabla
            let tabla=$('#tabla_reporte');
            
            let encabezado=$(`<thead class="cabecera">
                                <tr>
                                    <th class="sep" style="color:#ffffff;">#</th>
                                    <th class="sep" style="color:#ffffff;">Nombres</th>
                                    <th class="sep" style="color:#ffffff;">Apellidos</th>
                                    <th class="sep" style="color:#ffffff;">Correo</th>
                                    <th class="sep" style="color:#ffffff;">Estado</th>
                                </tr>
                            </thead>`)
            
            
            tabla.append(encabezado)

            let body=$(`<tbody></body>`)

            //obteniendo datos 
            $.ajax({
                dataType: "json",
                url: 'http://localhost:4000/reportes/movil',
                success: function(data){
                    //respaldando los datos de movil para busqueda
                    lista_movil=data;
                    console.log(data)
                    for(let i=0;i<data.length;i+=1){
                        
                        let usuario=data[i];
                        let fila=$(`<tr>
                                        <th scope="row">${i+1}</th>
                                        <td>${usuario.nombre}</td>
                                        <td>${usuario.apellido}</td>
                                        <td>${usuario.email}</td>
                                        <td>${usuario.estado}</td>
                                    </tr>`)
                        
                        body.append(fila)
                    }

                    tabla.append(body);
                }
            });


        }else if(valorCombo=='web'){
            console.log('reporte web')
            tipoActual='web'

            //limpiando el contedor anterior
            $("#tabla_reporte > thead").empty();//limpia solo los registros del body
            $("#tabla_reporte > tbody").empty();//limpia solo los registros del body

            //obteniendo la referencia a la tabla
            let tabla=$('#tabla_reporte');
            
            let encabezado=$(`<thead class="cabecera">
                                <tr>
                                    <th class="sep" style="color:#ffffff;">#</th>
                                    <th class="sep" style="color:#ffffff;">Nombres</th>
                                    <th class="sep" style="color:#ffffff;">Apellidos</th>
                                    <th class="sep" style="color:#ffffff;">Correo</th>
                                    
                                </tr>
                            </thead>`)
            
            
            tabla.append(encabezado)

            let body=$(`<tbody></body>`)

            //obteniendo datos 
            $.ajax({
                dataType: "json",
                url: 'http://localhost:4000/reportes/web',
                success: function(data){
                    console.log(data)
                    lista_web=data;
                    for(let i=0;i<data.length;i+=1){
                        
                        let usuario=data[i];
                        let fila=$(`<tr>
                                        <th scope="row">${i+1}</th>
                                        <td>${usuario.nombre}</td>
                                        <td>${usuario.apellido}</td>
                                        <td>${usuario.email}</td>
                                        
                                    </tr>`)
                        
                        body.append(fila)
                    }

                    tabla.append(body);
                }
            });

        }else if(valorCombo=='ventas'){
            console.log('reporte ventas')
            tipoActual='ventas'


            //limpiando el contedor anterior
            $("#tabla_reporte > thead").empty();//limpia solo los registros del body
            $("#tabla_reporte > tbody").empty();//limpia solo los registros del body

            //obteniendo la referencia a la tabla
            let tabla=$('#tabla_reporte');
            
            let encabezado=$(`<thead class="cabecera">
                                <tr>
                                    <th class="sep" style="color:#ffffff;">#</th>
                                    <th class="sep" style="color:#ffffff;">producto</th>
                                    <th class="sep" style="color:#ffffff;">categoria</th>
                                    <th class="sep" style="color:#ffffff;">cantidad</th>
                                    <th class="sep" style="color:#ffffff;">total</th>
                                    <th class="sep" style="color:#ffffff;">fecha</th>
                                    
                                </tr>
                            </thead>`)
            
            
            tabla.append(encabezado)

            let body=$(`<tbody></body>`)

            //obteniendo datos 
            $.ajax({
                dataType: "json",
                url: 'http://localhost:4000/reportes/ventas',
                success: function(data){
                    console.log(data)
                    lista_ventas=data
                    for(let i=0;i<data.length;i+=1){
                        
                        let venta=data[i];
                        let fila=$(`<tr>
                                        <th scope="row">${i+1}</th>
                                        <td>${venta.producto}</td>
                                        <td>${venta.categoria}</td>
                                        <td>${venta.cantidad}</td>
                                        <td>${venta.total}</td>
                                        <td>${venta.fecha}</td>
                                        
                                    </tr>`)
                        
                        body.append(fila)
                    }

                    tabla.append(body);
                }
            });


        }else if(valorCombo=='generados'){
            tipoActual='generados'
            //limpiando el contedor anterior
            $("#tabla_reporte > thead").empty();//limpia solo los registros del body
            $("#tabla_reporte > tbody").empty();//limpia solo los registros del body

            //obteniendo la referencia a la tabla
            let tabla=$('#tabla_reporte');
            
            let encabezado=$(`<thead class="cabecera">
                                <tr>
                                    <th class="sep" style="color:#ffffff;">#</th>
                                    <th class="sep" style="color:#ffffff;">Num Pedido</th>
                                    <th class="sep" style="color:#ffffff;">Cliente</th>
                                    <th class="sep" style="color:#ffffff;">Monto</th>
                                </tr>
                            </thead>`)
            
            
            tabla.append(encabezado)

            let body=$(`<tbody></body>`)

            //obteniendo datos 
            $.ajax({
                dataType: "json",
                url: 'http://localhost:4000/reportes/pagos',
                success: function(data){
                    console.log(data)
                    lista_generados=data
                    for(let i=0;i<data.length;i+=1){
                        
                        let usuario=data[i];
                        let fila=$(`<tr>
                                        <th scope="row">${i+1}</th>
                                        <td>${usuario.npedido}</td>
                                        <td>${usuario.usuario}</td>
                                        <td>${usuario.monto}</td>
                                        
                                    </tr>`)
                        
                        body.append(fila)
                    }

                    tabla.append(body);
                }
            });

        }else if(valorCombo=='servicios'){

            tipoActual='servicios'
            //limpiando el contedor anterior
            $("#tabla_reporte > thead").empty();//limpia solo los registros del body
            $("#tabla_reporte > tbody").empty();//limpia solo los registros del body

            //obteniendo la referencia a la tabla
            let tabla=$('#tabla_reporte');
            
            let encabezado=$(`<thead class="cabecera">
                                <tr>
                                    <th class="sep" style="color:#ffffff;">#</th>
                                    <th class="sep" style="color:#ffffff;">Servicio</th>
                                    <th class="sep" style="color:#ffffff;">Usuario</th>
                                    <th class="sep" style="color:#ffffff;">Calificación</th>
                                </tr>
                            </thead>`)
            
            
            tabla.append(encabezado)

            let body=$(`<tbody></body>`)

            //obteniendo datos 
            $.ajax({
                dataType: "json",
                url: 'http://localhost:4000/reportes/calificaciones',
                success: function(data){
                    console.log(data)
                    lista_califica=data;
                    for(let i=0;i<data.length;i+=1){
                        
                        let usuario=data[i];
                        let fila=$(`<tr>
                                        <th scope="row">${i+1}</th>
                                        <td>${usuario.servicio}</td>
                                        <td>${usuario.usuario}</td>
                                        <td>${usuario.calificacion}</td>
                                        
                                    </tr>`)
                        
                        body.append(fila)
                    }

                    tabla.append(body);
                }
            });

        }
    })

    //funciones para buscar y filtrar
    $( "#buscador" ).keyup(function(event) {

        let palabra=event.target.value

        if(tipoActual=='movil'){
            buscarMovil(palabra)
        }else if(tipoActual=='web'){
            buscarWeb(palabra);
        }else if(tipoActual=='ventas'){
            buscarVentas(palabra);
            
        }else if(tipoActual=='generados'){
            buscarGenerados(palabra)
        }else if(tipoActual=='servicios'){
            buscarServicios(palabra)
        }
        
      });

    function buscarMovil(palabra){

        let coincidencias=[];

        for(let i=0;i<lista_movil.length;i+=1){
            let dato=lista_movil[i];

            console.log(dato['nombre'].toLowerCase())
            if(dato['nombre'].toLowerCase().indexOf(palabra)!=-1 || dato['apellido'].toLowerCase().indexOf(palabra)!=-1
                || dato['email'].toLowerCase().indexOf(palabra)!=-1 || dato['estado'].toLowerCase().indexOf(palabra)!=-1
            ){
                coincidencias.push(dato);
                
            }
        }

        console.log('coincidencias: ',coincidencias)

        let tabla=$('#tabla_reporte');
        $("#tabla_reporte > tbody").empty();//limpia solo los registros del body
        let body=$(`<tbody></body>`)
        
        for(let i=0;i<coincidencias.length;i+=1){
                        
            let usuario=coincidencias[i];
            let fila=$(`<tr>
                                        <th scope="row">${i+1}</th>
                                        <td>${usuario.nombre}</td>
                                        <td>${usuario.apellido}</td>
                                        <td>${usuario.email}</td>
                                        <td>${usuario.estado}</td>
                                    </tr>`)
            
            body.append(fila)
        }

        tabla.append(body);
        
    }

    function buscarWeb(palabra){

        let coincidencias=[];

        for(let i=0;i<lista_web.length;i+=1){
            let dato=lista_web[i];

            console.log(dato['nombre'].toLowerCase())
            if(dato['nombre'].toLowerCase().indexOf(palabra)!=-1 || dato['apellido'].toLowerCase().indexOf(palabra)!=-1
                || dato['email'].toLowerCase().indexOf(palabra)!=-1){
                coincidencias.push(dato);
                
            }
        }

        console.log('coincidencias: ',coincidencias)

        let tabla=$('#tabla_reporte');
        $("#tabla_reporte > tbody").empty();//limpia solo los registros del body
        let body=$(`<tbody></body>`)
        
        for(let i=0;i<coincidencias.length;i+=1){
                        
            let usuario=coincidencias[i];
            let fila=$(`<tr>
                                        <th scope="row">${i+1}</th>
                                        <td>${usuario.nombre}</td>
                                        <td>${usuario.apellido}</td>
                                        <td>${usuario.email}</td>
                                    </tr>`)
            
            body.append(fila)
        }

        tabla.append(body);
        
    }

    function buscarVentas(palabra){

        let coincidencias=[];

        for(let i=0;i<lista_ventas.length;i+=1){
            let dato=lista_ventas[i];

            console.log(dato['producto'].toLowerCase())
            if(dato['producto'].toLowerCase().indexOf(palabra)!=-1 || dato['categoria'].toLowerCase().indexOf(palabra)!=-1
                || dato['cantidad'].toLowerCase().indexOf(palabra)!=-1 || dato['total'].toLowerCase().indexOf(palabra)!=-1
                || dato['fecha'].toLowerCase().indexOf(palabra)!=-1){
                coincidencias.push(dato);
                
            }
        }

        console.log('coincidencias: ',coincidencias)

        let tabla=$('#tabla_reporte');
        $("#tabla_reporte > tbody").empty();//limpia solo los registros del body
        let body=$(`<tbody></body>`)
        
        for(let i=0;i<coincidencias.length;i+=1){
                        
            let usuario=coincidencias[i];
            let fila=$(`<tr>
                                        <th scope="row">${i+1}</th>
                                        <td>${usuario.producto}</td>
                                        <td>${usuario.categoria}</td>
                                        <td>${usuario.cantidad}</td>
                                        <td>${usuario.total}</td>
                                        <td>${usuario.fecha}</td>
                                    </tr>`)
            
            body.append(fila)
        }

        tabla.append(body);
        
    }

    function buscarGenerados(palabra){

        let coincidencias=[];

        for(let i=0;i<lista_generados.length;i+=1){
            let dato=lista_generados[i];

            console.log(dato['npedido'])
            if(dato['npedido']==palabra || dato['usuario'].toLowerCase().indexOf(palabra)!=-1
                || dato['monto']==palabra){
                coincidencias.push(dato);
                
            }
        }

        console.log('coincidencias: ',coincidencias)

        let tabla=$('#tabla_reporte');
        $("#tabla_reporte > tbody").empty();//limpia solo los registros del body
        let body=$(`<tbody></body>`)
        
        for(let i=0;i<coincidencias.length;i+=1){
                        
            let usuario=coincidencias[i];
            let fila=$(`<tr>
                                        <th scope="row">${i+1}</th>
                                        <td>${usuario.npedido}</td>
                                        <td>${usuario.usuario}</td>
                                        <td>${usuario.monto}</td>
                                       
                                    </tr>`)
            
            body.append(fila)
        }

        tabla.append(body);

    }

    function buscarServicios(palabra){

        let coincidencias=[];

        for(let i=0;i<lista_califica.length;i+=1){
            let dato=lista_califica[i];

            console.log(dato['servicio'])
            if(dato['servicio'].toLowerCase().indexOf(palabra)!=-1 || dato['usuario'].toLowerCase().indexOf(palabra)!=-1
                || dato['calificacion']==palabra){
                coincidencias.push(dato);
                
            }
        }

        console.log('coincidencias: ',coincidencias)

        let tabla=$('#tabla_reporte');
        $("#tabla_reporte > tbody").empty();//limpia solo los registros del body
        let body=$(`<tbody></body>`)
        
        for(let i=0;i<coincidencias.length;i+=1){
                        
            let usuario=coincidencias[i];
            let fila=$(`<tr>
                                        <th scope="row">${i+1}</th>
                                        <td>${usuario.servicio}</td>
                                        <td>${usuario.usuario}</td>
                                        <td>${usuario.calificacion}</td>
                                       
                                    </tr>`)
            
            body.append(fila)
        }

        tabla.append(body);


    }


    

})