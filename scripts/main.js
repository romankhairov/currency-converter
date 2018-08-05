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

//#region Load Data

function loadData(){
    const currency1 = document.getElementById('currency1');
    const currency2 = document.getElementById('currency2');
    const serverData = new XMLHttpRequest();
    serverData.onreadystatechange = function() {
        if(serverData.readyState == 4 && serverData.status == 200) {
            const obj = JSON.parse(this.responseText);
            const options = '';
            for(key in obj.rates);
        }
    }
}

//#endregion Load Data
