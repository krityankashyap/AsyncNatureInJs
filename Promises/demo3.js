const pr = new Promise(function exec(res , rej){
    console.log("Executor callback triggred by promise constructor");
    setTimeout(()=>{
        const randomNo = Math.floor(Math.random()*100);
        console.log(randomNo);

        if(randomNo %2==0) {
            res(randomNo);
        } else {
            rej(randomNo);
        }
    },5000);
})

console.log("new promise object is created");
console.log(pr);