// 호이스팅
console.log(fun);
console.log(typeof fun);
console.log(fun())
console.log(bar);
// console.log(foo);
foo = 100;
console.log(foo);
var bar = 200;
console.log(bar);
function fun() {
    return 0;
}
// let, const를 써서 선언 시점을 고정하는 것 -> 호이스팅 방지
// 1) 재선언, 재할당 X
// 2) 호이스팅 방지 (func, var...)
function fun() {
    return "덮어 씌워" // 선언부로 올라가고, 재선언도 가능
}

// const, let, 함수표현식/화살표함수를 위주로 하면 호이스팅 겪을 일이 없다