const emptyArr = [];

const largeArr = [1, 2, 3, 4, 5, 6];

console.log(largeArr.length);

console.log(largeArr[0]);

console.log(largeArr[Math.floor(largeArr.length / 2)]);

console.log(largeArr[largeArr.length - 1]);

const MixedDataTypes = [5, "Mexico", true, 8.3, "a", "yes"];

console.log(MixedDataTypes.length);

let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(itCompanies);

console.log(itCompanies.length);

console.log(itCompanies[0]);

console.log(itCompanies[Math.floor(itCompanies.length / 2)]);

console.log(itCompanies[itCompanies.length - 1]);

itCompanies.forEach((company) => {
  console.log(company);
});

for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

const containsCompany = (company) => {
  if (itCompanies.includes(company)) {
    return company;
  } else {
    return company + "not found";
  }
};

const ex14 = (array) => {
  let count = 0;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element.split("o").length > 2) {
        console.log(element);
    }
  }
};

itCompanies.sort();
itCompanies.reverse();
itCompanies.splice(0, 3)


console.log(itCompanies)