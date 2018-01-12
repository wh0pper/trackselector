$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();
    var age = $("input#age").val();
    var environment = $("select#environment").val();
    var platform = $("select#platform").val();
    var skillset = $("input:radio[name=skillset]:checked").val();
    var result;

    $(".track").hide();

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



  });
});
