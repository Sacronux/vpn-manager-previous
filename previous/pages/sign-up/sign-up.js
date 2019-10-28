import "./sign-up.scss"
import "@styles/vpnm-form"


const inputs = document.getElementsByClassName("required-input"),
      send = document.getElementById("send-code");

for (let i = 0; i < inputs.length; ++i){
  inputs[i].value = "";
  inputs[i].addEventListener("keyup", function(){
    for (let j = 0; j < inputs.length; ++j){
      if (!inputs[j].value){
        send.className = "vpnm-form__button disabled";
        send.dataset.enabled = false;
        return;
      }
    }
    send.className = "vpnm-form__button blue";
    send.dataset.enabled = true;
  })
}

send.addEventListener("click", function(){
  if (!this.dataset.enabled && this.dataset.sent) return;
  this.className = "vpnm-form__button clicked";
  this.dataset.sent = true;
})
