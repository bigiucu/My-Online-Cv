//Nav-bar photo//
function addPhotoContent(){
    let photo_nav=document.querySelector('.navbar-brand');
    let photo_profile=document.createElement('img');
    photo_profile.setAttribute("src", "img/nav-bg.jpg");
    photo_profile.setAttribute("width", "80");
    photo_profile.setAttribute("height", "80");
    photo_profile.setAttribute("alt", "About Alexandra");
    photo_profile.classList.add("foto_display");
    photo_nav.innerHTML='Alexandra Roman';
    photo_nav.appendChild(photo_profile);
}

document.querySelector('.navbar-brand').addEventListener("click",addPhotoContent);


// Footer //
function updateFooter() {
    let updateDate = new Date();
    let yearUpdate = updateDate.getFullYear();
    let monthUpdate= updateDate.getMonth()+1;
    let dateUpdate=updateDate.getDate();
    document.getElementById("footerClass").innerHTML ='&copy; All rights reserved'+' '+ dateUpdate +'.'+ monthUpdate +'.'+yearUpdate;
  }
  
function removeUpdate(){
      document.getElementById("footerClass").innerHTML='&copy; Alexandra Roman';
}

document.getElementById("footerClass").addEventListener("mouseover",updateFooter);
document.getElementById("footerClass").addEventListener("mouseleave", removeUpdate);

