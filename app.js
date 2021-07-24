const date = document.querySelector("#datepicker");
const luckyNumber = document.querySelector("#luckynumber");

const outputDiv = document.querySelector(".output");

const checkButton = document.querySelector("#check");

const outputlucky = "<div><h2>Heeey You are a Lucky <h2><img class ='resultImage' width='100%' src='images/luckyImage.svg' /></div>"
const outputnotlucky = "<div><h1>Sorry ,Your Birthdate is not a lucky number </h1><img class ='resultImage' width='100%' src= 'images/notLucky.svg'/></div>"

checkButton.addEventListener("click",(e)=>{
    e.preventDefault();
   if(luckyNumber.value<null || date.value===undefined ){

    alert("Enter valid input");

   }
    const dateString = ((date.value).split('-')).join("");
    var sum=0;
    
    // converting string to letter
    for( ele in dateString){
        sum = sum + Number(ele);
    }

    const luckyno = Number(luckyNumber.value);

    // Checking if Date is divisible by Lucky Number
    
    if (sum%luckyno === 0){
        console.log("lucky",sum);
        
        return outputDiv.innerHTML = outputlucky;
    }
    else{
            console.log("NOt Lucky");
            return outputDiv.innerHTML = outputnotlucky;
           
    }
    
})
