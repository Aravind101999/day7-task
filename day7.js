//print the all the countries which belongs to Asia region
resu = result.filter( (ele)=>ele.region ==="Asia").map((ele)=›ele.name);
console.log(resu);
//Print all the counties details whose population is less than 2 lakhs
res = result.filter((ele)=>ele.population < 200000).map((ele)=>ele.name);
console.log(res);
// Print the total population of countries using reduce function
var total = result.reduce((pop, ele)=>pop+ele.population,0);
console.log(total);
// Print the country which uses US Dollars as currency.

var curr = result.filter((ele)=>ele.currencies.code == "USD").map((ele)=>ele.name) ;
console.log(curr);

