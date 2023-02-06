//Quand on clique sur l'image de tournoi nantes ou autre, l'image prendre tout l'écran
document.querySelector(".growUpImage").addEventListener("click", growUp);

function growUp(){
    if(document.querySelector(".growUpImage").style.transform==="scale(1.2)"){
        document.querySelector(".growUpImage").style.transform="scale(1)";
    }else{
   document.querySelector(".growUpImage").style.transform="scale(1.2)";
    }
}