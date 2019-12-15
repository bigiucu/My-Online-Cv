function showText(x){
  let div = document.getElementById("show_div");
  div.innerHTML=`<div class="show_message"><i class="fa fa-exclamation-triangle"></i> ${x}<div>`
}

function checkForm(event){
    event.preventDefault();
    let emailID=document.sentMessage.email1.value;
    at_email = emailID.indexOf("@");
    dot_email = emailID.lastIndexOf(".");
    if( document.sentMessage.username.value == "" ) {
        showText("Please provide your name!");
        document.sentMessage.username.focus() ;
        return false;
     }
     if( document.sentMessage.email1.value == "" || (at_email < 1 || ( dot_email - at_email < 2 ))) {
        showText("Please provide your Email!");
        document.sentMessage.email1.focus() ;
        return false;
     }
     if( document.sentMessage.phone1.value.length < 10 || document.sentMessage.phone1.value.length >10 || isNaN(document.sentMessage.phone1.value) ) {
        showText("Please provide a correct phone number");
        document.sentMessage.phone1.focus() ;
        return false;
    }
     if( document.sentMessage.message1.value.length < "10" ) {
        showText("Please leave a message!");
        return false;
     }
     addPost();
     
}

function addPost(){

    const myPost={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        phone:document.getElementById("phone").value,
        message:document.getElementById("message").value
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
        .then((data)=>{ 
            showText("");
            document.getElementById("show_div").style.display="none";
            default_text.innerHTML=`<i class="fas fa-check color"></i><span> Your message was received!<span>`;
            document.getElementById("div").innerHTML=
            `<p class="obj_form"><i class="far fa-envelope color-env"></i> Multumesc pentru mesaj !</span> O sa iti raspund in cel mai scurt timp!  </span>`;
            document.sentMessage.reset();
        })
        .catch(err => console.log('Error message:' ,  err.statusText))
    }
document.getElementById("contactForm").addEventListener("submit", checkForm);



