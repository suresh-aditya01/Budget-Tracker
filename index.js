const form =document.querySelector(".add");
const incomeList=document.querySelector("ul.income-list");
const expenseList=document.querySelector("ul.expense-list");
let transactions=localStorage.getItem("transactions")!==null? JSON.parse(localStorage.getItem("transactions")): [];
function addTransactionsDOM(id,source,amount,time){
    if(amount>0){
        incomeList.innerHTML+=` <li data-id="">
                        <p>
                            <span>Freelancing -Js project</span>
                            <span id="time">12:45:38 AM 5/19/2022</span>
                        </p>
                        <span>$700</span>
                        <i class="bi bi-trash delete"></i>
                    </li> `;
    }
    else{
        expenseList.innerHTML+=`<li>ABC</li>`;
    }
}
function addTransaction(source, amount){
    const time = new Date();

    const transaction = {
        id: Math.floor(Math.random() * 100000),
        source: source,
        amount: amount,
        time: `${time.toLocaleTimeString()} ${time.toLocaleDateString()}`
    };

    transactions.push(transaction);

    localStorage.setItem("transactions", JSON.stringify(transactions)); 
    addTransactionsDOM(id,source,amount,time);
}
form.addEventListener("submit",event=>{
    event.preventDefault();
    addTransaction(form.source.value,form.amount.value);
    form.reset();
   
})

