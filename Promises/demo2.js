const pr = new Promise(function exec(res,rej){
    console.log("Executor callback triggered by Promise constructor ");
    const randomNo = Math.floor(Math.random()*100);
    console.log(randomNo);

    if(randomNo % 2 == 0) {
        res();
    } else{
        rej();
    }
});

console.log("Created the new Promise object");
console.log(pr);