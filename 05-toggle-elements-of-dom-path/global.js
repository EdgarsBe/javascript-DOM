// Your JavaScript goes here.
window.addEventListener("load", function(){
    const btn = document.getElementById('toggle_button');
    btn.addEventListener("click", function() {
      const toggables = document.querySelectorAll("ul.second_five li");
      for (var i = 0; i < toggables.length; i++) {
        if (toggables[i].style.display == "list-item") {
            toggables[i].style.display = "none";
        }
        else {
            toggables[i].style.display = "list-item";
        }
      }
    });
  });