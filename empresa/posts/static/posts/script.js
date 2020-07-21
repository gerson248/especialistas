// Acciones o funciones que se realizaran cuando la pagina se cargue.
$(document).ready(function() {
    TablaPersoConsorcio();
    TablaCliente();
    TablaDatosConsorcio();
    aparicionBotonScroll();
    ocultarMenuContextual();

});

var TablaPersoConsorcio = function (){
    //Aplicando la herramienta DataTables a la tabla Personal del Consorcio
    $('#TablaPersoConsorcio').DataTable({  
        "language": lenguaje_español,
        "columnDefs":[{"orderable" :false,"targets": [4,5,8,10,11]}], //Elimina las flechas de ordenar en las columnas en los [].
        "lengthMenu": [3,5,10,15], //Establece los valores del select del numero de filas que se quiere mostrar.
        "info": false, //Elimina la informacion de paginas mostradas de la parte inferior de la tabla.
    });
}

var TablaCliente = function (){
    //Aplicando la herramienta DataTables a la tabla Especialistas del cliente
    $('#TablaCliente').DataTable({ 
        "language":lenguaje_español,
        "columnDefs":[{"orderable" :false, "targets": [4,5,8,9,10]}], //Elimina las flechas de ordenar en las columnas en los [].
        "lengthMenu": [3,5,10,15], //Establece los valores del select del numero de filas que se quiere mostrar
        "info": false, //Elimina la informacion de paginas mostradas de la parte inferior de la tabla.
    });
}

var TablaDatosConsorcio = function (){
    //Aplicando la herramienta DataTables a la tabla Especialistas del cliente
    $('#TablaDatosConsorcio').DataTable({ 
        "language":lenguaje_español,
        //"columnDefs":[{"orderable" :false,"targets": [1]}],
        "lengthMenu": [3,5,10,15],
        "info": false
    });
}

var lenguaje_español = {
    "sProcessing":     "Procesando...",
    "sLengthMenu":     "Mostrar _MENU_ registros",
    "sZeroRecords":    "No se encontraron resultados",
    "sEmptyTable":     "Ningún dato disponible en esta tabla",
    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix":    "",
    "sSearch":         "Buscar:",
    "sUrl":            "",
    "sInfoThousands":  ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
        "sFirst":    "Primero",
        "sLast":     "Último",
        "sNext":     "Siguiente",
        "sPrevious": "Anterior"
    },
    "oAria": {
        "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
    },
    "buttons": {
        "copy": "Copiar",
        "colvis": "Visibilidad"
    }
}

//Funcion que muestra u oculta el boton de scroll dependiendo de la altura de la pagina en el que el usuario se encuentra.
var aparicionBotonScroll = function (){
    if($(window).scrollTop() > 100)
        $("#scroll-hacia-arriba").fadeIn(); 
    else
        $("#scroll-hacia-arriba").fadeOut(); 
}

//Funcion que hace mostrar u ocultar el boton de scroll dependiendo de la altura de la pagina en el que el usuario se encuentra.
$(window).on("scroll",function(){
    aparicionBotonScroll();
})

//Funcion que hace que al hacer click al boton de scroll se haga un desplazamiento hacia arriba con una duracion de animacion determinada.
$("#scroll-hacia-arriba").click(function(){
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
});

/*
$("td").click(function(){
    $("td").css({
        "overflow":'scroll',
        "white-space": 'nowrap',
        "text-overflow": 'clip'
    });
});
*/

// "mousedown" Evento que reconoce cualquier click del mouse, hace aparecer el menu contextual donde das click derecho (NO SE ESTA USANDO)
/*$("table").mousedown(function (e) {
    if (e.button == 2){
        $("#menuContextual").css("top",e.pageY+1);
        $("#menuContextual").css("left",e.pageX+1);
        $("#menuContextual").show("fast");
    }
})
*/

// Genera el evento con click derecho donde esta el "tbody(id="espacioMCConsorcio")"
$("#espacioMCConsorcio").on("contextmenu",function(e){
    e.preventDefault(); // Descativa cualquier menu contextual activado, considerando el de windows
    
    // Posiciona el menu contextual donde se hace el click 
    $("#menuContextualConsorcio").css("top",e.pageY);
    $("#menuContextualConsorcio").css("left",e.pageX);
    $("#menuContextualConsorcio").show("fast");
    
    $("#botonVerConsor").on("click",function (){
        dato = e.target; // Captura el elemento donde se realizo el evento
        fila = $(dato).closest("tr"); // Sube a la etiqueta padre "tr"
        // Baja a los elemento de etiqueta "td" dependiendo de sus indices
        codigo = parseInt(fila.find("td").eq(1).text()); 
        nombre = fila.find("td").eq(2).text(); 
        cargo = fila.find("td").eq(3).text();
        telefono = fila.find("td").eq(4).text();
        correo = fila.find("td").eq(5).text();
        fIni = fila.find("td").eq(6).text();
        fFin = fila.find("td").eq(7).text();
        jefe = fila.find("td").eq(8).children("input").eq(0).prop("checked");
        costo = fila.find("td").eq(9).text();
        esp_prov = fila.find("td").eq(10).text();
        vigente = fila.find("td").eq(11).children("input").eq(0).prop("checked");
        $("#codigoPer-ver").text(codigo);
        $("#codigoPer-ver").text(codigo);
        $("#nombrePer-ver").text(nombre);
        $("#cargoPer-ver").text(cargo);
        $("#telefonoPer-ver").text(telefono);
        $("#correoPer-ver").text(correo);
        $("#fecha-iniPer-ver").text(fIni);
        $("#fecha-finPer-ver").text(fFin);
        $("#jefeProy-ver").prop("checked",jefe);
        $("#costoPer-ver").text(costo);
        $("#esp-provPer-ver").text(esp_prov);
        $("#vigentePer-ver").prop("checked",vigente);
    })

    $("#botonAgregarConsorcio").on("click",function (){
        $("#forma-personal-consorcio").trigger("reset"); // Reinicia el formulario
        $("#tituloModalConsor").text("Nuevo Personal del Consorcio"); // Cambia de nombre al formulario
    }) 

    $("#botonModificarConsorcio").on("click",function (){
        dato = e.target; // Captura el elemento donde se realizo el evento
        fila = $(dato).closest("tr"); // Sube a la etiqueta padre "tr"
        // Baja a los elemento de etiqueta "td" dependiendo de sus indices
        codigo = parseInt(fila.find("td").eq(1).text()); 
        nombre = fila.find("td").eq(2).text(); 
        cargo = fila.find("td").eq(3).text();
        telefono = fila.find("td").eq(4).text();
        correo = fila.find("td").eq(5).text();
        fIni = fila.find("td").eq(6).text();
        fFin = fila.find("td").eq(7).text();
        jefe = fila.find("td").eq(8).children("input").eq(0).prop("checked");
        costo = fila.find("td").eq(9).text();
        esp_prov = fila.find("td").eq(10).text();
        vigente = fila.find("td").eq(11).children("input").eq(0).prop("checked");
        // Ingresa los datos de la fila al formulario 
        $("#codigoPer").val(codigo);
        $("#nombrePer").val(nombre);
        $("#cargoPer").val(cargo);
        $("#telefonoPer").val(telefono);
        $("#correoPer").val(correo);
        $("#fecha-iniPer").val(fIni);
        $("#fecha-finPer").val(fFin);
        $("#jefeProy").prop("checked",jefe);
        $("#costoPer").val(costo);
        $("#esp-provPer").val(esp_prov);
        $("#vigentePer").prop("checked",vigente);
        $("#tituloModalConsor").text("Editar Personal del Consorcio"); //Cambia de nombre al formulario
    })

    $("#botonEliminarConsorcio").on("click",function (){
        dato = e.target;
        $("#TablaPersoConsorcio").DataTable().row(dato).remove().draw();
    })
    //return false; // Descativa cualquier menu contextual activado, considerando el de windows (NO SE ESTA USANDO)
});



// // Genera el evento con click derecho donde esta el "tbody(id="espacioMCCliente")"
$("#espacioMCCliente").on("contextmenu",function(e){
    e.preventDefault(); // Desactiva el menu contextual de windows
    $("#menuContextualCliente").css("top",e.pageY);
    $("#menuContextualCliente").css("left",e.pageX);
    $("#menuContextualCliente").show("fast");

    $("#botonVerCliente").on("click",function (){
        dato = e.target; // Captura el elemento donde se realizo el evento
        fila = $(dato).closest("tr"); // Sube a la etiqueta padre "tr"
        // Baja a los elemento de etiqueta "td" dependiendo de sus indices
        codigo = parseInt(fila.find("td").eq(1).text()); 
        nombre = fila.find("td").eq(2).text(); 
        cargo = fila.find("td").eq(3).text();
        telefono = fila.find("td").eq(4).text();
        correo = fila.find("td").eq(5).text();
        fIni = fila.find("td").eq(6).text();
        fFin = fila.find("td").eq(7).text();
        tipo = fila.find("td").eq(8).text();
        comentario = fila.find("td").eq(9).text();
        vigente = fila.find("td").eq(10).children("input").eq(0).prop("checked");
        // Ingresa los datos de la fila al formulario 
        $("#codigoClie-ver").text(codigo);   
        $("#nombreClie-ver").text(nombre);
        $("#cargoClie-ver").text(cargo);
        $("#telefonoClie-ver").text(telefono);
        $("#correoClie-ver").text(correo);
        $("#fecha-ini_Clie-ver").text(fIni);
        $("#fecha-fin_Clie-ver").text(fFin);
        $("#adm-prov_Clie-ver").text(tipo);
        $("#comentarioClie-ver").text(comentario);
        $("#vigenteClie-ver").prop("checked",vigente);
    })
    $("#botonAgregarCliente").on("click",function (){
        $("#forma-especialistas-cliente").trigger("reset"); // Reinicia el formulario
        $("#tituloModalCliente").text("Nuevo Especialista del Cliente");
    }) 

    $("#botonModificarCliente").on("click",function (){
        dato = e.target; // Captura el elemento donde se realizo el evento
        fila = $(dato).closest("tr"); // Sube a la etiqueta padre "tr"
        // Baja a los elemento de etiqueta "td" dependiendo de sus indices
        codigo = parseInt(fila.find("td").eq(1).text()); 
        nombre = fila.find("td").eq(2).text(); 
        cargo = fila.find("td").eq(3).text();
        telefono = fila.find("td").eq(4).text();
        correo = fila.find("td").eq(5).text();
        fIni = fila.find("td").eq(6).text();
        fFin = fila.find("td").eq(7).text();
        tipo = fila.find("td").eq(8).text();
        comentario = fila.find("td").eq(9).text();
        vigente = fila.find("td").eq(10).children("input").eq(0).prop("checked");
        // Ingresa los datos de la fila al formulario 
        $("#codigoClie").val(codigo);   
        $("#nombreClie").val(nombre);
        $("#cargoClie").val(cargo);
        $("#telefonoClie").val(telefono);
        $("#correoClie").val(correo);
        $("#fecha-ini_Clie").val(fIni);
        $("#fecha-fin_Clie").val(fFin);
        $("#adm-prov_Clie").val(tipo);
        $("#comentarioClie").val(comentario);
        $("#vigenteClie").prop("checked",vigente);
        $("#tituloModalCliente").text("Editar Especialista del Cliente");
    })

    $("#botonEliminarCliente").on("click",function (){
        dato = e.target;
        $("#TablaCliente").DataTable().row(dato).remove().draw();
    })
})  

// Esconde el menu contextual cuando das click en cuaquier lado de la ventana 
var ocultarMenuContextual = function (){
    $(window).on("click",function(){
        $("#menuContextualConsorcio").hide("fast");
        $("#menuContextualCliente").hide("fast");
    })
}

// Esconde el menu contextual cuando sacas el mouse de él (NO SE ESTA USANDO)
var ocultarMenuContextual2 = function () {
    $("#menuContextual").mouseleave(function(){
        $("#menuContextual").hide("fast");
    })
}

// Selecciona y centra los chekbox de la columna "Vigente" de las tablas "Personal del Consorcio" y "Especialistas del Cliente" 
vigente = $("table:gt(0)").find("tbody").children("tr").children("td:last-child");
vigente.css({
    "text-align": "center"
})

// Selecciona y centra los chekbox de la columna "Jefe" de la tabla "Personal del Consorcio" 
jefe = $("#TablaPersoConsorcio").find("tbody").children("tr").children("td:nth-child(9)");
jefe.css({
    "text-align": "center"
})