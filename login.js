//For Otp Code

function generateOtp(){
    let digits = "0123456789"
    let otp=""
    
     for(let i=0;i<6;i++){
        otp+=digits[Math.floor(Math.random()*10)];
      
    }
      alert(otp);
     
    }
    console.log(generateOtp())



    //for Login.js

    const inputs = document.querySelectorAll('.opt-field input')

    inputs.forEach((inputs,index) => {
        inputs.CDATA_SECTION_NODE.index = index;
        inputs.addEventListener("paste", handleOnpasteOtp);
        inputs.addEventListener("keyup",handleOtp);
    })


    function handleOtp(e){
        const input = e.target;
        let value=input.value;
        input.value = "";
        input.value = value ? value[0] : "";

        let fieldIndex = input.dataset.index;
        if(value.length > 0 && fieldIndex < index.length - 1 ){
            input.nextElementSibling.focus();
        }

        if(e.key === "Backspace" && fieldIndex > 0){
            input.previousElementSibling.focus();
        }

        if(fieldIndex == index.length - 1 ){
           submit();
        }
    }


    function handleOnpasteOtp(e){
        const data = e.clipboardData.getData("text");
        const value = data.split("");
        if(value.length === inputs.length){
            inputs.forEach((input,index) => (input.value = value[index]))
            submit();
        }
    }


   function submit(){
  console.log("Submitting...");

  let otp = "";
  inputs.forEach((input)=>{
   otp+= input.value;
   input.disabled = true;
   input.classList.add("disabled");
  })
  console.log(otp)
}















