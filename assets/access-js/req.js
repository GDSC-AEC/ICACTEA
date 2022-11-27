// Uncomment the Required Code for that particular Application
// for ICDECT you'll uncomment ICDECT Block of Code
// for RDECS you'll uncomment RDECS Block of Code
// for ICISMT you'll uncomment ICISMT Block of Code


// ICDECT
function dude(data){
    if(data['Permission'] == "NOT Granted"){
    document.getElementsByTagName("BODY")[0].style.display = "none";
    write('-- PAYMENT DELAYED --')
    }
}

fetch('https://aece-apps.herokuapp.com/api/001001/verify/ICDECT')
.then(response => response.json())
.then(data => dude(data));
// ICDECT END


// RDECS
// function dude(data){
//     if(data['Permission'] == "NOT Granted"){
//     document.getElementsByTagName("BODY")[0].style.display = "none";
//     write('-- PAYMENT DELAYED --')
//     }
// }

// fetch('https://aece-apps.herokuapp.com/api/001001/verify/RDECS')
// .then(response => response.json())
// .then(data => dude(data));
// RDECS END


// ICISMT
// function dude(data){
//     if(data['Permission'] == "NOT Granted"){
//     document.getElementsByTagName("BODY")[0].style.display = "none";
//     write('-- PAYMENT DELAYED --')
//     }
// }

// fetch('https://aece-apps.herokuapp.com/api/001001/verify/ICISMT')
// .then(response => response.json())
// .then(data => dude(data));
// ICISMT END