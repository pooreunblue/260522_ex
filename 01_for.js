// if, switch - 1번 => 여러번?
// 특정한 조건을 만족시키면 1번
// while - 특정한 조건이 만족된다면 계속 진행
// -> 조건/논리값 - boolean -> 뒤집으면 false

// while (true) { // 무한반복 }
    let w = 0;
    console.log(w);
    w++;

// for (초기식;조건식;증감식) {}
// for (const i = 0; i < 5; i++) { // Assignment to constant variable.}
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// for-in, for-of -> const v => 한 블록마다 호출되고 그 다음에 소멸함.

//  배열 순회
const arr = ["아침","간식","점심","간식","저녁"]
for (let i=0; i < arr.length; i++) {
    if (arr[i] === "간식") {
        continue;
    }
    console.log(arr[i]);
    if (arr[i] === "점심") {
        break;
    }
}