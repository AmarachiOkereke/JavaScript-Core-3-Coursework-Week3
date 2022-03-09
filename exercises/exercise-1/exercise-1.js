const personOne = {
  myName: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};


function introduceYourself(personOne) {
  let { myName, age, favouriteFood } = personOne
  console.log(
    `Hello, my name is ${myName}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
