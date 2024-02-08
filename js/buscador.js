$(document).ready(function(){
var buscador = $("#table").DataTable();

$("#input-search").keyup(function(){

    buscador.search($(this).val()).draw();

    if ($("#input-search").val() == "arboles" ){
        $(".sugerenciasBox").slideDown();
      }else if ($("#input-search").val() == "Arboles" ){
        $(".sugerenciasBox").slideDown();
      }else if ($("#input-search").val() == "árboles" ){
        $(".sugerenciasBox").slideDown();
      }else if ($("#input-search").val() == "Árboles" ){
        $(".sugerenciasBox").slideDown();
    }else{ $(".sugerenciasBox").slideUp();}
    });

    $("#input-search").click(function() {
      $(".recomendacionesBox").slideUp();
    });
    $("#sugerenciaEnabled").click(function() {
      $("#sugerenciaEnabled").fadeOut(150);
      $("#sugerenciaSelec").fadeIn(150);
    });
    $("#sugerenciaSelecCerrar").click(function() {
      $("#sugerenciaEnabled").fadeIn(100);
      $("#sugerenciaSelec").fadeOut(100);
    });
});
