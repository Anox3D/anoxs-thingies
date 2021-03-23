var f = document.getElementById('ball');
document.addEventListener('click', function(ev){
    f.style.transform = 'translateY('+(ev.clientY-35)+'px';
    f.style.transform += 'translateX('+(ev.clientX-35)+'px';
}, false);