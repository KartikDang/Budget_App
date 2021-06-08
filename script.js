
var a;
document.querySelector(".Cal").addEventListener("click",function()
{
    onclickBudget();
    clearData_Budget();
});

function onclickBudget(){
    var budget=document.querySelector(".budget").value;
    balanceUpdate(budget);
    budgetUpdate(budget);
    a=budget;
    //console.log(budget);
   
}

function clearData_Budget(){
    document.querySelector(".budget").value=""
}

function budgetUpdate(budget){
    document.querySelector(".dollar_1").innerHTML="$"+budget;
}

function balanceUpdate(a){
    document.querySelector(".dollar_3").innerHTML="$"+a;
}

document.querySelector(".Add").addEventListener("click",function()
{
    onclickAdd();
});

var count=0;

function onclickAdd()
{
    var amt_name=document.querySelector(".name").value;
    var amt=document.querySelector(".amount").value;

    addInvest(amt_name,amt);
    clearData_Expense();
    var b=a-amt;
    balanceUpdate(b);
    document.querySelectorAll(".del")[count].addEventListener("click",function(event){
       // console.log(event.target.classList);
        document.querySelector("."+event.target.classList[2]).classList.add("hidden");
    });
    count++;
}

function addInvest(amt_name,amt){
    const a=document.createElement("div");
    a.classList.add("row");
    a.classList.add(amt_name);
    a.innerHTML='<div class="col-sm-4"><h5>'+amt_name+'</h5></div><div class="col-sm-4 list" ><h5>$'+amt+'</h5></div><div class="col-sm-4"></button><button class="del"><i class="fas fa-trash '+amt_name+'"></i></button></div>'
    document.querySelector(".conatiner").appendChild(a);
}

function clearData_Expense(){
    document.querySelector(".name").value="";
    document.querySelector(".amount").value=""; 
}  

