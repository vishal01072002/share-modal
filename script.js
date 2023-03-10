const overlay = document.querySelector('.overlay');

const modal = document.querySelector('.share-modal');


function openModal(){
    modal.classList.add("active");
    overlay.classList.add("overlayActive");
}

const closeModal = () => {
    modal.classList.remove("active");
    overlay.classList.remove("overlayActive");
}