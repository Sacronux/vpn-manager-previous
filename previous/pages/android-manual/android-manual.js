import "./android-manual.scss"
import "../root"
import "@components/clipboard-input"
import "@components/modal-image"


const modalImage = document.getElementsByClassName("modal-image");

window.addEventListener("resize", function(){
  if (document.getElementById("modal"))
    document.body.removeChild(document.getElementById("modal"))
})

for (let i = 0; i < modalImage.length; ++i){
  modalImage[i].addEventListener("click", function(e){
    const modal = document.createElement("div"),
          image = document.createElement("img");

    image.src = this.src;
    image.className = "modal-image";

    if (document.body.offsetWidth > document.body.offsetHeight){
      image.style.width = "20%";
    } else {
      image.style.width = "55%";
    }

    modal.className = "modal-image-proto";
    modal.id = "modal";

    modal.addEventListener("click", function(e){
      if (e.target === this){
        document.body.removeChild(document.getElementById("modal"))
      }
    });

    modal.appendChild(image);

    document.body.appendChild(modal);
  });
}
