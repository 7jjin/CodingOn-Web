import { StringLiteral } from 'typescript';

//interface -> 가장중요
interface Student {
    name:string;
    grade:number;
    isPassed:boolean;
}

let persons: Student = {
    name:"jin",
    grade:4,
    isPassed:true,
}

/*-----------------------------------------------------------*/
//type
type Gender = "Female" | "Male" | "Boy" | "Girl";
const gender: Gender = "Boy"


/* 실습문제2 */
// desc?: 하면 이 키 값이 있어도 되고 없어도 된다는 뜻
interface Game {
    title:string;
    price:number;
    desc?:string;
    category:string;
    platform:string;
}

let heroGame_A:Game = {
    title:"DC 언체인드",
    price:50000,
    desc:"DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미가지!",
    category:"액션",
    platform:"모바일"
};
let heroGAme_B:Game={
    title:"MARVEL 퓨처파이트",
    price:65000,
    category:"롤플레잉",
    platform:"모바일"
}

