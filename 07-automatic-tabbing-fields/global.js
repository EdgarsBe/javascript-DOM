window.addEventListener('load', function(){
    const first = document.getElementById('first');
    const second = document.getElementById('second');
    const third = document.getElementById('third');
    first.addEventListener('input', function(e){
        if(first.value.length == first.maxLength){
            second.focus()
        };
    });
    second.addEventListener('input', function(e){
        if(second.value.length == second.maxLength){
            third.focus()
        };
    });
});