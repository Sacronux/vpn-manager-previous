import "./sign-up.scss"
import "@styles/vpnm-form"


const input = document.getElementById("required-input"),
      send = document.getElementById("send-code"),
      textfields = document.getElementsByClassName("vpnm-form__input");


for (let i = 0; i < textfields.length; ++i){
  textfields[i].value = "";
}

input.addEventListener("keyup", function(){
    if (!this.value){
      send.className = "vpnm-form__button disabled";
      send.dataset.enabled = false;
      return;
    }
  send.className = "vpnm-form__button blue";
  send.dataset.enabled = true;
})


send.addEventListener("click", function(){
  if (!this.dataset.enabled && this.dataset.sent) return;
  this.className = "vpnm-form__button clicked";
  this.dataset.sent = true;
})
