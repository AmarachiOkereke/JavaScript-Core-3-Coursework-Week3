const personOne = {
  myName: "Popeye",
  age: 34,
  favouriteFood: "Spinach",
};


function introduceYourself({ myName, age, favouriteFood } ) {
  console.log(
    `Hello, my name is ${myName}. I am ${age} years old and my favourite food is ${favouriteFood}.`
  );
}

introduceYourself(personOne);
