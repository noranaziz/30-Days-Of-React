// declare empty array
const emptyArr = [];

// declare array with more than 5 elements
const numbers = [1, 2, 3, 4, 5, 6];

// find length of that array
const lenFive = numbers.length;

// get first item
const firstItem = numbers[0];

// get middle item
const middleIndex = Math.floor((lenFive - 1) / 2);
const middleItem = numbers[middleIndex];

// get last item
const lastIndex = lenFive - 1;
const lastItem = numbers[lastIndex];

// declare array called mixedDataTypes, put different data types in the array and find length
const mixedDataTypes = [1, 'Mixed', 2, 'Data', 3, 'Types'];
const mixedLength = mixedDataTypes.length;

// declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);

// print first company
const firstCompany = itCompanies[0];
console.log(firstCompany); // Facebook

// print middle company
const middleCIndex = Math.ceil(itCompanies.length / 2);
const middleCompany = itCompanies[middleCIndex];
console.log(middleCompany); // Apple

// print last company
const lastCompany = itCompanies[itCompanies.length - 1];
console.log(lastCompany); // Amazon

// print out each company
itCompanies.forEach(element => {
    console.log(element);
});

// change each company name to uppercase one by one and print them out
for(let i = 0; i < itCompanies.length; i++) {
    const element = itCompanies[i].toUpperCase();
    console.log(element);
};

// print the array as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
let companiesString = itCompanies.join(", ");
console.log(companiesString.concat(" are big IT companies."));

// check if a certain company exists in the itCompanies array
const company = "Amazon";
if(itCompanies.includes(company)){
    console.log(company);
} else {
    console.log("not found");
}

// filter out companies which have more than one 'o' without the filter method
let filtered = [];
itCompanies.forEach(element => {
    if(element.indexOf('o') == element.lastIndexOf('o')){
        filtered.push(element);
    }
});

// sort the array using sort()
itCompanies.sort();

// reverse the array using reverse()
itCompanies.reverse();

// slice out first 3 companies from array
itCompanies.slice(3);

// slice out last 3 companies from array
itCompanies.slice(-3);

// slice out middle company from array
const mid = Math.ceil(itCompanies.length / 2);
itCompanies.slice(mid, mid + 1);

// remove first company from array
itCompanies.shift();

// remove last element from array
itCompanies.pop();

// remove middle element from array
itCompanies.splice(mid, 1);

// remove all companies
itCompanies = [];