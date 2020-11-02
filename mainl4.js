//Destructuring
const person = {
  name: "Tarun",
  email: "tarun@gmail.com",
  age: 20,
  address: {
    city: "Jalandhar",
    pincode: 144001,
    state: "Punjab",
  },
};
const { state, city } = person.address;
console.log(state, city);

//TASK:  fetch city and pass it to a function called getAddress and print it in the function
// const getAddress = ({ city }) => {
//   console.log(city);
// };
// getAddress(person.address);

//array destructuring- indexwise destructuring
