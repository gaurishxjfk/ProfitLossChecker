const purchasedPrice = document.querySelector("#purchasedPrice");
const stockUnit = document.querySelector("#stockUnit");
const currentPrice = document.querySelector("#currentPrice");
const btnCheck = document.querySelector("#btnCheck");
const output = document.querySelector(".output");

function totalInvested(){
    return purchasedPrice.value * stockUnit.value;
}

function currentAmount(){
    return currentPrice.value * stockUnit.value; 
}

function diffRate(a,b){
    return a - b; 
}

function diffPercent(a,b){
    return (a/b)*100; 
}

function calcProfitLoss(){
    let initialPrice = totalInvested();
    let finalPrice = currentAmount();
    
    if(Number(finalPrice) ===  Number(initialPrice)){
        output.style.color = 'blue'; 
        output.innerText = 'No pain no gain';
    }else if(Number(finalPrice) > Number(initialPrice)){
        output.style.color = 'green'; 
        let diff = diffRate(Number(finalPrice),Number(initialPrice)); 
        let percent = diffPercent(Number(finalPrice),Number(initialPrice));
        output.innerText = 'Your stock raise by '
        +percent+ 'with profit of '+diff+'Rs.';
    }else{
        output.style.color = 'red'; 
        let diff = diffRate(Number(initialPrice),Number(finalPrice));
        let percent = diffPercent(Number(finalPrice),Number(initialPrice));
        output.innerText = 'Your stock went down by '
        +percent+'%'+' with loss of '+diff+'Rs.';;
    }
}


btnCheck.addEventListener('click',calcProfitLoss);