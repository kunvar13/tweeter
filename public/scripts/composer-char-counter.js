$(document).ready(function() {
  //console.log("Key pressed");
  $("#tweet-text").on("keydown", function() {
    let value = $(this).val();
    let count = $(this).parent(0).children(2).children(".counter");
    $(count).val((140 - value.length));
    if ($(count).val() < 0) {
      $(count).css("color", "red");
    }
  });
  // --- our code goes here ---
});