function* myGenerators(arr){
    for(let i=0;i<arr.length;i++){
        if(i%2==0)
            yield arr[i];
        
    }
}

const it = myGenerators([1,2,3,4,5]);
console.log(it.next());
console.log("end");
console.log(it.next());
console.log("end");