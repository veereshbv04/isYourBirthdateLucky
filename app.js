const date = document.querySelector("#datepicker");
const luckyNumber = document.querySelector("#luckynumber");

const outputDiv = document.querySelector(".output");

const checkButton = document.querySelector("#check");

checkButton.addEventListener("click",()=>{
    alert(date.value);
    const dateString = ((date.value).split('-')).join("");
    var sum=0;
    // converting string to letter

    for( ele in dateString){
        sum = sum + Number(ele);
    }
    const luckyno = Number(luckyNumber.value);
    // Checking if Date is divisible by Lucky Number
    
    
})
