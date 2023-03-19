var customerName = "bob";

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

function setBestCustomer(){
    bestCustomer = "not bob";
}
console.log(setBestCustomer());

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
    
}
console.log(overwriteBestCustomer());

const leastFavoriteCustomer = "Lisa";

 function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "definitely bob";
    return leastFavoriteCustomer;
}
console.log(changeLeastFavoriteCustomer());
console.log(leastFavoriteCustomer); 
 