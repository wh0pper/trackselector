$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();

    console.log(name);
  });
});
