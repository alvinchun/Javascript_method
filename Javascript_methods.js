https://ella951230.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%90%EC%A3%BC-%EC%93%B0%EC%9D%B4%EB%8A%94-%EB%A9%94%EC%84%9C%EB%93%9C-%EC%B4%9D%EC%A0%95%EB%A6%AC

//배열

//1. find() 배열
find()
let numbers = [1,2,3,4,5]

// 첫번째 요소만 return
const evenNumber = number.find(number => number % 2 === 0) // 2

let numbers2 = [1,3,5,7]
const evenNumber2 = number.find(number => number % 2 === 0) // undefined

//2. findIndex() 배열
findIndex()

let array = [10,20,30,40,50]

// 첫번째 해당되는 index 를 return
let index = array.findIndex(e => e >30) //3
 
//3. filter() 배열, 새배열 생성
filter()
let array2 = [10,20,30,40,50]

//특정 조건을 만족하는 모든 요소를 추출
let filteredArray = array2.filter(e => e >30) //40, 50

//4. every() 배열
every()
const numbers3 = [1,2,3,4,5]
//특정조건이 맞으면 true 아니면 false
const allEven = numbers3.every(number => number % 2 === 0) // false

let objArr = [{ name: 'alvin', age: 10}, { name: 'michael', age: 10}, { name: 'jeff', age: 2}]

objArr.every(e => e.age > 5); //false
objArr.every(e => e.age > 1); //true

//5. some() 배열
some()

let numbers4 = [1, 2, 10, 20, 30]
const hasGreaterThanTen = numbers4.some(e => e > 10) //true, 20 과 30이 10보다 크기 때문에

const users = [
    { id: 1, name: 'alvin', active: false}, { id: 2, name: 'michael', active: false}, { id: 3, name: 'jeff', active: true}
]

const hasActiveUsers = users.some(user => user.active) //true , jeff 가 활성화

//6. splice() 배열
splice()

//요소제거
const b = [1,2,3,4,5]
const removed = array.splice(2,2); // [3,4]
console.log(b); // [1,2,5]


//요소추가
const d = [1,2,3,4,5]
d.splice(2,0,10) // 제거요소 없음
console.log(d); // [1,2,10,3,4,5]

//요소교체
const e = [1,2,3,4,5]
const removed1 = e.splice(2,1,100) // [3]
console.log(e); // [1,2,100,4,5]

// 7. slice() 배열, 문자열
slice() //원본은 변경 안됨

const a = [1,2,3,4,5,6,7,8]
let slicedArray = a.slice(2, 5) // index 2 부터 5미만까지만 추출
console.log(slicedArray); //[3,4,5]

const c = [1,2,3,4,5]
let slicedArray2= c.slice(1) // [3]
console.log(slicedArray2);  //[1,2,100,4,5]

const g = [1,2,3,4,5,6,7,8]
let slicedArray3 = g.slice(-5, -1) // index -5 부터 -1 까지 문자 추출
console.log(slicedArray3);

// 8. join() 배열
join()

let arr = ["hi", "I'm", "alvin"]

arr.join(" ") //hi I'm alvin
arr.join(",") // hi,I'm,alvin
arr.join("") //hiI'malvin 

// 9. sort() 배열
sort() 

let i = [ 5 , 2 , 3 , 1 , 2 , 9 ]
i.sort((a,b)=> a - b) // 낮은거부터 높은걸로 증가 [1,2,2,3,5,9]
i.sort((a,b)=> b - a) // 낮은거부터 높은걸로 증가 [9,5,3,2,2,1]



// 10. reduce() 배열
reduce()

let v = [ 5 , 2 , 3 , 1 , 2 , 9 ]

v.reduce((accumulated, current)=> accumulated + current, 0)
v.reduce((accumulated, current)=> accumulated + current, 1)



//문자열


// 11. split() 배열

split()

let letter = "Hi, my name is Alvin"

letter.split(" ") //hi I'm alvin
letter.split(",") // hi,I'm,alvin
letter.split("") //hiI'malvin 


// 12. replace() 배열

replace()
let str = "Hi, my name is Alvin"

const result = str.replace(",", " ")
console.log(result); //"Hi my name is Alvin"


// 13. replaceAll() 배열

replaceAll()
let str1 = "Hi, my name is Alvin. Hi Hi!"

const result2 = str.replaceAll("Hi", "Hello")
console.log(result2); //"Hello, my name is Alvin. Hello Hello!"


// 14. repeat()

repeat()
let originalString = "Hello"
let repeatedString = originalString.repeat(3)

console.log(repeatedString); //"HelloHelloHello"



// 15. substring()

substring()
let origialString = "Hello, World!"
let substring1 = origialString.substring(0,5) //"Hello"
let substring2 = origialString.substring(7) //"World!"
let substring3 = origialString.substring(-3) // "Hello, World!"



// 17. indexOf()

const str2= 'abc123'

indexOf()
str.indexOf("a")
str.indexOf("1")
str.indexOf("a", 1)

const str3 = 'abab'


// 18. includes()
const str4 = "abc123"
str4.includes('c') //true
str4.includes('1') //true
str4.includes('a', '1') //false



includes()

//숫자

// 19. isNaN()

isNaN()

isNaN(123)
isNaN('abc')
isNaN('123')


// 20. parseInt()

parseInt()

parseInt("-10") // -10
parseInt("-10.33") // -10
parseInt("10") // 10
parseInt("10.33") // 10
parseInt("10 20 30") // 10
parseInt("10 years") // 10
parseInt("years 10") // NaN


// 21. Math.pow()

Math.pow()

const q = Math.pow(2, 3)

const w = Math.pow(9, 0.5)

// 22. Math.sqrt()

Math.sqrt()

const r = 25;
const squareRoot = Math.sqrt(r)
console.log(squareRoot); //5



// 23. Number.isInteger()

Number.isInteger()
console.log(Number.isInteger(5)); //true
console.log(Number.isInteger(0)); //true
console.log(Number.isInteger(-10)); //true

console.log(Number.isInteger(5.5)); //false
console.log(Number.isInteger(-3.14)); //false

console.log(Number.isInteger("10")); // false
console.log(Number.isInteger("5.5")); // false

console.log(Number.isInteger(NaN)); //false
console.log(Number.isInteger(Infinity)); //false





