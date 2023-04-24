

// info slider effect in mobile view
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const serviceItems = document.querySelectorAll(".service-items");
const circles = document.querySelectorAll(".circles");

let counter = 0;


nextBtn.addEventListener("click", () => {
    counter++;
    update();
});

prevBtn.addEventListener("click", () => {
    counter--;
    update();
});



function update() {
    if (!serviceItems) return; // Return if serviceItems is not defined yet
    if (counter >= serviceItems.length) {
        counter = 0;
    } else if (counter < 0) {
        counter = serviceItems.length - 1;
    }
    serviceItems.forEach((item, index) => {
        let translateY = (counter - index) * 100;
        item.style.transform = `translateY(${translateY}%)`;
    });
    // circles.forEach(circle => circle.classList.toggle("active"));

}
// ========================================== later try