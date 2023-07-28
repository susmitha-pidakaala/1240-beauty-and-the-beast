let beast = document.getElementById("beast");
let beauty = document.getElementById("beauty");
let switchon = document.getElementById("switchon");
let onbutton = document.getElementById("onbutton");
let offbutton = document.getElementById("offbutton");
function onbutton1(){
    beast.src="https://m.media-amazon.com/images/M/MV5BMmMwYTQ2YjYtNjE5ZS00YjdhLWJlNjItNWU4Yzg0N2U2NmU5XkEyXkFqcGdeQVRoaXJkUGFydHlJbmdlc3Rpb25Xb3JrZmxvdw@@._V1_.jpg";
    beauty.src="https://miro.medium.com/v2/resize:fit:2000/1*pO9irmkDNVsm7HCUuIxyZQ.jpeg";
    switchon.textContent ="Beast";
    switchon1.style.color="red";
    
    document.getElementById("onbutton").style.backgroundColor="green";
    document.getElementById("onbutton").style.backgroundColor="gray";


}
function offbutton1(){
    beast.src="https://cdn.vox-cdn.com/thumbor/o3rcgdAHVwwDWMsGNf5_OtxuyfM=/0x0:1440x603/1400x1050/filters:focal(934x195:1164x425):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/53858819/Screen_Shot_2017_01_31_at_1.57.35_PM.0.png";
    beauty.src="https://assets.teenvogue.com/photos/5f989ce7dddcbbdc23486bb6/16:9/w_2560%2Cc_limit/BATB-02393Rsm_.jpg";
    switchon.textContent = "Beauty";
    switchon1.style.color="red";
    document.getElementById("onbutton").style.backgroundColor="gray";
    document.getElementById("onbutton").style.backgroundColor="green";

    

}