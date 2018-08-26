//#region Date Block

// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth()+1; //January is 0!
// var yyyy = today.getFullYear();

// if(dd<10) {
//     dd = '0'+ dd
// } 

// if(mm<10) {
//     mm = '0'+ mm
// } 

// today = `${mm}/${dd}/${yyyy}`;
// console.log(today);

//#endregion Date 

//#region Load Data

function loadCurrency(){
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    const xHttp = new XMLHttpRequest();
    xHttp.onreadystatechange = function() {
        if(xHttp.readyState == 4 && xHttp.status == 200) {
            var obj = JSON.parse(this.responseText);
            var options = '';
            for(key in obj.rates) {
                options = options + '<option>' + key + '</option>';
            }
            from.innerHTML = options;
            to.innerHTML = options;
        }
    }
    // xHttp.open('GET', 'http://data.fixer.io/api/latest?access_key=257ae29ed773f02d9a2eb8f55cc1bddc', true);
    xHttp.open('GET', 'http://api.fixer.io/latest', true);
    xHttp.send();
}

//#endregion Load Data
