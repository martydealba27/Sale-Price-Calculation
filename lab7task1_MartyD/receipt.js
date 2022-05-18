//we are inputting the product price
const productPrice = parseFloat(prompt("Input the price of a product:")).toFixed(2);
console.log(productPrice)
console.log("the product price is " + productPrice)

//we are inputting the quantity purchased
const quantityPurchased = parseFloat(prompt("Input the quantity of a product"));
console.log(quantityPurchased)
console.log("the product quantity is " + quantityPurchased)

//multiple product price and quantity purchased
//make a new variable for the answer 
const sale = parseFloat(productPrice * quantityPurchased).toFixed(2)
console.log(sale)
console.log("product price * quantity purchased = " + sale)

//A discount is given based on the subtotal amount of the sale (price * quantity).  
//If the subtotal is $500 or more a 5% discount is given.  
//If the subtotal is $499.99 or less only a 3% discount is given. 

if (sale >= 500){
    parseFloat(discount = sale * 5 / 100).toFixed(2);
    console.log(sale * 5 / 100);
    console.log(discount);
}
else {
    parseFloat(discount = sale * 3 / 100).toFixed(2)
    console.log(sale * 3 / 100);
    console.log(discount);
}
//document write: 
//subtotal / discount / total / programmed by Mr. Marty De Alba

const total = (sale - discount).toFixed(2);
console.log("the sale is: " + sale);
console.log("the discount is: " + discount);

//converting information to display 

//new variable for sale 
const printSub = "<p>Subtotal: $" + sale + "</p>";

//new variable for discount
const printDiscount = "<p>Discount: $" + discount + "</p>";

//new variable for total
const printTotal = "<p>Total: $" + total + "</p>";

//variable for programmer
const programmer = "Programmed by Marty De Alba"


document.write(printSub);
document.write(printDiscount);
document.write(printTotal);
document.write(programmer);