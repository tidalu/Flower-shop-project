const circles = document.querySelectorAll('.circles');
const services = document.querySelector('.services');
let counter =0;
document.querySelector('#prev').addEventListener('click', function () {
    counter--;
    if (counter < 0) {
        counter = 2;
    }
    services.children[counter].scrollIntoView({behavior: 'smooth', block: "nearest" });
    updateActive();
})

document.querySelector('#next').addEventListener('click', function () {
    counter++;
    if (counter > 2) {
        counter = 0;
    }
    services.children[counter].scrollIntoView({behavior: 'smooth', block: "nearest" });
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



