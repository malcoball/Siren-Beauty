// Get the open hours
const Time = new Date();
let day = Time.getDay();
let hours;
switch(day){
    case 1 : hours = "09:30 - 14:30"; break;
    case 2 : hours = "09:30 - 17:00"; break;
    case 4 : hours = "09:30 - 17:00"; break;
    case 5 : hours = "09:30 - 18:00"; break;
    case 6 : hours = "09:30 - 15:00"; break;
    default : hours = "CLOSED TODAY"; break;
}
//DOM elements
const Target = document.querySelector("#openTime");
const List      = document.querySelector("#timeDropDown")

console.log(hours);
Target.innerHTML = "Open Time : "+hours+"<img class='icon-m' src='assets/Icons/up Arrow.png'>";

Target.addEventListener("click",()=>{
    List.classList.toggle("d-none");
    console.log("clickd");
})