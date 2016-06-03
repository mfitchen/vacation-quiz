$("form#vacation-quiz").submit(function(event) {
  var name = $("input#q1").val();

  $(".name").text(name)
  $("#italy").show();

  event.preventDefault();
});
