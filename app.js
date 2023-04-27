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
        rangeValue.innerHTML = rangeSlider.children[index].value + '$';
    });
});


// dropdown menu 
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => {
    const dropdownButton = dropdown.querySelector('.dropdown-button');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    const radioButtons = dropdown.querySelectorAll('input[type="radio"]');

    dropdownButton.addEventListener('click', (e) => {
        dropdownContent.classList.toggle('show');
        dropdownButton.children[1].classList.toggle('rotate');
        
    });

    

    radioButtons.forEach((radioButton) => {
        radioButton.addEventListener('click', () => {
            dropdownButton.children[0].innerHTML = radioButton.value.charAt(0).toUpperCase() + radioButton.value.slice(1);
            // dropdownContent.classList.remove('show');`
        });
    });
});

const menu = [
    {
        id: 1,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-1.jpg",
        description: "designer bouquet",
        cost: "30", 
        size: "S",
    },
    {
        id: 2,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-2.jpg",
        description: "designer bouquet",
        cost: "65", 
        size: "L",
    },
    {
        id: 3,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-3.jpg",
        description: "designer bouquet",
        cost: "100", 
        size: "XL",
    },
    {
        id: 4,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-4.jpg",
        description: "designer bouquet",
        cost: "29", 
        size: "S",
    },
    {
        id: 5,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-5.jpg",
        description: "designer bouquet",
        cost: "66", 
        size: "M",
    },
    {
        id: 6,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-6.jpg",
        description: "designer bouquet",
        cost: "68", 
        size: "L",
    },
    {
        id: 7,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-7.jpg",
        description: "designer bouquet",
        cost: "90", 
        size: "XL",
    },
    {
        id: 8,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-8.jpg",
        description: "designer bouquet",
        cost: "63", 
        size: "M",
    },
    {
        id: 9,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-9.jpg",
        description: "designer bouquet",
        cost: "45", 
        size: "S",
    },
    {
        id: 10,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-10.jpg",
        description: "designer bouquet",
        cost: "73", 
        size: "L",
    },
    {
        id: 11,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "../images/bouquet/bouquet-11.jpg",
        description: "designer bouquet",
        cost: "88", 
        size: "XL",
    },
    {
        id: 12,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-12.jpg",
        description: "designer bouquet",
        cost: "39", 
        size: "S",
    },
    {
        id: 13,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-13.jpg",
        description: "designer bouquet",
        cost: "55", 
        size: "M",
    },
    {
        id: 14,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-14.jpg",
        description: "designer bouquet",
        cost: "75", 
        size: "L",
    },
    {
        id: 15,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-15.jpg",
        description: "designer bouquet",
        cost: "95", 
        size: "XL",
    },
    {
        id: 16,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-16.jpg",
        description: "designer bouquet",
        cost: "41", 
        size: "S",
    },
    {
        id: 17,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-17.jpg",
        description: "designer bouquet",
        cost: "60", 
        size: "M",
    },
    {
        id: 18,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-18.jpg",
        description: "designer bouquet",
        cost: "65", 
        size: "L",
    },
    {
        id: 19,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-19.jpg",
        description: "designer bouquet",
        cost: "85", 
        size: "XL",
    },
    {
        id: 20,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-20.jpg",
        description: "designer bouquet",
        cost: "32", 
        size: "S",
    },
    {
        id: 21,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-21.jpg",
        description: "designer bouquet",
        cost: "55", 
        size: "M",
    },
    {
        id: 22,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-22.jpg",
        description: "designer bouquet",
        cost: "80", 
        size: "L",
    },
    {
        id: 23,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-23.jpg",
        description: "designer bouquet",
        cost: "100", 
        size: "XL",
    },
    {
        id: 24,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-24.jpg",
        description: "designer bouquet",
        cost: "35", 
        size: "S",
    },
    {
        id: 25,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-25.jpg",
        description: "designer bouquet",
        cost: "56", 
        size: "M",
    },
    {
        id: 26,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-10.jpg",
        description: "designer bouquet",
        cost: "70", 
        size: "L",
    },
    {
        id: 27,
        name: "Bouquet 'Sun' ", 
        category: "peonies", 
        image: "./images/bouquet/bouquet-21.jpg",
        description: "designer bouquet",
        cost: "90", 
        size: "XL",
    },
];



const bouquetCards = document.querySelector('.bouquet-cards');

window.addEventListener("DOMContentLoaded", function() {
        let displayMenu = menu.map(function(item) {
            return `
                <div class="bouquet-card">
                    <div class="bouquet-img">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="card-name">
                        <h3>${item.name}</h3>
                    </div>
                    <div class="line"></div>
                    <div class="card-price">
                        <h3>${item.cost} <span class="currency">USD</span></h3>
                        <div class="cart-icon">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-cart-shopping"></i>
                        </div>
                    </div>
                </div>`;
        });
        displayMenu = displayMenu.join("");
        bouquetCards.innerHTML += displayMenu
        
});


const prevBqt = document.querySelector('.prev-bouquet');
const nextBqt = document.querySelector('.next-bouquet');


prevBqt.addEventListener("click", function() {
    
});

nextBqt.addEventListener("click", function() {
    
});


const  range1 = document.querySelector('#range1');
const  range3 = document.querySelector('#range3');

if(range1.value >= range3.value){
    range1.max = range1.value;
    range3.min = range1.max;
}