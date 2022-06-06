class userDetails{
    constructor(n,e,a,am){
        this.name = n;
        this.email = e;
        this.address = a;
        this.amount = am;
    }
}

document.querySelector("#submit").addEventListener("click",signUp);


function signUp(event){
    event.preventDefault();

    let arr = [];

    let form = document.querySelector("form");

    let name = form.name.value;
    let email = form.email.value;
    let address = form.address.value;
    let amount = form.amount.value;

    let u1 = new userDetails(name,email,address,amount);
    
    arr.push(u1);
    console.log(arr);
    localStorage.setItem("user",JSON.stringify(arr));

    form.name.value=null;
    form.email.value=null;
    form.address.value=null;
    form.amount.value=null;
}



