const questionDb=[
    
        
    {
        
        question:"Q1:Grand Central Terminal, Park Avenue, New York is the world?",
       
       A:"	largest railway station",
       B:	"highest railway station",
       C:	"longest railway station",
       D:"	None of the above",
       ans:"ans4"
       
           },
           {
        
            question:"Q2:Grand Central Terminal, Park Avenue, New York is the world?",
           
           A:"	largest railway station",
           B:	"highest railway station",
           C:	"longest railway station",
           D:"	None of the above",
           ans:"ans4"
           
               },
               {
        
                question:"Q3:Grand Central Terminal, Park Avenue, New York is the world?",
               
               A:"	largest railway station",
               B:	"highest railway station",
               C:	"longest railway station",
               D:"	None of the above",
               ans:"ans4"
               
                   },
                   {
        
                    question:"Q4:Grand Central Terminal, Park Avenue, New York is the world?",
                   
                   A:"	largest railway station",
                   B:	"highest railway station",
                   C:	"longest railway station",
                   D:"	None of the above",
                   ans:"ans4"
                   
                       }];
 const question=document.querySelector('.question');
 const option1=document.querySelector('#optin1');
 const option2=document.querySelector('#optin2');
 const option3=document.querySelector('#optin3');
 const option4=document.querySelector('#optin4');
 const submit=document.querySelector('#submit');
 const answers=document.querySelectorAll('.answer');
 const showScore=document.querySelector('#showScore');

let questionCount=0;
let score=0;


const loadQuestion=()=>{

const questionList=questionDb[questionCount];

    question.innerText=questionList.question;
    option1.innerText=questionList.A;
    option2.innerText=questionList.B;
    option3.innerText=questionList.C;
    option4.innerText=questionList.D;



     



}
loadQuestion();
const getCheckAnswer=()=>{
    let answer;
    answers.forEach((curentAnsElement)=>{
        if(curentAnsElement.checked){
            answer=curentAnsElement.id;
        }
       
    });
    return answer;
};
const deSelectAll=()=>{
    answers.forEach((curentAnsElement)=>curentAnsElement.checked=false);}

submit.addEventListener('click',()=>{
    const checkedAns=getCheckAnswer();
    console.log(checkedAns);

    if(checkedAns===questionDb[questionCount].ans){
        score++;
    };
    questionCount++;
    deSelectAll();
    if(questionCount<questionDb.length){
        loadQuestion();
    }else{
        showScore.innerHTML=
     `<h3>Your Score is ${score}/${questionDb.length}</h3>
     <button class="btn" onclick="location.reload()">Play Again</button>
     `
        ;
        showScore.classList.remove('score');
    }
})



