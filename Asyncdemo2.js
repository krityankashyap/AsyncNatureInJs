function createTimer(time , timerid){
    console.log("Creating a new timer with id" ,timerid);
    setTimeout(()=> {
        console.log(`timer with id ${timerid} is done`);
    },time);
    console.log("successfully created a timer with id ", timerid);
}

console.log("Starting the code");

createTimer(3000 , 1);
createTimer(0 , 2);

console.log("starting the loop");

for(let i=0;i<1000000000;i++){
    //some code;
}

console.log("loop is done");

console.log("Last line of code");