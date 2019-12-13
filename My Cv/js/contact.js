
function shoe(x){
  let div = document.getElementById("show_div");
  div.innerHTML=`<div class="show_message"><i class="fa fa-exclamation-triangle"></i> ${x}<div>`
}

function checkForm(){
    var emailID = document.sentMessage.email1.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    let default_text=document.getElementById("default_text")
    if( document.sentMessage.username.value == "" ) {
        shoe("Please provide your name!");
        document.sentMessage.username.focus() ;
        return false;
     }
     if( document.sentMessage.email1.value == "" || (atpos < 1 || ( dotpos - atpos < 2 ))) {
        shoe("Please provide your Email!");
        document.sentMessage.email1.focus() ;
        return false;
     }
     if( document.sentMessage.phone1.value.length<10 ||document.sentMessage.phone1.value.length>10 || isNaN(document.sentMessage.phone1.value) ) {
        shoe("Please provide a correct phone number");
        document.sentMessage.phone1.focus() ;
        return false;
    }
     if( document.sentMessage.message1.value < "10" ) {
        shoe("Please leave a message!");
        return false;
     }
     default_text.innerHTML=`<i class="fas fa-check color"></i><span> Your message was received!<span>`;
     document.sentMessage.username.value="";
     document.sentMessage.email1.value="";
     document.sentMessage.phone1.value="";
     document.sentMessage.message1.value="";
     remove.shoe("");
     return( true );
}

function addPost(event){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let phone=document.getElementById("phone").value;
    let message=document.getElementById("message").value;
    const myPost={
        name:name,
        email:email,
        phone:phone,
        message:message
    }
    fetch("https://jsonplaceholder.typicode.com/posts" , {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(myPost)
    })
        .then((res) => {
            if(res.ok){
                return res.json()
            }else{
                return Promise.reject({status:res.status, statusText: res.statusText});
            }
        })
        .then((data)=> 
        document.getElementById("div").innerHTML=
        `<p class="obj_form"><i class="far fa-envelope color-env"></i> Multumesc pentru mesaj ! </p><p><span class="data_form"> ${data.name} </span> , o sa iti raspund in cel mai scurt timp pe adresa <span class="data_form"> ${data.email}</span> sau la numarul de telefon <span class="data_form">${data.phone}</span>.
         Mesajul ${data.message} a fost primit!`)
        .catch(err => console.log('Error message:' ,  err.statusText))
    }
document.getElementById("contactForm").addEventListener("submit", addPost);
document.getElementById("contactForm").addEventListener("submit", checkForm);