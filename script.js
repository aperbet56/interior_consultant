// Récupération des éléments HTML5
const navigation = document.querySelector(".nav");
const menuBurger = document.querySelector(".burger__btn");
const navLinks = document.querySelectorAll(".link");

// Déclaration de la fonction toggleNav qui va permettre l'affichage des liens de navigation
const toggleNav = () => {
  menuBurger.classList.toggle("active");
  navigation.classList.toggle("active");
};

// Ecoute de l'événement "click" sur le bouton menuBurger et appel de la fonction toggleNav
menuBurger.addEventListener("click", toggleNav);

navLinks.forEach((link) =>
  // Ecoute de l'événement click
  link.addEventListener("click", (e) => {
    // Évite que l'évènement courant ne se propage plus loin dans les phases de capture et de déploiement.
    e.stopPropagation();
    // Appel de la fonction toggleNav
    toggleNav();
  })
);
