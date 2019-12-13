let questions = [
                ["Care este capitala Turciei?","Istanbul","Ankara","Antalya","B"],
                ["De ce tara apartine insula Sardinia?","Franta","Grecia","Italia","C"],
                ["Unde se afla Sagrada Familia?","Madrid","Barcelona","Valencia","B"]
                ];

let questionNr = 0;
let correct = 0;
let test, test_status, question, choice, choices, chA, chB, chC;

function get(x){
    return document.getElementById(x);
}

function showQuestion(){
    test = get("test");
    if(questionNr >= questions.length){
      test.innerHTML = `<div>You got ${correct} of ${questions.length} questions correct</div><div>The correct answers are:</div><div>1. ${questions[0][0,2]} 2. ${questions[1][1,3]} 3. ${questions[2][2,2]}`;
      get("test_status").innerHTML = `<i class="fas fa-check color"></i> Test completed`;
      questionNr = 0;
      correct = 0;
      return false;
}
    get("test_status").innerHTML =`Question ${(questionNr+1)} of ${questions.length}`;
    question = questions[questionNr][0];
    chA = questions[questionNr][1];
    chB = questions[questionNr][2];
    chC = questions[questionNr][3];
    test.innerHTML = `<h3>${question}</h3>
                     <br><input type='radio' name='choices' value='A'> ${chA} <br>
                     <input type='radio' name='choices' value='B'> ${chB} <br>
                     <input type='radio' name='choices' value='C'> ${chC} <br><br>
                     <button class='btn-answer' onclick='checkAnswer()'>Submit Answer</button>`
}

  function checkAnswer(){
    let choices = document.getElementsByName("choices");
    for(var i=0; i<choices.length; i++){
      if(choices[i].checked){
        choice = choices[i].value;
        // checks if answer matches the correct choice
    if(choice == questions[questionNr][4]){
      //each time there is a correct answer this value increases
      correct++;
    }
    // changes position of which question user is on
    questionNr++;
    showQuestion();
    }
  }
}
   
  window.addEventListener("load", showQuestion, false)
  
  function querySelect(x){
    return document.querySelector(x);
  }

  function tenisPlayer(){
    let tennis=querySelect(".tenis-player");
    tennis.innerHTML=`<img src="https://media.giphy.com/media/3oKIPkAsJiYo8TgUSs/source.gif" class="design-img">`
  }

  function removeTenis(){
    querySelect(".tenis-player").innerHTML=`#Jucatorul de tenis preferat: Simona Halep`;
}
  querySelect(".tenis-player").addEventListener("click",tenisPlayer);
  querySelect(".tenis-player").addEventListener("mouseleave",removeTenis);
  
  function handbalPlayer(){
    let handbal=querySelect(".handbal-player");
    handbal.innerHTML=`<img src="https://media.giphy.com/media/bnjPGPTiDIGWY/source.gif" class="design-img">`
  }
  function removeHandbal(){
    querySelect(".handbal-player").innerHTML=`#Jucatorul de handbal preferat: Cristina Neagu`;
}
  querySelect(".handbal-player").addEventListener("click",handbalPlayer);
  querySelect(".handbal-player").addEventListener("mouseleave",removeHandbal);
  
 
  function gymPlayer(){
    let gym=querySelect(".gym-player");
    gym.innerHTML=`<img src="https://media.giphy.com/media/4OWeZ8sLg9V9m/source.gif" class="design-img">`
  }
  function removeGym(){
    querySelect(".gym-player").innerHTML=`#Gimnasta favorita: Catalina Ponor`;
}
  querySelect(".gym-player").addEventListener("click",gymPlayer);
  querySelect(".gym-player").addEventListener("mouseleave",removeGym);

