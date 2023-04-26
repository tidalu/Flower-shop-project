const circles = document.querySelectorAll('.circles');
const services = document.querySelector('.services');
let counter = 0;
document.querySelector('#prev').addEventListener('click', function () {
    counter--;
    if (counter < 0) {
        counter = 2;
    }
    services.children[counter].scrollIntoView({ behavior: 'smooth', block: "nearest" });
    updateActive();
})

document.querySelector('#next').addEventListener('click', function () {
    counter++;
    if (counter > 2) {
        counter = 0;
    }
    services.children[counter].scrollIntoView({ behavior: 'smooth', block: "nearest" });
    updateActive();
})

function updateActive() {
    circles.forEach((circle, idx) => {
        if (idx === counter) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    });
};


// filter prices

const rangeSlider = document.querySelector('.range-slider');
const rangeValues = document.querySelectorAll('.range-value');

rangeSlider.addEventListener('input', () => {
    rangeValues.forEach((rangeValue, index) => {
        rangeValue.innerHTML = rangeSlider.children[index].value;
    });
});


// dropdown menu 
const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach((dropdown) => {
    const dropdownButton = dropdown.querySelector('.dropdown-button');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    const radioButtons = dropdown.querySelectorAll('input[type="radio"]');

    dropdownButton.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    

    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('click', () => {
            dropdownButton.innerHTML = radioButton.value;
            dropdownContent.classList.remove('show');
        });
    });
});
