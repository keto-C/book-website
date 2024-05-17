// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const buttions = document.querySelector("#pageButtons")
// const mainButt = document.querySelector("#coverPage")
const firstButt = document.querySelector("#firstPage")
const secondButt = document.querySelector("#secondPage")
const thirdButt = document.querySelector("#thirdPage")
const fourthButt = document.querySelector("#fourthPage")
const fifthButt = document.querySelector("#fifthPage")
// const back = document.querySelector("#back")
const title = document.querySelector("#title")
const imigi = document.querySelector(".pipi2")

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");
const paper8 = document.querySelector("#p8");
const paper9 = document.querySelector("#p9");
const paper10 = document.querySelector("#p10");
const paper11 = document.querySelector("#p11")

let photo = 2;
let keramika = 4;
let mxatvroba = 6;
let moda = 8;
let grphDes = 10;
let currentLocation = 1;
let numOfPapers = 11;
let maxLocation = numOfPapers + 1;
let opened = false;

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
title.addEventListener("click", function(event){ goTo(event,1)});
firstButt.addEventListener("click", function(event) { goTo(event,photo)});
secondButt.addEventListener("click", function(event) {goTo(event,keramika)});
thirdButt.addEventListener("click", function(event) {goTo(event,mxatvroba)});
fourthButt.addEventListener("click",function(event){goTo(event,moda)});
fifthButt.addEventListener("click",function(event){goTo(event,grphDes)});
// back.addEventListener("click",function(event){goTo(event,11)})
title.addEventListener("mouseover", function() {
    buttions.style.width="100%"
    
})
title.addEventListener("mouseout", function() {
    buttions.style.width="0px"  
})
buttions.addEventListener("mouseover",function(){
    buttions.style.width="100%"
})
buttions.addEventListener("mouseout",function(){
    buttions.style.width="0px"
})
// title.addEventListener("click", function(){
//     if(opened) {
//         buttions.style.width="0px"
//         opened=false;
//     } else {
//         buttions.style.width="100%"
//         opened=true;
//     }
// })
// Business Logic

function openBook() {
    
    book.style.transform = "translateX(-80px)";
    // book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-430px)";
    // prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(-80px)";
    // nextBtn.style.transform = "translateX(180px)";
    imigi.style.visibility = "hidden";
    // buttions.style.transform = "translateX(-180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
    imigi.style.visibility = "visible";
    // buttions.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                setTimeout(() => {paper1.style.zIndex = 1}, 300);
                break;
            case 2:
                paper2.classList.add("flipped");
                setTimeout(() => {paper2.style.zIndex = 2}, 300);
                break;
            case 3:
                paper3.classList.add("flipped");
                setTimeout(() => {paper3.style.zIndex = 3;}, 300);
                break;
            case 4:
                paper4.classList.add("flipped");
                setTimeout(() => {paper4.style.zIndex = 4;}, 300);
                break;
            case 5:
                paper5.classList.add("flipped");
                setTimeout(() => {paper5.style.zIndex = 5;}, 300);
                break;
            case 6:
                paper6.classList.add("flipped");
                // paper6.style.zIndex = 6;
                setTimeout(() => {paper6.style.zIndex = 6;}, 300);
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                break;
            case 8:
                paper8.classList.add("flipped");
                paper8.style.zIndex = 8;
                break;
            case 9:
                paper9.classList.add("flipped");
                paper9.style.zIndex = 9;
                break;
            case 10:
                paper10.classList.add("flipped");
                paper10.style.zIndex = 10;
                break;
            case 11:
                paper11.classList.add("flipped");
                paper11.style.zIndex = 11;
                closeBook(false);
                break;
                
            default:
                alert("unkown state");
        }
        currentLocation++;
    }
    console.log(currentLocation)
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 11;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 10;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 9;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 8;
                break;
            case 6:
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 7;
                break;
            case 7:
                paper6.classList.remove("flipped");
                setTimeout(()=>{paper6.style.zIndex = 6;}, 200)
                break;
            case 8:
                paper7.classList.remove("flipped");
                setTimeout(()=>{paper7.style.zIndex = 5;},200)
                break;
            case 9:
                paper8.classList.remove("flipped");
                setTimeout(()=>{paper8.style.zIndex = 4;},200)
                break;
            case 10:
                paper9.classList.remove("flipped");
                setTimeout(()=>{paper9.style.zIndex = 3;},200)
                break;
            case 11:
                paper10.classList.remove("flipped");
                setTimeout(()=>{paper10.style.zIndex = 2;},200)
                break;
            case 12:
                openBook();
                paper11.classList.remove("flipped");
                setTimeout(()=>{paper11.style.zIndex = 1;},200)
                break;
            default:
                alert("unkown state");
        }

        currentLocation--;
        console.log(currentLocation)
    }
}

function goTo(event,n) {
    let b = currentLocation;
    if(b < n) {
        for(i=0;i<(n-b);i++){
            goNextPage();
            console.log(currentLocation);
        }
    } else if (b > n){
        for(i=0;i<(b-n);i++){
            goPrevPage();
            console.log(currentLocation);
        }
    } else {
        alert("ukve aq vart zma")
    }
}
