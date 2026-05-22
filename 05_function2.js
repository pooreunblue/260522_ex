// 표현식

// 익명함수 (Anonymous function)
(function () {
    console.log("나는 존재한다");
})();

// 함수 표현식
const f = function () {
    console.log("나는 존재한다 2")
};
f(function () {
    console.log("포케");
});

a();

function a() {
    console.log("호이스팅")
}

// 화살표 함수
(function () {})
// (입력) => (출력)
const af = () => 0;
af();
console.log(af())
const af2 = (a) => console.log(`실행 결과 : ${a}`);
console.log(af2(1));
const af3 = (a) => {
    a++;
    a *= 2;
    return a;
};
console.log(af3(100))