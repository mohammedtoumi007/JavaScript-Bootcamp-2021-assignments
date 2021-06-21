// Assignment One //
console.log(Number("100000")); // 100000
console.log(parseInt(100000));
console.log(Math.pow(10, 5)); // 100000
console.log(100 * 1000); // 100000
console.log(Math.round(99999.9)); // 100000
console.log(Math.ceil(99999.5)); // 100000
console.log(Math.floor(100000.1)); // 100000
console.log(Math.max(100000, 865, 133, 8675, -4545)); // 100000
console.log(Math.min(100000, 8654555, 1345453, 86745455)); // 100000
console.log(Math.trunc(100000.87978)); // 100000
console.log(+100000); // 100000
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(10e4);

// Assignment Two //
console.log(-Number.MIN_SAFE_INTEGER);

// Assignment Three //
console.log(Number.MAX_SAFE_INTEGER - 9007199254740975);

// Assignment Four //
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(parseFloat(myVar).toFixed(2))); // 100.57

// Assignment Five //
let flt1 = 10;
console.log(Math.ceil(Number.isInteger()) + true + true);

// Assignment Six //
let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(parseInt(Math.max(flt))); // 10
console.log(parseInt(Math.min(flt))); // 10

// Assignment Sieven //
console.log(Math.round(Math.random() * 4));