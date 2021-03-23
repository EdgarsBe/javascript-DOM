window.addEventListener("load", function(){
    const togger = document.getElementById('button');
    togger.addEventListener("click", function() {
      const toggables = document.getElementsByClassName('toggle_me');
      for (var i = 0; i < toggables.length; i++) {
        if (toggables[i].style.display === "none") {
            toggables[i].style.display = "block";
        }
        else {
            toggables[i].style.display = "none";
        }
      }
    });
  });