import "./burger.scss"

const burgers = document.getElementsByClassName("burger");

for (let i = 0; i < burgers.length; ++i){
  burgers[i].addEventListener("click", function(e){
    document.getElementById(this.dataset.for).className = "main-menu open-menu"
  });
}
