let value:string | number = "안녕하세요"

function getValue(val:string|number|object):string|number|object{
    return val;
}
getValue("hi")

//제네릭 타입으로 변경
function getValue2<T>(value:T):T{
    return value
}
console.log(getValue2<string>("안녕하세요"));
console.log(getValue2<number>(100))

function arrLength<T>(arr: T[]){
    return arr.length
}

console.log(arrLength<string>(["a","b","c"]));
console.log(arrLength<number>([1,2,3,4,5]));

function printFunc<T>(x:T,y:T){
    console.log(x)
    console.log(y)
    return x;
}

// console.log(printFunc<string>("hi","hello"))


function arrElement<T>(arr:T[],num:number){
    if(num>arr.length-1){
        return false;
    }else{
        return arr[num]
    }
}
console.log(arrElement<string>(["a"],0))
console.log(arrElement<string>(["a"],1))