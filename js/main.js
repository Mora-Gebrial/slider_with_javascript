//get slider items
var sliderImages = Array.from(
    document.querySelectorAll(".slider-container img")
);
// get number of slides
var slidesCount = sliderImages.length;
console.log(slidesCount);
// set current slide
var currentSlide = 1;
// slider number element
var slideNumberElement = document.getElementById("slider-number");
// previous and next buttons
var nextButton = document.getElementById("next");
var prevButton = document.getElementById("prev");

// handle clicks on next and previous buttons

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
// create the main ul element
var paginationElement = document.createElement("ul");
// set id on created new ul element
paginationElement.setAttribute("id", "pagination-ul");

// create list items based on slides count
for (var i = 1; i <= slidesCount; i++) {
    var paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-index", i);
    paginationItem.appendChild(document.createTextNode(i));
    paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);

var paginationCreatedUl = document.getElementById("pagination-ul");
var paginationBullets = Array.from(
    document.querySelectorAll("#pagination-ul li")
);
for (var i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker();
    };
}
theChecker();

// next slide function
function nextSlide() {
    if (nextButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide++;
        theChecker();
    }
}

// previous slide function
function prevSlide() {
    if (prevButton.classList.contains("disabled")) {
        return false;
    } else {
        currentSlide--;
        theChecker();
    }
}

function theChecker() {
    slideNumberElement.textContent =
        "slide #" + currentSlide + " of " + slidesCount;
    removeAllActive();
    sliderImages[currentSlide - 1].classList.add("active");
    paginationCreatedUl.children[currentSlide - 1].classList.add("active");
    if (currentSlide == 1) {
        prevButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }

    if (currentSlide == slidesCount) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
    }
}
// remove all active classes from images and bullets
function removeAllActive() {
    sliderImages.forEach(function(Image) {
        Image.classList.remove("active");
    });
    paginationBullets.forEach(function(bullet) {
        bullet.classList.remove("active");
    });
}