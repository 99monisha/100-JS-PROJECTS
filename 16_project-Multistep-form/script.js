const dataMultiStep=document.querySelector("[data-multi-step]")
const formStep=[...dataMultiStep.querySelectorAll("[data-step]")]


let currentStep= formStep.findIndex(step=>{
   return  step.classList.contains("active")
})


if (currentStep < 0){
    currentStep=0
showCurrentStep()
}


dataMultiStep.addEventListener("click", e =>{
    let increment
    if(e.target.matches("[data-next]")){
        increment=1
    }
    else if(e.target.matches("[data-previous]")){
        increment=-1
    }
    if(increment==null) return
 const inputs =[...formStep[currentStep].querySelectorAll("input")]
const allValid= inputs.every(input=> input.reportValidity())
if(allValid){
    currentStep+=increment
showCurrentStep()
}
})
formStep.forEach(step=>{
    step.addEventListener("animationed",(e)=>{
        formStep[currentStep].classList.remove("hide")
       e.target.classList.toggle("hide",!e.target.classList.contains("active")) 
      
    })
})
function showCurrentStep(){
    formStep.forEach((step, index) => {
        step.classList.toggle("active",index===currentStep)
       
    })
}
