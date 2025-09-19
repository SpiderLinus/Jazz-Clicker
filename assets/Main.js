const Clicks = document.getElementById("clicker");
const ShowValue = document.getElementById("value");
const Resetvalue = document.getElementById("resetbtn");
const AutoClick = document.getElementById("autoclicker");


let cookies = 0;
let addedvalue = 1;



ShowValue.innerText = cookies;


Clicks.addEventListener("click", () => {

    ShowValue.innerText = cookies += addedvalue;
    
    console.table(cookies);

});



Resetvalue.addEventListener("click", () => {

    ShowValue.innerText = cookies = 0;

});

AutoClick.addEventListener("click", () => { 
    switch(cookies) {
    case 20:
        var CookieIncrement = setInterval((value, time) => {
                value(10)
            }, time(1000));
            
    break;
}
});



switch(addedvalue) {

            
    
    default:
        AutoClick.innerHTML = "Reach level 1"
}


/* var AC = setInterval((value, time) => {
                value(1)
            }, time(1000)); */