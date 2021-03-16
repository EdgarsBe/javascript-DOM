window.addEventListener("load", function(){
  const moreText = document.getElementById('more_text_link')
  moreText.addEventListener('click', function(e){
    const textMore = document.getElementById("more_text_content")
    textMore.style.display = 'block'
    moreText.style.display = 'none'
  })
});