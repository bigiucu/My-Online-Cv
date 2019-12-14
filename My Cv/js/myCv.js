
function createEducation(){
    let div1=document.getElementById("div1");
    let img1=document.createElement("img");
    img1.setAttribute("src" , "img/scoala-inf.jpg");
    img1.setAttribute("width" ,"80px");
    img1.setAttribute("height" , "80px");
    img1.classList.add("img-cv");
    div1.appendChild(img1);    
    let paragraph = document.createElement("p");                 
    paragraph.innerHTML = "Feb 2019 - Nov 2019";  
    div1.appendChild(paragraph); 
    let paragraph2=document.createElement("P");
    paragraph2.innerHTML="Scoala Informala de It Cluj-Napoca"
    paragraph.appendChild(paragraph2);
    let list=document.createElement("li");
    list.setAttribute("class","li-cv")
    let listText=document.createTextNode("Basic knowledge of HTML, CSS, JAVASCRIPT, SQL and testing tehniques, WebDevelopment");
    list.appendChild(listText);
    paragraph2.appendChild(list);
    let img2=document.createElement("img");
    img2.setAttribute("src" , "img/usamv-logo.png");
    img2.setAttribute("width" ,"80px");
    img2.setAttribute("height" , "80px");
    img2.classList.add("img-cv");
    paragraph2.appendChild(img2);    
    let paragraph3 = document.createElement("p");                 
    paragraph3.innerHTML = "Oct 2012 - Iun 2014";  
    div1.appendChild(paragraph3);   
    let paragraph4=document.createElement("p");
    paragraph4.innerHTML="Universitatea de Stiinte Agricole Cluj-Napoca"
    paragraph3.appendChild(paragraph4);
    let list2=document.createElement("li");
    list2.setAttribute("class","li-cv")
    let listText2=document.createTextNode("Masterat: Siguranta si Protectia Consumatorului");
    list2.appendChild(listText2);
    paragraph4.appendChild(list2);
    let paragraph5 = document.createElement("p");                 
    paragraph5.innerHTML = "Oct 2008 - Iun 2012";  
    list2.appendChild(paragraph5);   
    let list3=document.createElement("li");
    list3.setAttribute("class","li-cv")
    let listText3=document.createTextNode("Facultate: Tehnologia prelucrarii produselor alimentare");
    list3.appendChild(listText3);
    paragraph4.appendChild(list3);
    let img3=document.createElement("img");
    img3.setAttribute("src" , "img/lmv-logo.jpg");
    img3.setAttribute("width" ,"80px");
    img3.setAttribute("height" , "80px");
    img3.classList.add("img-cv");
    paragraph4.appendChild(img3);
    let paragraph6 = document.createElement("p");                 
    paragraph6.innerHTML = "Sep 2004 - Iun 2008";  
    div1.appendChild(paragraph6);   
    let paragraph7=document.createElement("p");
    paragraph7.innerHTML="Colegiul National Mihai Viteazul Turda"
    paragraph6.appendChild(paragraph7);
    let list4=document.createElement("li");
    list4.setAttribute("class","li-cv")
    let listText4=document.createTextNode("Liceu: Stiintele naturii-profil real");
    list4.appendChild(listText4);
    paragraph7.appendChild(list4);
    document.getElementById("btn-1").removeEventListener("click",createEducation);
}
function createExperience(){
    let div2=document.getElementById("div2");          
    let img1=document.createElement("img");
    img1.setAttribute("src" , "img/sung-logo.jpg");
    img1.setAttribute("width" ,"80px");
    img1.setAttribute("height" , "80px");
    img1.classList.add("img-cv");
    div2.appendChild(img1)
    let paragraph = document.createElement("P");                 
    paragraph.innerHTML = "Ian 2015 - Nov 2019";               
    div2.appendChild(paragraph);
    let para2=document.createElement("P");
    para2.innerHTML="Hotel Sungarden Turda";
    paragraph.appendChild(para2);
    let list=document.createElement("p");
    let listText=document.createTextNode("Events Manager | Procurement Manager");
    list.appendChild(listText);
    para2.appendChild(list);
    let foto2=document.createElement("img");
    foto2.setAttribute("src" , "img/csa-logo.jpeg");
    foto2.setAttribute("width" ,"80px");
    foto2.setAttribute("height" , "80px");
    foto2.classList.add("img-cv");
    para2.appendChild(foto2);
    let paragraph3 = document.createElement("P");                 
    paragraph3.innerHTML = "Mai 2014 - Ian 2015";  
    para2.appendChild(paragraph3);  
    let paragraph4=document.createElement("P");
    paragraph4.innerHTML="Abator pasari CSA Turda";
    paragraph3.appendChild(paragraph4);
    let list2=document.createElement("p");
    let listText2=document.createTextNode("Gestionar | Operator comenzi");
    list2.appendChild(listText2);
    paragraph4.appendChild(list2);     
    document.getElementById("btn-2").removeEventListener("click",createExperience); 
}
function createSkills(){
    let div3=document.getElementById("div3");
    let img1=document.createElement("img");
    img1.setAttribute("src" , "img/soft-skills-logo.png");
    img1.setAttribute("width" ,"80px");
    img1.setAttribute("height" , "80px");
    img1.classList.add("img-cv");
    div3.appendChild(img1);
    let paragraph=document.createElement("p");
    paragraph.setAttribute("class","p-skills")
    paragraph.innerHTML="Soft Skills"
    div3.appendChild(paragraph);
    let ul1=document.createElement("ul");
    ul1.setAttribute("class","li-cv")
    div3.appendChild(ul1)
    let list1=document.createElement("li");
    let listText=document.createTextNode("empatie");
    list1.appendChild(listText);
    div3.appendChild(list1);
    let ul2=document.createElement("ul");
    ul2.setAttribute("class","li-cv")
    div3.appendChild(ul2)
    let list2=document.createElement("li");
    let listText2=document.createTextNode("comunicare");
    list2.appendChild(listText2);
    list1.appendChild(list2);
    let ul3=document.createElement("ul");
    ul3.setAttribute("class","li-cv")
    div3.appendChild(ul3)
    let list3=document.createElement("li");
    let listText3=document.createTextNode("capacitate de ascultare");
    list3.appendChild(listText3);
    list2.appendChild(list3);
    let ul4=document.createElement("ul");
    ul4.setAttribute("class","li-cv")
    div3.appendChild(ul4);
    let list4=document.createElement("li");
    let listText4=document.createTextNode("ambitie");
    list4.appendChild(listText4);
    list3.appendChild(list4);
    let ul5=document.createElement("ul");
    ul5.setAttribute("class","li-cv skills")
    div3.appendChild(ul5);
    let img2=document.createElement("img");
    img2.setAttribute("src" , "img/hard-skills-logo.png");
    img2.setAttribute("width" ,"80px");
    img2.setAttribute("height" , "80px");
    img2.classList.add("img-cv");
    div3.appendChild(img2);
    let paragraph2=document.createElement("p");
    paragraph2.setAttribute("class","p-skills")
    paragraph2.innerHTML="Hard Skills"
    div3.appendChild(paragraph2);
    let ul6=document.createElement("ul");
    ul6.setAttribute("class","li-cv")
    div3.appendChild(ul6)
    let list6=document.createElement("li");
    let listText6=document.createTextNode("gandire analitica");
    list6.appendChild(listText6);
    div3.appendChild(list6);
    let ul7=document.createElement("ul");
    ul7.setAttribute("class","li-cv")
    div3.appendChild(ul7)
    let list7=document.createElement("li");
    let listText7=document.createTextNode("abilitati de cautare");
    list7.appendChild(listText7);
    list6.appendChild(list7);
    let ul8=document.createElement("ul");
    ul8.setAttribute("class","li-cv")
    div3.appendChild(ul8)
    let list8=document.createElement("li");
    let listText8=document.createTextNode("abilitati matematice");
    list8.appendChild(listText8);
    list7.appendChild(list8);
    let ul9=document.createElement("ul");
    ul9.setAttribute("class","li-cv")
    div3.appendChild(ul9);
    document.getElementById("btn-3").removeEventListener("click",createSkills);
}

function showButton(){
    document.querySelector("a.btn.btn-primary.float-right").style.display="block";
}



document.getElementById("btn-1").addEventListener("click",createEducation);
document.getElementById("btn-2").addEventListener("click",createExperience);
document.getElementById("btn-3").addEventListener("click",createSkills);
document.getElementById("btn-1").onclick = showButton;
document.getElementById("btn-2").onclick = showButton;
document.getElementById("btn-3").onclick = showButton;

