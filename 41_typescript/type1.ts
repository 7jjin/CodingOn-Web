// 튜플
// 튜플 타입 선언
let drink : [string,number]

// 튜플 초기화
drink = ["cola",2000]

// 튜플의 선언과 초기화
let drink2: [string,number] = ["cola",2000];

//js 배열과 동일하게 인덱스 접근 가능, 메서드 사용 가능
console.log(drink[0])

// spread 연산자 사용 가능
console.log([...drink2,"콜라"]);

// readonly: 데이터를 변경 안되게(일기 전용)
let drink3:readonly [string,number] = ["cola",2000];
// drink3.push("콜라");

/*------------------------------------------------------*/
//열거형

//enum은 기본적으로 0부터 1씩 증가하는 값을 갖는다.
enum Auth {
    admin=100,
    user,
    guest   
}

//enum은 문자열을 지정해 줄 수 있다.
enum Delivery {
    pending = "pending",
    delivery = "delivery",
    finish = "finish"
}

console.log(Auth.admin,Delivery.finish)



/*------------------------------------------------------*/
let a: any = ['1','2',1,2,3]


// 실습 문제1
let olimpic_newgame : readonly [object,boolean] = [{
    name:"쇼트트랙",
    type:"혼성 계주",
    },
    true,
];

// olimpic_newgame[1] = false;


