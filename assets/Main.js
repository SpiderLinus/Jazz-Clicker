const Clicks = document.getElementById("clicker");
const ShowValue = document.getElementById("value");
const Resetvalue = document.getElementById("resetbtn");
const AutoClick = document.getElementById("autoclicker");





let cookies = 0;
let addedvalue = 1;
let autoclicker;


function AudioPlayer() {
    let audio = new Audio("https://cdn.griphcode.dev/AUDIO/click.wav");

    audio.play();
}


ShowValue.innerText = cookies;


Clicks.addEventListener("click", () => {

    AudioPlayer();
    
    ShowValue.innerText = cookies += addedvalue;
    
    console.table(cookies);



});



Resetvalue.addEventListener("click", () => {

    ShowValue.innerText = cookies = 0;

});

AutoClick.addEventListener("click", () => { 
    AutoClicker();
});


function AutoClicker(time, value) {

    if(cookies === 20) {
        console.log(true);

        setInterval(() => {
                cookies(10)
            }, 1000);

    }
    else {
        AutoClick.innerHTML = "Lvl 1";
    }

}

AutoClicker();

/* var CookieIncrement = setInterval(() => {
                cookies(10)
            }, 1000); */