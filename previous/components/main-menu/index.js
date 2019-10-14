import "./main-menu.scss"

const submenu = document.getElementsByClassName("submenu");

for (let i = 0; i < submenu.length; ++i){
  submenu[i].addEventListener("click", function(e){
    if (e.target.tagName == "SPAN" && this.children[0].checked){
        this.children[0].checked = false;
        e.stopPropagation();
        e.preventDefault();
    }

  })
}
