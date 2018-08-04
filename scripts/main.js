let uah = 7;
let pln = 1;
let amount = 200;

const $btnOk = document.querySelector(".btn--ok");
const $plnInput = document.getElementById("pln-input");
const $uahInput = document.getElementById("uah-input");

$(document).ready(function() {
    $('select').material_select();
});

// const uahPln = amount * uah/pln;
// console.log(uahPln);

const plnUah = amount * pln/uah;


//#region Date Block

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+ dd
} 

if(mm<10) {
    mm = '0'+ mm
} 

today = `${mm}/${dd}/${yyyy}`;
console.log(today);

//#endregion Date 

//#region Converter Block


var uahPln = (amount, pln, uah) => amount * pln / uah;

const forUah = uahPln(amount, pln, uah);


//#endregion Converter Block

//#region DOM

$btnOk.addEventListener("click", function(e){
    e.preventDefault();

    // 1. Select and read data from input
    const plnAmount = ~~parseInt($plnInput.value); // use "~~" for convert string into 0
    const uahAmount = ~~parseInt($uahInput.value);

    
    // (typeof plnAmount !== "NaN") ? (plnAmount * pln / uah) : (console.log("Enter a number!"));

    // 2. Calculate

    if(plnAmount.length !== 0) {
        $uahInput.value = plnAmount * pln / uah;
    } else {
        $plnInput.value = uahAmount * uah / pln;
    } 

    
    // 3. Output data to UI
  


});

//#endregion DOM
