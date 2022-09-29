const {readFile,writeFile} = require('fs')

readFile('./content/first.txt','utf8', (err,results)=>{
    if(err){
        console.log('err', err)
        return
    }
    const first = results
    readFile('./content/subFolder/second.txt','utf8',(err,results)=>{
        if(err)
        {
            console.log('err', err)
            return
        }
        const second = results
        writeFile('./content/results-async.txt',`Here is the Result: ${first} , ${second}`,(err,results)=>{
            if(err){
                console.log('err', err)
            }
            console.log('results', results)
        })
    })
    console.log(results)
})