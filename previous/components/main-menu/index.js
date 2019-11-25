import "./main-menu.scss"
import "@components/language-panel"


const submenu = document.getElementsByClassName("submenu"),
      burgerClose = document.getElementById("close-burger");

burgerClose.addEventListener("click", function(e){
  document.getElementById(this.dataset.for).className = "main-menu close-menu"
})

for (let i = 0; i < submenu.length; ++i){
  submenu[i].addEventListener("click", function(e){
    if (e.target.tagName == "SPAN" && this.children[0].checked){
        this.children[0].checked = false;
        e.stopPropagation();
        e.preventDefault();
    }
    if (document.body.offsetWidth < 648){
      document.getElementsByClassName("language-panel")[0].children[0].checked = false;
    }
  })
}
