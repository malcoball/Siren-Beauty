// DOM elements
const col1 = document.querySelectorAll(".col1");
const col2 = document.querySelectorAll(".col2");
const col3 = document.querySelectorAll(".col3");
const col4 = document.querySelectorAll(".col4");
const bCol1 = document.querySelectorAll(".bCol1");
const bCol2 = document.querySelectorAll(".bCol2");
const bCol3 = document.querySelectorAll(".bCol3");
const bCol4 = document.querySelectorAll(".bCol4");
const nCol1 = document.querySelectorAll(".nCol1");
const nColA = document.querySelectorAll(".nColA");
const nBcol1 = document.querySelectorAll(".nBCol1");
const aCol1 = document.querySelectorAll(".aCol1");

const classes = [
    col1,   //0
    col2,   //1
    col3,   //2 
    col4,   //3
    nCol1,  //4
    nColA,  //5
    aCol1,  //6
    bCol1,  //7 Start of backgrounds
    bCol2,  //8
    bCol3,  //9
    bCol4,  //10
    nBcol1, //11
]

// Color schemes
const colorScheme0 = [
    "#1d1d1d",  // 0 .col1
    "#555555",  // 1 .col2
    "#b3b3b3",  // 2 .col3
    "#d8d8d8",  // 3 .col4
    "#969696",  // 4 .nCol1
    "#620808",  // 5 .nColA
    "#dd853d",  // 6 .aCol1
    "#d8d8d8",  // 7 .bCol1
    "#b3b3b3", // 8 .bCol2
    "#686868",  // 9 .bCol3
    "#3b3b3b",  // 10.bCol4
    "#242424",  // 11.nBCol1
]
const colorScheme1=[
    "#5d5d5a",  // 0 .col1
    "#ffa45c",  // 1 .col2
    "#ffcdab",  // 2 .col3
    "#fff4e3",  // 3 .col4
    "#fff4e3",  // 4 .nCol1
    "#620808",  // 5 .nColA
    "#dd853d",  // 6 .aCol1
    "#fff4e3",  // 7 .bCol1
    "#ffcdab", // 8 .bCol2
    "#dd853d",  // 9 .bCol3
    "#5d5d5a",  // 10.bCol4
    "#a7622a",  // 11.nBCol1
]
const colorScheme2=[
    "#97edb6",  // 0 .col1
    "#159669",  // 1 .col2
    "#00511f",  // 2 .col3
    "#2a1c1b",  // 3 .col4
    "#2a1c1b",  // 4 .nCol1
    "#620808",  // 5 .nColA
    "#159669",  // 6 .aCol1
    "#2a1c1b",  // 7 .bCol1
    "#00511f", // 8 .bCol2
    "#159669",  // 9 .bCol3
    "#97edb6",  // 10.bCol4
    "#97edb6",  // 11.nBCol1
]
const colorScheme3=[
    "#ffedcd",  // 0 .col1
    "#d87b29",  // 1 .col2
    "#007e3a",  // 2 .col3
    "#2d3a3a",  // 3 .col4
    "#2d3a3a",  // 4 .nCol1
    "#620808",  // 5 .nColA
    "#d87b29",  // 6 .aCol1
    "#2d3a3a",  // 7 .bCol1
    "#007e3a", // 8 .bCol2
    "#d87b29",  // 9 .bCol3
    "#ffedcd",  // 10.bCol4
    "#ffedcd",  // 11.nBCol1
]

const colorScheme4 =[
    "#492540",  // 0 .col1
    "#c03546",  // 1 .col2
    "#f26d5b",  // 2 .col3
    "#f6ea8c",  // 3 .col4
    "#f6ea8c",  // 4 .nCol1
    "#620808",  // 5 .nColA
    "#c03546",  // 6 .aCol1
    "#f6ea8c",  // 7 .bCol1
    "#f26d5b", // 8 .bCol2
    "#c03546",  // 9 .bCol3
    "#492540",  // 10.bCol4
    "#492540",  // 11.nBCol1
]
const colorScheme5 =[
    "#bd9e5b",  // 0 .col1
    "#c03546",  // 1 .col2
    "#f26d5b",  // 2 .col3
    "#f6ea8c",  // 3 .col4
    "#f6ea8c",  // 4 .nCol1
    "#620808",  // 5 .nColA
    "#c03546",  // 6 .aCol1
    "#f6ea8c",  // 7 .bCol1
    "#f26d5b", // 8 .bCol2
    "#c03546",  // 9 .bCol3
    "#bd9e5b",  // 10.bCol4
    "#bd9e5b",  // 11.nBCol1
]

const colorScheme6 = [
    "#bd9e5b",  // 0 .col1
    "#555555",  // 1 .col2
    "#b3b3b3",  // 2 .col3
    "#d8d8d8",  // 3 .col4
    "#969696",  // 4 .nCol1
    "#620808",  // 5 .nColA
    "#dd853d",  // 6 .aCol1
    "#d8d8d8",  // 7 .bCol1
    "#b3b3b3", // 8 .bCol2
    "#686868",  // 9 .bCol3
    "#3b3b3b",  // 10.bCol4
    "#242424",  // 11.nBCol1
]



function replaceColor (pri,target,colorSwap){
    //col4[0].style.color = "red";
    if (pri == true){
        target.style.color = colorSwap;
    } else {
        target.style.backgroundColor = colorSwap;
    }
}
function replaceColors(colors){
    for(j=0;j<classes.length;j++){
        for(i=0;i<classes[j].length;i++){
            if (j<7) {
                replaceColor(true,classes[j][i],colors[j]);
            } else {
            replaceColor(false,classes[j][i],colors[j]);
            }
        }
    }
}

replaceColors(colorScheme1);