import {createReadStream} from 'fs'

// const stream=createReadStream('./data.txt',{highWaterMark:1000})

// stream.on("data",(data)=>{
//     console.log(data)
// })

const stream=createReadStream('./data.txt',{encoding:"utf-8",highWaterMark:1000})

stream.on("data",(data)=>{
    console.log(data)
})