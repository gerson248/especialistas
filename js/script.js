//Funcion que hace que al hacer click al boton de scroll se haga un desplazamiento hacia arriba con una duracion de animacion determinada.
$("#scroll-hacia-arriba").click(function(){
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
});

//Funcion que hace mostrar u ocultar el boton de scroll dependiendo de la altura de la pagina en el que el usuario se encuentra.
$(window).on("scroll",function(){
    if($(this).scrollTop() > 100){
        $("#scroll-hacia-arriba").fadeIn(); 
    }else{
        $("#scroll-hacia-arriba").fadeOut(); 
    }
})

// Acciones o funciones que se realizaran cuando la pagina se recargue.
$(document).ready(function() {
    //Aplicando la herramienta DataTables a la tabla Personal del Consorcio
    $('#TablaConsorcio').DataTable({  
        //Cambio de lenguaje a español
        "language":{
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
        },
        
        "columnDefs":[{"orderable" :false,"targets": [4,5,8,10,11]}], //Elimina las flechas de ordenar en las columnas en los [].
        "lengthMenu": [3,5,10,15], //Establece los valores del select del numero de filas que se quiere mostrar.
        "info": false //Elimina la informacion de paginas mostradas de la parte inferior de la tabla.

        
        
        
    });

    //Aplicando la herramienta DataTables a la tabla Especialistas del cliente
    $('#TablaCliente').DataTable({ 
        "language":{
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
        },

        "columnDefs":[{"orderable" :false, "targets": [4,5,8,9,10]},], //Elimina las flechas de ordenar en las columnas en los [].
        "lengthMenu": [3,5,10,15], //Establece los valores del select del numero de filas que se quiere mostrar
        "info": false, //Elimina la informacion de paginas mostradas de la parte inferior de la tabla.
    });

    //Mostrar u ocultar el boton de scroll dependiendo de la altura de la pagina en el que el usuario se encuentra.
    if($(window).scrollTop() > 100){
        $("#scroll-hacia-arriba").fadeIn(); 
    }else{
        $("#scroll-hacia-arriba").fadeOut(); 
    };

});