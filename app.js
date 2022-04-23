const divider = document.getElementById('dividing-img');

let dividerSwapper = () => {
  if (window.matchMedia('(min-width: 1440px)'.match)) {
    divider.src = "./images/pattern-divider-desktop.svg";
  } else { 
    divider.src = "./images/pattern-divider-mobile.svg";
  }
}

