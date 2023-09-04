const varObj = {
    tip: 0
}


window.onload = () =>{
     document.querySelector('#calculate').onclick = calculateTip;
    
    const tips = document.querySelectorAll('.tip')
    
    tips.forEach(tip => {
        tip.addEventListener('click',handleTipClick);
    });

}

function handleTipClick(e){
   varObj.tip = Number(e.target.textContent.split('%')[0]);

}

function calculateTip(){
    const amount = Number(document.querySelector('#amount').value);
    const people = Number(document.querySelector('#people').value);


    if(!amount && !people){
        alert("Please enter values");
        return;
    }

    const tip = (amount * varObj.tip) / 100;
    console.log(tip);
    const billPerPerson = (amount +tip) / people;

    document.querySelector("#tipamount").innerText = tip;
    document.querySelector("#totalamount").innerText = billPerPerson;
}