//Check off specific todos by clicking
// We add events to elements that already exist on page load, so that 
// it is applied when new sub elements are added.
$("ul").on("click", "li", function () {
   $(this).toggleClass("completed");
});
// click on x to delete to-do
$("ul").on("click", "span", function (event) {
   $(this).parent().fadeOut(500, function () {
      $(this).remove();
   });
   event.stopPropagation();
});
// Enter text to texbox to generate new to-do on pressing enter
$("input[type='text']").keypress(function (event) {
   if (event.which === 13) {
      // grabbing new todo text from input
      var todoText = $(this).val();
      // clear text input
      $(this).val('');
      // create a new li and adding to ul
      $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
      
      
   }
});
$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});