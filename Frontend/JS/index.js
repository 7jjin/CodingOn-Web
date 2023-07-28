// 키워드 변수이름 = 값
// 키워드 : var, let, const

var number = 5; // 변수의 선언과 할당이 동시에

var number1; // 변수를 선언
number1 = 5; // 변수에 값을 할당한다.

number1 = 6; // 재할당

// var보다는 let을 권장한다.

let string = "가나다";
string = "라마바";
// let string2 = "라마바"

// const string2 = "가나라";
// string2 = "aa";

// var let const
// var : 재선언, 재할당
// let : 재선언 불가능, 재할당은 가능
// const : 재선언 불가능, 재할당 불가능

let lll;
console.log(lll);

// let firstName = "";
// let name1 = "";

var string5 = "Aaaaa";
var string3 = "1";
var string4 = `12dsdf`;

var number = 5;
console.log(string, number);

var string6 = "jin";
let hihi = `안녕하세요 ${string6}`;
var string7 = "안녕하세요";

console.log(`안녕하세요${string6}`);

let name1 = "홍길동";
let name2 = "성춘향";

let names = ["홍길동", "성춘향", "짱구"];
//인덱싱
//인덱스 : 0 부터 시작!!!
console.log(names[0]);
console.log(names[1]);
console.log(names[names.length - 1]);

console.log(names.length);
// 배열의 길이를 출력. 배열의 길이 -> 배열 안에 저장되어 있는 값의 개수

names.push("짱아"); // 배열의 마지막에 값을 추가하는 기능
// names = ["홍길동", "성춘향", "짱구","짱아"];

names.pop(); // 배열의 가장 마지막 값을 삭제.
console.log("pop", names);

names.unshift("신형만"); // 배열의 제일 앞에 값을 추가하는 기능
console.log("신형만", names);

names.shift(); // 배열의 제일 앞에 값을 삭제하는 기능
console.log("shift", names);

names.indexOf("짱구"); // 배열 안에 "짱구"가 몇번 인덱스에 위치해 있는지 알려줌
// 만약 값이 없을 경우엔 , -1 출력됨
console.log("indexOf", names);

let bool = names.includes("짱아"); // 값이 포함되어 있는지 판별하는 기능
console.log(bool);
