$(function() {
  $("form#vacation-quiz").submit(function(event) {
    event.preventDefault();

    var name = $("input#q1").val();
    var activity = $("input[name=activity]:checked").val();
    var time = $("input[name=time]:checked").val();
    var weather = $("input[name=weather]:checked").val();
    var beverage = $("input[name=beverage]:checked").val();
    var food = $("input[name=food]:checked").val();
    var transport = $("input[name=transport]:checked").val();
    var totalA = 0;
    var totalB = 0;
    var totalC = 0;

    if (activity === "a") {
      totalA += 1;
    } else if (activity === "b") {
      totalB += 1;
    } else if (activity === "c") {
      totalC += 1;
    }

    if (time === "a") {
      totalA += 1;
    } else if (time === "b") {
      totalB += 1;
    } else if (time === "c") {
      totalC += 1;
    }

    if (weather === "a") {
      totalA += 1;
    } else if (weather === "b") {
      totalB += 1;
    } else if (weather === "c") {
      totalC += 1;
    }

    if (beverage === "a") {
      totalA += 1;
    } else if (beverage === "b") {
      totalB += 1;
    } else if (beverage === "c") {
      totalC += 1;
    }

    if (food === "a") {
      totalA += 1;
    } else if (food === "b") {
      totalB += 1;
    } else if (food === "c") {
      totalC += 1;
    }

    if (transport === "a") {
      totalA += 1;
    } else if (transport === "b") {
      totalB += 1;
    } else if (transport === "c") {
      totalC += 1;
    }

    if (totalA > totalB && totalA > totalC) {
      $("#italy").show();
    } else if (totalB > totalA && totalB > totalC) {
      $("#bvi").show();
    } else {
      $("#nz").show();
    }

    $(".name").text(name);

  });
});
