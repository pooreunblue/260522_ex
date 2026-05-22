// let, const, (var)

// 외부와 독립된 블록 공간 -> 외부의 영향은 받으면서 외부로 영향을 주지 않도록 설계
let a = 0;
function myFun(){
    a++;
    // return undefined
    let b = "나"
    return b
}
myFun();
console.log(a);
// console.log(b); // ReferenceError: b is not defined
console.log(myFun());
const c = myFun();
console.log(c);
function myFun2(a) {
    return a * 2;
}
console.log(myFun2(100));

function myFun3() {
    if (Math.random() > 0.5) {return [1, 2, 3];}
    return {a:1, b:2, c:3};
}
console.log(myFun3());