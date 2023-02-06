//Var globales
var slidesWidth = document
   .querySelector('.tournoi')
   .getBoundingClientRect().width;
var largeurEcran = document.querySelector('html').getBoundingClientRect().width;
var tournoisContainer = document.querySelector('.tournois_container');
var tournois = document.querySelector('.tournois');
var tournoi = document.querySelector('.tournoi');
var chevronLeft = document.querySelector('.fa-angles-left');
var chevronRight = document.querySelector('.fa-angles-right');
var compteur = 0;
var transfert;

//Si on est sur une tablette ou un mobile
if (largeurEcran <= 1024) {
   //on récupère les data
   var transition = tournoisContainer.dataset.transition;
   //on créer un clone de la première image
   var clone = tournois.firstElementChild.cloneNode(true);

   //on l'injecte à la fin du noeud
   tournois.appendChild(clone);

   //on clone l'array pour compter le nombre de slides
   slides = Array.from(tournois.children);
   console.log(slides);

   //On gère le click pour tourner
   chevronLeft.addEventListener('click', turnLeft);
   chevronRight.addEventListener('click', turnRight);
}

//fonction qui tourne à droite
function turnRight() {
   compteur++;
   tournois.style.transition = transition + 'ms linear';

   setTimeout(function () {
      if (compteur >= slides.length - 1) {
         compteur = 0;
         tournois.style.transition = 'unset';
         tournois.style.transform = `translateX(${0}px)`;
      }
   }, transition);
   transfert = compteur * -slidesWidth;
   tournois.style.transform = `translateX(${transfert}px)`;
}

//fonction qui tourne à gauche
function turnLeft() {
   compteur--;
   tournois.style.transition = transition + 'ms linear';

   if (compteur < 0) {
      compteur = slides.length - 1;
      tournois.style.transition = 'unset';
      setTimeout(turnLeft, 1);
   }
   transfert = compteur * -slidesWidth;
   tournois.style.transform = `translateX(${transfert}px)`;
}
