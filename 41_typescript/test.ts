


// 타입스크립트의 기본형태
let ab:string = "hi"
let b : number = 1
let c: boolean = true
let d: object = {
    name:"jin",
    age:20
}

console.log(b,c,d)
// typescript를 쓰는 이유?
// 1) js로 실행 시 타입 체크가 없어 의도와 다른 방식으로 쓰일 수 있음
// 2) 정적파일언어 -> 실행하지 않고 코드 상의 에러를 알려줌(실시간 디버깅)

//배열
let arr:string[] = ["hi","jo"];
let numArr: number[] = [1,2,3,4]
let numArr2: number[];
numArr2 = [1,2,3,4,5];

//객체
let person: {
    name:string;
    age:number;
}[];
// 객체 배열 넣는 방법
person = [{
    name:"jin",
    age:10
}]
