
function shoe(x){
  let div = document.getElementById("show_div");
  div.innerHTML=`<i class="fa fa-exclamation-triangle"></i> ${x}`
}

function checkForm(event) {
    event.preventDefault();
    let username = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let reg_email="/\S+@\S+\.\S+/";
    let messageform = document.getElementById("message");
}


function addPost(){
    checkForm(event);
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

document.getElementById("contactForm").addEventListener("submit",checkForm);
document.getElementById("contactForm").addEventListener("input", addPost);
