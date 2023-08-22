// 1. how to compare two JSON have the same properties without order?
// a. let obj1 = {name: "person 1", age:5};
// b. let obj2 = {age:5,name:"person 1"};
// Answer:

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}
const obj1 = { name: "person 1", age: 5 };
const obj2 = { age: 5, name: "person 1" };

if (deepEqual(obj1, obj2)) {
  console.log("The objects are equal.");
} else {
  console.log("The objects are not equal.");
}

// 2. Use the rest countries' API URL -> https://restcountries.com/v3.1/all and display all the country flags in the console
// Answer:

// Create a new XMLHttpRequest instance
const xhr = new XMLHttpRequest();

// Define the API URL
const ApiUrl = "https://restcountries.com/v3.1/all";

// Configure the request
xhr.open("GET", apiUrl, true);

// Set up a callback for when the request is loaded
xhr.onload = function () {
  if (xhr.status === 200) {
    // Parse the JSON response
    const countries = JSON.parse(xhr.responseText);

    // Display country flags in the console
    countries.forEach((country) => {
      if (country.flags) {
        console.log(country.flags.png);
      }
    });
  } else {
    console.error("Request failed with status:", xhr.status);
  }
};

// Set up a callback for when there's an error
xhr.onerror = function () {
  console.error("Request failed");
};

// Send the request
xhr.send();

// 3. Use the same rest countries and print all countries names,regions, sub-region and populations
// Answer:

// Create a new XMLHttpRequest instance
const xhr = new XMLHttpRequest();

// Define the API URL
const apiUrl = "https://restcountries.com/v3.1/all";

// Configure the request
xhr.open("GET", apiUrl, true);

// Set up a callback for when the request is loaded
xhr.onload = function () {
  if (xhr.status === 200) {
    // Parse the JSON response
    const countries = JSON.parse(xhr.responseText);

    // Display country information in the console
    countries.forEach((country) => {
      const name = country.name.common;
      const region = country.region;
      const subregion = country.subregion;
      const population = country.population;

      console.log(`Name: ${name}`);
      console.log(`Region: ${region}`);
      console.log(`Subregion: ${subregion}`);
      console.log(`Population: ${population}`);
      console.log("---------------------------------");
    });
  } else {
    console.error("Request failed with status:", xhr.status);
  }
};

// Set up a callback for when there's an error
xhr.onerror = function () {
  console.error("Request failed");
};

// Send the request
xhr.send();
