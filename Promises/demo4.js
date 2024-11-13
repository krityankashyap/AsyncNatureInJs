console.log("start");

setTimeout(()=>{
    console.log("timer 1 done");
},2000) // timer of 2 sec

const pr = new Promise(function exec(res , rej){
    console.log("executor callback triggred by promise constructor");

    setTimeout(()=>{
        let randomNo = Math.floor(Math.random()*100);
        console.log(randomNo);

        if(randomNo % 2 == 0){
            res(randomNo);
        }  else {
            rej(randomNo);
        }
    },3000);
});

pr.then(function f(){console.log("executing function f")} , function g(){console.log("executing function g")});

pr.then(function h(){console.log("executing function h")} , function i(){console.log("executing function i")});

for(let i=0;i<10000000000;i++){};
for(let i=0;i<10000000000;i++){};

console.log("end");
