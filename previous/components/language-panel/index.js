import "./language-panel.scss"


const panel = document.getElementsByClassName("language-panel")[0];

panel.addEventListener("click", function(){
  const submenu = document.getElementsByClassName("submenu");
  for (let i = 0; i < submenu.length; ++i)new Promise(function(resolve, reject) {
    submenu[i].children[0].checked = false;
  });
})
