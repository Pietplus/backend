const fs = require('fs');
const process = require('process');

//to create a file and write into it
fs.writeFile('./myfile.txt', 'Hello world Nodejs', (err) => {
    if (err) throw err;
});


//to read file contents
fs.readFile('./myfile.txt', (err, data) => {
    if (err) throw err;
    const strData = data.toString();
    console.log(strData)

    const NumofChars = strData.length;
    const NumofWords = strData.split(" ").length

    console.log('Data:', strData, 'NumOfChars:', NumofChars, 'NumofWords:', NumofWords);
})


//copying a file
//1.read the file
//2. create a new file and write the content there

function copyFile (src, dest) {
    fs.readFile(src,(err,data) => {
        if (err) throw err;
        console.log(data)


        fs.writeFile(dest,data.toString(),(err) => {
            if(err) throw err;
        })
    })
}

copyFile('./myfile.txt', './copiedFile.txt')

copyFile(process.argv[2],process.argv[3]);
