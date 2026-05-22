// 객체 구조 분해 할당
const obj = { name : "윌", age: 18, job: "사장"};
const {name, age, job} = obj;
console.log(`이름: ${name}`);
console.log(`나이: ${age}`);
console.log(`직업: ${job}`);
function f() {
    return {
        name: "박자바",
    };
}
const { name: personName } = obj; // alias
const { name: personName2} = f();
console.log(personName, personName2);

const { salary, pet = "고양이", name: name2, ...rest } = obj;
console.log(salary);
console.log(pet);
console.log(rest); //  선택 못 받은 객체 프로퍼티들은 나머지 연산자로 끌어올 수 있다
// 재할당, 얇은 복사, 깊은 복사
const obj2 = obj // 재할당
console.log(obj2);
obj["name"] = "세바스찬";
console.log(obj2);
const obj3 = { ...obj};
const { ...obj4 } = obj;
obj["name"] = "좐";
console.log(obj3, obj4);
console.log("obj === obj2", obj === obj2);
console.log("obj === obj3", obj === obj3);

// 배열 구조 분해 할당
const arr = ["삼성전자", "SK하이닉스", "SK스퀘어", "현대차", "삼성전기"];
// for ()
const [a1, a2, a3, a4, a5] = arr;
console.log(a1, a2, a3, a4, a5);
const [a6] = arr;
console.log(a6)
const [, , , , , a7] = arr; // ,로 생략이 가능? 가능함
console.log(a7);
let i = 0;
let j = 100;
console.log(i, j);
[j,i] = [i, j];
console.log(i, j);
const [b, ...c] = arr;
console.log(b, c);
const [d, e, h, ...g] = arr;

arr[0] = {a:1};
const arr2 = arr;  // 재할당 -> 같은 배열
const arr3 = [...arr]; // 다른 배열
console.log(arr === arr3);
arr[1] = 1000;
console.log(arr);
console.log(arr3);
arr[0] = {a:1000};
console.log(arr);
console.log(arr2);
