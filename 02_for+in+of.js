// for in
// 적절한 배열과 객체를 만들어줘

// 1. for...of (배열 순회에 적합)
const fruits = ["사과", "바나나", "오렌지", "포도"];
console.log("--- for...of (배열) ---");
for (const fruit of fruits) {
    console.log(fruit);
}

// 2. for...in (객체 순회에 적합)
const person = {
    name: "홍길동",
    age: 25,
    job: "개발자"
};
console.log("\n--- for...in (객체) ---");
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 주의: 배열에 for...in을 사용하면 인덱스(문자열)가 출력됩니다.
console.log("\n--- 배열에 for...in을 사용할 경우 (인덱스 출력) ---");
for (const index in fruits) {
    console.log(`${index}: ${fruits[index]}`);
}

// for (const v of obj) { // TypeError
// for (const v of Object.values(obj)) {
for (const v of Array.from(obj)) {
    console.log(v);
}