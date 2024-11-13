console.log("start");

setTimeout(()=>{
    console.log("timer 1 done");
},2000) // timer of 2 sec

const pr = new Promise(function exec(res , rej){
    console.log("executor callback triggred by promise constructor");

    let randomNo = Math.floor(Math.random()*100);
    console.log(randomNo);

    if(randomNo % 2 ==0){
        res(randomNo);
    }
    else {
        rej(randomNo);
    }
});

pr.then(function f(v){console.log("executing function f ",v)} , function g(v){console.log("executing function g ",v)});

pr.then(function h(v){console.log("executing function h ",v)} , function i(v){console.log("executing function i ",v)});

for(let i=0;i<10000000000;i++){};
for(let i=0;i<10000000000;i++){};

console.log("end");
