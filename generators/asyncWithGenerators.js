function download(url) {
    return new Promise(function exec(res , rej){
        console.log("start downloading data from ",url);
        setTimeout(function () {
            let data = "some data from " + url;
            console.log("downloaded data from ",url);
        res(data);
        },3000);
    })
}
function writeFile(data , filename){
    return new Promise(function exec(res , rej){
        console.log("writing ", data ," to file");
        setTimeout( ()=> {
          console.log("writing to file ",data , " to file");
          let status = "success";
          res(status);
        },2000);
    })
}
function upload(filename , url){
    return new Promise(function exec(res , rej){
        console.log("uploading file ", filename, " to ", url);
        setTimeout( ()=> {
            console.log("upload is done");
            let uploadData = "success";
            rej(uploadData);
        },3000);
    })
}


function* exec(){
    console.log("start execution");

    const downloadedData = yield download("www.example.com");
    console.log("Data downloaded is ",downloadedData);

    const fileReasponse = yield writeFile(downloadedData , "example.txt");
    console.log("file written status ", fileReasponse);
    
    const uploadSatus = yield upload("example.txt" , "www.example.txt");
    console.log("uploaded status ", uploadSatus);

    return uploadStatus;
}

const it = exec(); // exec function will return us an generator object having iterator

const ft = it.next();
console.log("ft is ", ft);  

ft.value.then(function doAfterReceiving(value){
    console.log("Calling do after receiving when download is finished ", value);
})