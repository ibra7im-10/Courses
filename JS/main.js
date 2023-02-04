/****************************************** select ((menuIcon - rightSection - leftSection - leftSectionUl))***************************************************/
let menuIcon = document.querySelector(".menu-icon");
let rightSection = document.querySelector(".right-section");
let leftSection = document.querySelector(".left-section");
let leftSectionUl = document.querySelector(".left-section ul");
let icons = document.querySelector(".left-section .icons");


/******************************** addEventListener (click) to menuIcon to add active class **************************************/
menuIcon.addEventListener("click", function () {
    rightSection.classList.toggle("active")
    leftSection.classList.toggle("active")
    leftSectionUl.classList.toggle("active")
    icons.classList.toggle("active")
})

/******************************* select (( notificationBtn - notification - closeNotifiact ))***************************************/
let notificationBtn = document.querySelector(".notification-btn");
let notifiact = document.querySelector(".notifiact");
let closeNotifiact = document.querySelector(".close-notifiact")

/******************************** addEventListener (click) to notificationBtn to add display class to notification-div **************************************/
notificationBtn.addEventListener("click", function () {
    notifiact.classList.add('display')
})

/******************************** addEventListener (click) to closeNotifiact to remove display class from notification-div **************************************/
closeNotifiact.addEventListener("click", function () {
    notifiact.classList.remove('display')
})