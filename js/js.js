//  Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції: Порахувати суму всіх елементів масиву. Знайти мінімальний елемент масиву. Знайти максимальний елемент масиву. Перепишіть колбек-функції на стрілки



const ar = [1, 2, 3, 4, 5];


const processArray = (array, callback) => {
    return callback(array);

}



const plusNum = (a, b) => {
    let res = 0;
    for (let index = 0; index < ar.length; index++) {
        const element = ar[index];
        res += element
    }

    return res;
}




const minNum = array => {
  let min = array[0];
  for (const a of array) {
    if (a < min) {
        min = a
    }

  }
  return min;
}





const maxNum = array => {
  let max = array[0];
  for (const b of array) {
    if (b > max) {
        max = b
    }

  }
  return max;
}




console.log(processArray(ar, plusNum));
console.log(processArray([5, 2, 5, 6,], minNum));
console.log(processArray([5, 2, 5, 6,], maxNum));






//  Створіть функцію operate(a, b, callback), яка приймає два числа та колбек для виконання операції над ними. Використайте її для виконання наступних операцій:
// Додавання.
// Віднімання.
// Множення.
// Ділення.
// Перепишіть колбеки на стрілкові функції



const operation = (a, b, callback) => callback(a, b);


const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;



const a = 10;
const b =  5;


console.log(operation(a, b, add ));
console.log(operation(a, b, subtract));
console.log(operation(a, b, multiply ));
console.log(operation(a, b, divide));

//виклик функції з різними операціями
 console.log(operation(10, 5, function(a, b){ return a - b})); //Віднімання
 console.log(operation(10, 5, function(a, b){ return a + b})); //Додавання
 console.log(operation(10, 5, function(a, b){ return a * b})); //Множення
 console.log(operation(10, 5, function(a, b){ return a / b})); //Ділення