//array iterations methods

//.forEach()
let output = "";
let prices = [32,21,6,4,12,8,5];

prices.forEach(function (item,index){
    output = output + "<p>" + item + " is at index:  " + index + "</p>";
    $("#arrayList").html(output);
});

prices.forEach(function(item, index){
    let tax = (item * 0.0825).toFixed(2);
    let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
    output = output + `<p> Item Number: ${index +1} <br> Price: $${item} <br> Tax: $${tax} <br> Total: $${(total)}`;
    $('#arrayList').html(output);
    // console.log(typeof total);
});

prices.forEach( (item, index) => {
    let tax = (item * 0.0825).toFixed(2);
    let total = (parseFloat(item) + parseFloat(tax)).toFixed(2);
    output += `<p>Item number ${index + 1}. Price: $${item}. Tax: $${tax}. Total $${total}</p>`;
    $('#arrayList').html(output);
    console.log(typeof total);
});

pricesAfterTax = prices.map(function(price){
    let tax = (price * 0.0825).toFixed(2);
    let total = (parseFloat(price) + parseFloat(tax)).toFixed(2);
    console.log(parseFloat(total));
});

pricesAfterTax.forEach(function(item){

})

const salesPeople = [
    {name: 'Jim Halpert', sales: 100},
    {name: 'Dwight Schrute', sales: 50},
    {name: 'Andy Bernard', sales: 150},
];

const totalSales = salesPeople.reduce((total, person) => {
   return total + person.name;
},0);

console.log(totalSales);
