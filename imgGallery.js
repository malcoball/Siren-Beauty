//DOM elements
const txt = document.querySelectorAll(".galleryImgText");
const imgs = document.querySelectorAll(".galleryImg");
const test = document.querySelector(".galleryImg:hover");
const picViewCont = document.querySelector(".picViewCont");
const imgShow = document.querySelector("#imgShow");
const cross = document.querySelector("#crossIco1");
const arrows = document.querySelectorAll(".galleryArrow");

let imgChange = imgShow.src;
let imgInt = 0; // Control which image is being shown


// Loop for all the thumbnails
for(i=0;i<imgs.length;i++){
    // Gives all the elements unique classes
    imgs[i].classList.add("elm"+i);   
    // Make the images bigger on mouse hover events
    imgs[i].addEventListener("mouseover",(i)=>{
        let int = getInt(i.target.className);
        toggleClass(txt[int]);

        setTimeout(setWidth(i,txt[int]),1500);
    })
    imgs[i].addEventListener("mouseout",(i)=>{
        let int = getInt(i.target.className);
        toggleClass(txt[int]);
    })
    imgs[i].addEventListener("click",(i)=>{
        toggleClass(picViewCont);
        changeImg(getInt(i.target.className));
    })
}

// Hide the fullscreen element
cross.addEventListener("click",()=>{
    toggleClass(picViewCont);
})
// Show the next image
arrows[0].addEventListener("click",()=>{
    changeImgInt();
    changeImg(imgInt);
})
arrows[1].addEventListener("click",()=>{
    changeImgInt(0);
    changeImg(imgInt);
})


// Functions, duh
function changeImg(num){
    // Get the number
    // Get the clicked image's src
    imgInt = num;
    let inSrc =imgs[imgInt].src;
    imgChange = inSrc;
    imgShow.src = imgChange;
}
function setWidth(image,target){
    let width = (image.target.width);
    target.style.width = 1+width*1.05+"px";
    console.log(width);
}
function changeImgInt(dir){
    if (dir == 0){ // Going down/left
        if (imgInt == 0) imgInt = imgs.length-1;
        else imgInt --;
    } else {
        if (imgInt == imgs.length-1) imgInt = 0;
        else imgInt ++;
    }
    console.log(imgs.length);
}

//txt[1].style.width = "319px";
function toggleClass(target){
    target.classList.toggle("d-none");
}
function getInt(str){
    let out = parseInt(str.slice(str.indexOf("elm")+3,str.length));
    return out;
}
// display the gallery, will probably have a hidden html element that will need to be shown.