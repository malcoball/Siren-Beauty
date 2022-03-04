// DOM selectors
const navBar = document.querySelector("#navbar");
const topPics = document.querySelectorAll(".mbPricePic");
const priceBoxes = document.querySelectorAll(".mbPriceBox");
const navBig = "navbig navbar navbar-expand-lg fixed-top nCol1 nBCol1";
const navSml = "navsml navbar navbar-expand-lg fixed-top nCol1 nBCol1";
let boxSize = "large";
let navSize;
if (window.pageYOffset < 72) {
    navSize = "small";
} else {
    navSize = "large";
}


// Affect the styling
function changeClass() {
    let height = window.pageYOffset;
    if (navSize == "small") {
        if (height > 72) {
            navSize = "large";
            navBar.className = navBig;
        }
    } else {
        if (height < 72) {
            navSize = "small";
            navBar.className = navSml;
        }
    }
}
function borderRadius(){
    let width = visualViewport.width;
    if (width < 992){
        if (boxSize == "large"){
            for (i=0;i<4;i++){
            topPics[i].style.borderRadius = "0";
            }
            boxSize = "small";
        }
    } else {
        if (boxSize == "small"){
            topPics[0].style.borderRadius = "25% 5% 5% 25%";
            topPics[3].style.borderRadius = "5% 25% 25% 5%";
            boxSize = "large";
        }
    }
}
document.addEventListener("scroll",()=>{
    changeClass();
})
borderRadius();
visualViewport.addEventListener('resize',()=>{
    borderRadius();
})

