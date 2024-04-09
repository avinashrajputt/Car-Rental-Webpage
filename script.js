let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll=() =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active'); 
}

const sr=ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay:400,
    reset:true
})

sr.reveal('.text',{delay:200,origin:'top'});
sr.reveal('.form-container form',{delay:800,origin:'left'});
sr.reveal('.heading',{delay:800,origin:'top'});
sr.reveal('.ride-container .box',{delay:600,origin:'top'});
sr.reveal('.services-container .box',{delay:600,origin:'top'});
sr.reveal('.about-container .box',{delay:600,origin:'top'});
sr.reveal('.reviews-container',{delay:600,origin:'top'});
sr.reveal('.newsletter .box',{delay:400,origin:'bottom'});



// Form validation
const form = document.querySelector('.form-container form');
const locationInput = document.querySelector('input[name="location"]');
const pickUpDateInput = document.querySelector('input[name="pickup-date"]');
const returnDateInput = document.querySelector('input[name="return-date"]');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission for now

    // Validate form inputs
    if (locationInput.value.trim() === '') {
        alert('Please enter a location.');
        return;
    }

    if (pickUpDateInput.value === '') {
        alert('Please select a pick-up date.');
        return;
    }

    if (returnDateInput.value === '') {
        alert('Please select a return date.');
        return;
    }

    // If all inputs are valid, you can submit the form or perform other actions
    alert('Form submitted successfully!');
});