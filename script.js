function popup(id) {
    const popupbox = document.getElementById(id);
    console.log(popupbox);
    popupbox.style.display = "block";
}
window.addEventListener('click', function(event){
    const element = document.getElementsByClassName('popup')
    for (let i =0; i<element.length;i++){
        if(element[i].contains(event.target)){
            element[i].style.display='none';
        }
    }
})