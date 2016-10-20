// Business (or back-end) logic:






// User Interface (or front-end) logic:
$(document).ready(function() {
  $("form#fortune-telling").submit(function(event) {
    event.preventDefault();
    $("input:checkbox[name=fortune]:checked").each(function(){
      var yourFortune = $(this).val();
      $("#fortune").append("<li>"+yourFortune+"</li>")
    });

    $("#fortune-telling").hide();
    $("#first-sentence").show();
  });

});
