$(document).ready(function() {
  $("form#survey1").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var age = $("input#age").val();
    var environment = $("select#environment").val();
    var platform = $("select#platform").val();
    var skillset = $("input:radio[name=skillset]:checked").val();
    var result;

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

    if (environment === "enterprise") {
      if (platform === "mobile") {
        $("#java").show();
      } else if (platform === "internal" || platform === "embedded") {
        $("#csharp").show();
      }
    }

    if (environment === "startup" || environment === "agency") {
      if (platform === "web") {
        $("#ruby").show();
      } else if (platform === "mobile") {
        $("#java").show();
      } else if (skillset === "creative") {
        $("#design").show();
      }
    }

    if (environment === "freelance") {
      if (platform === "web") {
        $("#ruby").show();
      } else if (platform === "mobile") {
        $("#java").show();
      } else if (skillset === "creative") {
        $("#design").show();
      } else {
        $("#research").show();
      }
    }

    $("#resource-survey").show();
  });

  $("form#survey2").submit(function(event) {

  });
});
