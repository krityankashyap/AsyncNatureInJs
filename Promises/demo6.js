/**
 * Implement a set of dummy functions which can mimic the set of following instructions
 * (A) download -> this function should mimic downloading of some content from a url
 * (B) writefile -> this function should mimic writing of some content from a file
 * (C) upload -> this function should mimic uploading the file to a server
 * 
 * Now after you've implemented thede function , try to use them in a scenario where we first 
 * download a file , then write it to a disk and then upload it to a server
 */

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
        setTimeout(function () {
          console.log("writing to file ",data , " to file");
          let name = "example.txt";
          res(name);
        },3000);
    })
}
function upload(filename , url){
    return new Promise(function exec(res , rej){
        setTimeout(function () {
            console.log("upload is done");
            let uploadData = "success";
            res(uploadData);
        },3000);
    })
}
