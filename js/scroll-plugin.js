


let showDetails = document.getElementsByClassName('btn-details');

for(let i = 0; i < showDetails.length; i++){
    showDetails[i].addEventListener('click', scrollToDetails, false)
};

function scrollToDetails(e){
    e.preventDefault;
    let windHeight = document.documentElement.clientHeight;
    window.scrollTo({top: windHeight, left: 0, behavior: 'smooth'});
};