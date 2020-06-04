$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    let sideA = parseInt($("input#sidea").val());
    let sideB = parseInt($("input#sideb").val());
    let sideC = parseInt($("input#sidec").val());

    if ((sideA + sideB) <= sideC || (sideA + sideC) <= sideB || (sideB + sideC) <= sideA) {
      $("#output").text("Not a triangle!");
    }
    else {
      if (sideA === sideB && sideA === sideC) {
        $("#output").text("Equilateral!");
      }
      else if (sideA === sideB || sideA === sideC || sideB === sideC) {
        $("#output").text("Isosceles!");
      }
      else {
        $("#output").text("Scalene!");
      }
    }
    $("#output").show();
  });
});