const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const password=document.getElementById('password');
const conpass=document.getElementById('conpass');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    Validate();


})
const sendData=(usernameValu,sRate,count)=>{
    if(sRate===count){
        alert('you are registerd successfully');
        swal("Welcome!"+usernameValu, "you are registered successfully", "success");
    }
}
const successMsg = (usernameValu) => {
    let formCon=document.getElementsByClassName('from-control');
    var count=formCon.length-1;
    for(var i=0; i<formCon.length;i++){
        if(formCon[i].className==="form-control success"){
            var sRate=0+i;
            console.log(sRate);
            sendData(usernameValu,sRate,count);
        }
        else{
            return false;
        }
    }
}
const isEmail=(emailValu)=>{
    var atSymbol = emailValu.indexOf("@");
    if(atSymbol<1) return false;
    var dot = emailValu.lastIndexOf('.');
    if(dot<=atSymbol+3) return false;
    if(dot===emailValu.length-1) return false;
    return true;

}

const Validate=() => {
    const usernameValu=username.value.trim();
const emailValu=email.value.trim();
const phoneValu=phone.value.trim();
const passwordValu=password.value.trim();
const conpassValu=conpass.value.trim();


if(usernameValu===""){
    setErrorMsg(username,'username can not be blank');
}
else if(usernameValu.length<=2){
    setErrorMsg(username,'username must be 3 character');
}
else{
    setSuccessMsg(username);
}


if(emailValu===""){
    setErrorMsg(email,'email can not be blank');
}
else if(!isEmail(emailValu)){
    setErrorMsg(email,'use a valid email');
}
else{
    setSuccessMsg(email);
}

if(phoneValu===""){
    setErrorMsg(phone,'phone number can not be blank');
}
else if (phoneValu.length !=10){
    setErrorMsg(phone,'use valid ph number');
}
else{
    setSuccessMsg(phone);
}


if(passwordValu===""){
    setErrorMsg(password,'password can not be blank');
}
else if (phoneValu.length <=5){
    setErrorMsg(password,'mini 6 chareaa');
}
else{
    setSuccessMsg(password);
}


if(conpassValu===" "){
    setErrorMsg(conpass,'conpassValu can not be blank');
}
else if (passwordValu != conpassValu){
    setErrorMsg(conpass,'conpassValu not matching');
}
else{
    setSuccessMsg(conpass);
}
successMsg(usernameValu);
}
function setErrorMsg(input, errormsg){
    const formControl=input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className="form-control error";
    small.innerText = errormsg;
}
function setSuccessMsg(input) {
    const formControl=input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className="form-control success";

}