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

const string2 = "가나라";
string2 = "aa";

// var let const
// var : 재선언, 재할당
// let : 재선언 불가능, 재할당은 가능
// const : 재선언 불가능, 재할당 불가능

let lll;
console.log(lll);
