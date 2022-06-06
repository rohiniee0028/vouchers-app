let amount = JSON.parse(localStorage.getItem("money"));
document.getElementById("wallet_balance").innerText=amount;

let vouchers = JSON.parse(localStorage.getItem("purchase"));
console.log(vouchers);
vouchers.map(function(el){

    let vouchers_div = document.querySelector("#purchased_vouchers");

    let box = document.createElement("div");
    box.setAttribute("class","voucher");

    let name = document.createElement("h2");
    name.innerText = el.name;

    let image = document.createElement("img");
    image.src = el.image;
    image.setAttribute("class","image");

    
    let price = document.createElement("h3");
    price.innerText = `₹` + el.price;


    box.append(image,name,price);

    vouchers_div.append(box);
})