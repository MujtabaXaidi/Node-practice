const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime

console.log(`System uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMenu:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)