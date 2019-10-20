import "./root.scss"
import "@components/logo"
import "@components/logo-mobile"
import "@components/header"
import "@components/main-menu"
import "@components/user-button"
import "@components/burger"

window.addEventListener("resize", function(){
  const menu = document.getElementById("nav-bar");

  menu.className = "main-menu"
})
