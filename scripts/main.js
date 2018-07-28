let uah = 7;
let pln = 1;
let amount = 100;


const uahPln = amount * uah/pln;
console.log(uahPln);

const plnUah = amount * pln/uah;
console.log(plnUah);

// -----------Date Block------------

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
console.log(today);

// -----------Date Block End------------