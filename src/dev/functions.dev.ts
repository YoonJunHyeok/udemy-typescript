function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result:" + num);
}

function printResult2(num: number): undefined | void {
  console.log("Result:" + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

let combinedResult: (a: number, b: number) => number;

combinedResult = add;

printResult(combinedResult(1, 2));

addAndHandle(1, 2, (result) => {
  console.log(result);
});
