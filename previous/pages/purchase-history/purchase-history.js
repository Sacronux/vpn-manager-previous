import "./purchase-history.scss"
import "../root"
import "@components/pen-button"
import "@components/spoiler"


const tableButton = document.getElementsByClassName("table-pen-button"),
      spoilerButton = document.getElementsByClassName("spoiler-pen-button");

for (let i = 0; i < tableButton.length; ++i){
  tableButton[i].addEventListener("click", function(e){
    spoilerButton[i].checked = this.checked;
  });
  spoilerButton[i].addEventListener("click", function(e){
    tableButton[i].checked = this.checked;
  });
}
