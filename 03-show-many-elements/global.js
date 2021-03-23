window.addEventListener("load", function(){
    const btn = document.getElementById('button')
    btn.addEventListener('click', function(e){
        document.getElementsByClassName('show_me')[0].style.display = 'block'
        document.getElementsByClassName('show_me')[1].style.display = 'block'
    });
});