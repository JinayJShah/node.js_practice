/*const path = require('path');

console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename).base)
console.log(path.join(__dirname,'test','api'))*/


const fs = require('fs');
const path = require('path');

// to make a folder in directory
/*fs.mkdir(path.join(__dirname,'./test'),{},(err)=> {
    if(err) throw err;
    console.log('folder is created..');
});*/

//to add file in dir and write to it

/*fs.writeFile(
    path.join(__dirname,'./test','world.txt'),
    'world',
    (err)=> {
        if(err) throw err;
        console.log('file written to..');
    
// to append file
        fs.appendFile(
            path.join(__dirname,'./test','world.txt'),
            'hello world',
            (err)=> {
                if(err) throw err;
                console.log('file written to..');
            }
        );
    }
);*/


// read file

/*fs.readFile(
    path.join(__dirname,'./test','world.txt'),'utf8',
    (err,data)=> {
        if(err) throw err;
        console.log(data);
    }
);*/

// rename file

/*fs.rename(
    path.join(__dirname,'./test','world.txt'),
    path.join(__dirname,'./test','hello world.txt'),
    (err)=> {
        if(err) throw err;
        console.log('file renamed..');
    }
);*/
fs.writeFile(
    path.join(__dirname,'os.js'),
    'hello',
    (err)=> {
        if(err) throw err;
        console.log('file written to..');
    }
);

fs.rename(
    path.join(__dirname,'os.js'),
    path.join(__dirname,'http.js'),
    (err)=> {
        if(err) throw err;
        console.log('file renamed..');
    }
);