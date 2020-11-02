// let arr2 = [];
// let arr = [];
// let arp = ["Hello", "World"];
// let wordlengths = (...arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let s = arr[i].length;
//     arr2[i] = s;
//   }
//   return arr2;
// };
// console.log(wordlengths(...arp));
// console.log(wordlengths("Javascript", "HTML", "CSS", "React"));

let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
let arr1 = [];
let arr2 = [];
let keyAndValue = (obj) => {
  for (let key in obj) {
    arr1.push(key);
    arr2.push(obj[key]);
  }
  console.log(arr1, arr2);
};
keyAndValue({ 4: "t", 2: "a", 1: "Q", 3: "i" });
