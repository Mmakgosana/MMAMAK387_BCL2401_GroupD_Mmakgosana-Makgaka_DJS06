// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//Logs each name
names.forEach(name => console.log(name));

//Logs each province
provinces.forEach(province => console.log(province));

// Create a new array of province names in all Uppercase
const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

// Create a new array that contains the length of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Alphabetically sort the provinces
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);

// Remove provinces containing "Cape"  and log the count of remaining provinces
const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

// Create a boolean array to determine if a name contains the letter 'S'
const containsS = names.map(name => name.includes ('S'));
console.log(containsS);