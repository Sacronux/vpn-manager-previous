import "./language-panel.scss"


const panel = document.getElementsByClassName("language-panel")[0];

panel.addEventListener("click", function(){
  if (document.body.offsetWidth < 648) {
    const submenu = document.getElementsByClassName("submenu");
    for (let i = 0; i < submenu.length; ++i){
      submenu[i].children[0].checked = false;
    }
  }
})
