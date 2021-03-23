window.addEventListener("load", function(){
    const btn = document.getElementById('button')
    btn.addEventListener('click', function(e){
        document.getElementsByClassName('hide_me')[0].style.display = 'none'
        document.getElementsByClassName('hide_me')[1].style.display = 'none'
    });
});