let toggleDisplay = 0;
const menu = document.getElementsByClassName('mobile_expand')[0];
const bars = document.getElementsByClassName('nav_mobile')[0];

bars.addEventListener('click', function(){
    if(toggleDisplay % 2 === 0){
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
    toggleDisplay++;
});
