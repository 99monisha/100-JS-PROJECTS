let tuser=document.querySelector(".tuser");
let tpass=document.querySelector(".tpass");
let submit=document.querySelector(".submit");




if(window.localStorage){
localStorage.setItem("user","papababu");
localStorage.setItem("pass","@123");
let user=localStorage.getItem("user");
let pass=localStorage.getItem("pass");
let msg=document.querySelector(".msg");
submit.addEventListener("click",() =>{
    if (user==tuser.value && pass==tpass.value) {
        msg.innerHTML="you are logged in successfully....";
        

    }
    else{
        msg.innerHTML="you cant logged in....";
    }
   
});
}
