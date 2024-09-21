import EventEmmiter from 'events'
import { CLIENT_RENEG_LIMIT } from 'tls'

//Creating an instance
const customemmiter=new EventEmmiter()

customemmiter.once('response', (name,id)=>{
    console.log(`user: ${name} id: ${id}`)
})

customemmiter.emit('response',"sanidhya", 19)
customemmiter.emit('response',"sam", 16)
customemmiter.emit('response',"alex", 18)