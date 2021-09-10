const quizForm = document.querySelector("#quizForm");
const questions = document.querySelectorAll(".question");
const finalscore = document.querySelector("#finalscore");
const submitquiz = document.querySelector("#submitQuiz");

const correctAns = ["option1", "option2", "option1", "option1", "option1"];

let score= 0;

quizForm.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    const data = new FormData(quizForm);
    let index=0;
    for(let entry of data){
       if(entry[1] == correctAns[index]){
        questions[index].style.backgroundColor = "lightseagreen";
        score++;
       }
       else{
        questions[index].style.backgroundColor = "maroon";
       }
        index++;
    }
    finalscore.innerText = score;
    submitquiz.style.display= "none";
});