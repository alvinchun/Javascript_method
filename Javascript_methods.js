//배열

//1. find()
find()

let numbers = [1,2,3,4,5]

// 첫번째 요소만 return
const evenNumber = number.find(number => number % 2 === 0)

console.log(evenNumber); // 2

let numbers2 = [1,3,5,7]
const evenNumber2 = number.find(number => number % 2 === 0)
console.log(evenNumber2); // undefined

//2. findIndex()
findIndex()

let array = [10,20,30,40,50]

// 첫번째 해당되는 index 를 return
let index = array.findIndex(e => e >30)
console.log(index); //3
 
//3. filter()
filter()
let array2 = [10,20,30,40,50]

//특정 조건을 만족하는 모든 요소를 추출
let filteredArray = array2.filter(e => e >30) //40, 50

//4. every()
every()
const numbers3 = [1,2,3,4,5]
//특정조건이 맞으면 true 아니면 false
const allEven = numbers3.every(number => number % 2 === 0) // false

//5. some()
some()

let numbers4 = [1,2, 10, 20, 30]
const hasGreaterThanTen = numbers4.some(e => e > 10) //true, 20 과 30이 10보다 크기 때문에


//6. splice()
splice()

const b = [1,2,3,4,5]
const removed = array.splice(2,2); // [3,4]
console.log(b); // [1,2,5]


// 7. slice()
slice()

const a = [1,2,3,4,5]
a.slice(2, 0 ,10) // 2 index에 0개의 요소를 제거하고 10의 추가한다
console.log(a); //[1,2,10,3,4,5]



const c = [1,2,3,4,5]
c.slice(2,1,100) // [3]
console.log(c);  //[1,2,100,4,5]





join()
sort()
reduce()

//문자열

split()
replace()
replaceAll()
repeat()
substring()
substr()
indexOf()
includes()

//숫자

isNaN()
parseInt()
Math.pow()
Math.sqrt()
Number.isInteger()


