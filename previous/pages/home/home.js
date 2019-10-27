import "./home.scss"
import "../root"
import "@components/clipboard-input"

const tabs = document.getElementsByClassName("tabs__tab"),
      buttons = document.getElementsByClassName("control-button__input");

buttons[0].checked = true;

for (let i = 0; i < tabs.length; ++i){
  tabs[i].addEventListener("click", function(){
    buttons[i].checked = true;
    document.getElementsByClassName("activity")[0].className = "tabs__tab";
    this.className = "tabs__tab activity";
  });
  buttons[i].addEventListener("change", function(){
    document.getElementsByClassName("activity")[0].className = "tabs__tab";
    tabs[i].className = "tabs__tab activity";
  })
}


const smallTabs = document.getElementsByClassName("manuals__tab"),
      input = document.getElementsByClassName("manuals__input");

input[0].checked = true;

for (let i = 0; i < smallTabs.length; ++i){
  smallTabs[i].addEventListener("click", function(){
    input[i].checked = true;
    document.getElementsByClassName("active")[0].className = "manuals__tab";
    this.className = "manuals__tab active"
  })
}
