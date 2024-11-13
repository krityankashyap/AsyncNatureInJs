function * myGenerators() {
    console.log("hii.. there");
    yield 2;
    console.log("hiii there 2");
    yield 45;

}

const i = myGenerators();
console.log(i.next());
console.log("end");
console.log(i.next());
console.log("end");