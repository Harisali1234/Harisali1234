let incomevalue = 0;
let expensevalue = 0;
let profitLossvalue = 0;

function UpdateValue(){
    document.getElementById("income").innerText = incomevalue;
    document.getElementById("profit").innerText = profitLossvalue;
    document.getElementById("expense").innerText = expensevalue;
}

function addincome(){
    const amount = parseFloat(document.getElementById('amount').value);
    if(!isNaN(amount) && amount >= 0){
        incomevalue += Math.round(amount);
        profitLossvalue += Math.round(amount);
        UpdateValue();
    }
}

function addExpense(){
    const amount = parseFloat(document.getElementById('amount').value);
    if(!isNaN(amount) && amount >= 0){
        expensevalue += Math.round(amount);
        profitLossvalue -= Math.round(amount);
        UpdateValue();
    }
}