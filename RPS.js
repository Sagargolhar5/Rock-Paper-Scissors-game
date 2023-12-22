let rules = document.getElementById("rules-container");
let displayRules = 0;

let nextButton = document.getElementById("next-btn");
let ruleButton = document.getElementById("rules-btn");

function hideRules() {
  if (displayRules == 1) {
    rules.style.display = "block";
    displayRules = 0;
  } else {
    rules.style.display = "none";
    displayRules = 1;
  }
}

let con = document.querySelectorAll(".con");
let computer = document.querySelectorAll(".computer");
let user=document.querySelector(".user")
let machine=document.querySelector(".machine")
let winModel=document.querySelector(".win-model");
let winner=document.querySelector(".winner")
let agnpc=document.querySelector(".winner-1")
console.log(computer);
let play=document.querySelector(".p-btn");
let random = Math.floor(Math.random()*3);
let triangle=document.querySelector(".triangle");
let score=JSON.parse(localStorage.getItem("score"))
let cscore=JSON.parse(localStorage.getItem("c-score"))
let scoreElem=document.getElementById("score");
let cscoreElem=document.getElementById("c-score");
if(score){
  scoreElem.innerText=score; 
}
else if(c-score){
  cscoreElem.innerText=cscore;
}
let count=0;
let ccount=0;
con.forEach((element,index) => {
    element.addEventListener("click", ()=>{
      user.style.opacity="1";
      triangle.style.display="none";
      user.style.display ="flex";
      machine.style.display = "flex";
        con.forEach(item => {
            item.style.display="none";
        });
        element.style.display="block";
        element.classList.add("show")
        setTimeout(() => {
          machine.style.opacity="1";
          setTimeout(() => {
            computer[random].style.display="block";
            computer[random].classList.add("right");
          }, 500);   
        }, 500);
        setTimeout(() => {
          if(index==0 && random==2 || index==1 && random==0 || index==2 && random==1){
            winModel.style.display="grid";
            winner.innerText="YOU WIN";
            agnpc.innerText="AGAINST PC";
            count=score;
            count++;
            scoreElem.innerText=count;
            localStorage.setItem("score",JSON.stringify(count));
          }
          else if(index==random){
            winModel.style.display="grid";
            winner.innerText="TIE UP";
          }
          else{
            winModel.style.display="grid";
            winner.innerText="YOU LOST";
            ccount=cscore;
            ccount++;
            cscoreElem.innerText=ccount;
            localStorage.setItem("c-score",JSON.stringify(ccount));
          }
        }, 1500);
    })
});
play.addEventListener("click", ()=>{
  window.location.reload();
})