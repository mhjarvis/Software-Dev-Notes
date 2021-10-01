
const ARRAY_LENGTH = 20;
let sortedArray = [1, 2, 3, 4, 5, 6, 7, 9];
const randomArray = [];

/*------------------- --------------------- Random Array Generator ---------------------------------------- */

for(let i = 0; i < ARRAY_LENGTH; i++) {
    randomArray.push(Math.floor(Math.random() * 50));
};

//console.log(randomArray);

/*--------------------------------------------- Linear Search --------------------------------------------- */

function linearSearch(array, value) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] == value) {
            return i;
        }
    }
}

console.log(linearSearch(randomArray, 5));

/*--------------------------------------------- Binary Search --------------------------------------------- */

function binarySearch(array, searchValue) {

  let start = 0;
  let end = array.length - 1;

  while(start <= end) {
    let mid = Math.floor((end + start) / 2);
    valueAtMid = array[mid];

    if(valueAtMid == searchValue) {           // value is found
      return "Value found at index " + mid;
    }
    if(searchValue < valueAtMid) {            // value is lower than mid
      end = mid - 1;
    }
    else if(searchValue > valueAtMid) {       // value is higher than mid
      start = mid + 1;
    }
  }
  return "Search Value not found.";           // return if value is not found
}

let array = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binarySearch(array, 6));
