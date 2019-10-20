import "./package-list.scss"
import "../root"
import "@components/alert-message"
import "@components/price-card"

const spoilers = document.getElementsByClassName("spoiler small");

for (let i = 0; i < spoilers.length; ++i){
  spoilers[i].addEventListener("click", function(e){
    if (e.target.tagName == "SPAN" && this.children[0].checked){
        this.children[0].checked = false;
        e.stopPropagation();
        e.preventDefault();
    }
  })
}
