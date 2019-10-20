import "./home.scss"
import "../root"

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
