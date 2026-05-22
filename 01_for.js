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

// 역방향
console.log("[역방향]")
for (let i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
}

// while문으로 구현한다면
let w2 = arr.length - 1;
while (w2 >= 0) {
    console.log(arr[w2]);
    w2--;
}

// 무한반복
// for (;;) {
//     console.log("크크크큭")
// }

for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        console.log(`i ${i} j ${j}`)
    }
}

const matrix = [
    [1,"윌","바나나"],
    [2,"김","김"],
    [3,"자바","커피"],
];
for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
    for (let j = 0; j < matrix[0].length; j++) {
        console.log(matrix[i][j]);
    }
}