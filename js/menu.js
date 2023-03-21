/*BURGER===============================================================================*/
$(document).ready(function(){
    let nav = $("#navHead");
    let navToggle = $("#navToggle")
    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });
});