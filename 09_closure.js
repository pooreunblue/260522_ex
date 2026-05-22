// 랙시컬 스코프
const v = "global"

function f() {
    console.log(v)
}
f();

function f2() {
    const v = "local";
    f();
}
f2();

function f3() {
    let c = 0;
    return function () {
        return ++c;
    };
}

f3();
f3()();

const counter = f3(); // 함수 표현식
console.log(counter()); 
console.log(counter());
// 자바스크립트는 접근제어자가 없다. - 모듈에 있는 값, 함수들릉 격리할 수 없음
//  다 접근 가능하다 -> only 클로저

