import "./server-manager.scss"
import "../root"
import "@components/clipboard-input"
import "@components/status-button"


const rows = document.getElementsByClassName("table-nodes__row"),
      content = document.getElementsByClassName("table-nodes__content");

for (let i = 0; i < rows.length; ++i){
  rows[i].addEventListener("click", function(){
    if (!content[i].dataset.expanded){
      content[i].dataset.expanded = true;
      content[i].style.display = "table-row";
      this.style.background = "#9DDFF7";
    } else {
      content[i].removeAttribute("data-expanded");
      this.removeAttribute("style");
      content[i].style.display = "none";
    }
  })
}
