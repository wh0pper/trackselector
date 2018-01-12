$(document).ready(function() {
  $("form#survey1").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var age = $("input#age").val();
    var environment = $("select#environment").val();
    var platform = $("select#platform").val();
    var skillset = $("input:radio[name=skillset]:checked").val();


    $(".track").hide();

    if (name) {
      $("span#name").text(", " + name);
    }

    $("#message").show();

    if (age >= 40) {
      $("#age-message").show();
    } else {
      $("#age-message").hide();
    }


// logic tree starting at 'desired work environment'
    if (environment === "enterprise") {
      if (platform === "mobile") {
        $("#java").show();
      } else if (platform === "internal" || platform === "embedded") {
        $("#csharp").show();
      }
    } else if (environment === "startup" || environment === "agency") {
      if (platform === "web") {
        $("#ruby").show();
      } else if (platform === "mobile") {
        $("#java").show();
      } else if (skillset === "creative") {
        $("#design").show();
      }
    } else if (environment === "freelance") {
      if (platform === "web") {
        $("#ruby").show();
      } else if (platform === "mobile") {
        $("#java").show();
      } else if (skillset === "creative") {
        $("#design").show();
      } else {
        $("#research").show();
      }
    } else {
      $("#research").show();
    }

    $("#resource-survey").show();
  });

  $("form#survey2").submit(function(event) {
    event.preventDefault();
    var schedule = $("select#schedule").val();
    var goal = $("input:radio[name=goal]:checked").val();
    var experience = $("select#experience").val();
    console.log(schedule, goal, experience);

    if (goal === "career") {
      if (schedule === "more-forty") {
        //suggest bootcamp
      } else {
        //suggest online cources
      }
    } else if (goal === "grow") {
        if (schedule === "less-ten") {
          //suggest books
        } else if (schedule === "ten-twenty"){
          //suggest  classes
        } else {
          //suggest classes and networking
        }
    } else { //goal is 'curious'
      //suggest free online classes
    }

  });
});
