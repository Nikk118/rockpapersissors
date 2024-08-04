let choices=document.querySelectorAll(".choice")
let msg=document.querySelector(".msg")
let you=0;
let comp=0;
let yourscore=document.querySelector(".yourcurrscore")
let compscore=document.querySelector(".compcurrscore")
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        console.log("choice is made")
        let userchoice=choice.getAttribute("id")
        
        fight(userchoice);
    })
})
const showwinner=(user,compchoice,win)=>{
    if(win){
        you++;
        yourscore.innerText=you;
        msg.innerText=` You Win!! your ${user} beats ${compchoice}`
        msg.style.backgroundColor="green"
    //   console.log(you)
    }else{
        comp++;
        compscore.innerText=comp;
        msg.innerText=` You lose  ${compchoice} beats your ${user}`   
        msg.style.backgroundColor="red"
        // console.log(comp)
    }
}
const fight=(userchoice)=>{
    let user=userchoice;
    //computer choice
    let option=["rock","paper","scissor"]
    let index=Math.floor(Math.random()*3)
    let compchoice=option[index];
    // console.log(compchoice)
    // console.log(user)
    winner(user,compchoice)
}
const winner=(user,compchoice)=>{
    let win=true;
    if(user===compchoice){
        msg.innerText="It was a draw,Play again"
        msg.style.backgroundColor="#525CEB"
    }
    else{
        if(user=="rock"){
            compchoice=="paper"?win=false:win=true;
        }else if(user=="paper"){
            compchoice=="scissor"?win=false:win=true;
        }else{
            compchoice=="rock"?win=false:win=true;
        }
        showwinner(user,compchoice,win);
    }
}