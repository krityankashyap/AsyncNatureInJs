/**
 * Implement a set of dummy functions which can mimic the set of following instructions
 * (A) download -> this function should mimic downloading of some content from a url
 * (B) writefile -> this function should mimic writing of some content from a file
 * (C) upload -> this function should mimic uploading the file to a server
 * 
 * Now after you've implemented thede function , try to use them in a scenario where we first 
 * download a file , then write it to a disk and then upload it to a server
 */

function download(url , callback){
    console.log("Downloading from ",url);
    setTimeout(()=> {
     console.log("Downloading done");
     let DownloadedData = "SomeData";
     callback(DownloadedData);
    },3000)
}

function writeFile(data , filename , callback){
    console.log("Writing ", data , "to file");
    setTimeout(()=>{
     console.log("writing file to ", filename ,"is done");
     let status = "success";
     callback(status);
    },2000);
}

function upload(filename , url , callback){
    console.log("uploading file ",filename ,"to ", url);
    setTimeout(()=>{
        console.log("uploading is done");
        let uploadStatus = "success";
        callback(uploadStatus);
    },3000 )
}

function process(){
    download("http//www.downloading.com" , (data)=>{
        writeFile(data , "file.txt" , (status)=>{
            upload("file.txt" , "http// www.downloading.com" , (uploadedstatus)=>{
                console.log("process is done");
            });
        });
    });
};

process();