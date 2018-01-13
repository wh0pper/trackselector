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

    $("#message").slideDown();
    if (age >= 40) {
      $("#age-message").slideDown();
    } else {
      $("#age-message").slideDown();
    }

    if (platform === "web") {
      if (environment === "freelance" || environment === "agency") {
        $("#ruby").slideDown();
        $("#php").slideDown();
      } else if (environment === "startup") {
        $("#ruby").slideDown();
      } else {
        $("#research").slideDown();
      }
    } else if (platform === "mobile") {
      if (skillset === "creative"){
        $("#design").slideDown();
      } else {
        $("#java").slideDown();
      }
    } else if (platform === "internal") {
      if (environment === "enterprise") {
        $("#csharp").slideDown();
      } else {
        $("#research").slideDown();
      }
    } else if (platform === "embedded") {
        if (environment === "freelance" || environment === "agency") {
          $("#research").slideDown();
        } else {
          $("#csharp").slideDown();
        }
    }


    $("#resource-survey").slideDown();
  });

  $("form#survey2").submit(function(event) {
    event.preventDefault();

    $(".resource").hide();
    var goal = $("input:radio[name=goal]:checked").val();
    var schedule = $("select#schedule").val();
    var experience = $("select#experience").val();


    if (goal === "career") {
      if (schedule === "more-forty") {
        $("#bootcamp").slideDown();
      } else {
        $("#online").slideDown();
      }
    } else if (goal === "grow") {
        if (schedule === "less-ten") {
          $("#books").slideDown();
        } else if (schedule === "ten-twenty"){
          $("#online").slideDown();
        } else {
          $("#online").slideDown();
          $("#networking").slideDown();
        }
    } else { //goal is 'curious'
      $("#online").slideDown();
    }

  });
});
