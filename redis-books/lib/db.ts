import { createClient } from 'redis'

const client = createClient({
    // password: process.env.REDIS_PW,
    socket: {
        host: "localhost", //process.env.REDIS_HOST,
        port: 6379 //+process.env.REDIS_PORT || 6379
    }
})

client.on('error', err => console.log(err))

if (!client.isOpen) {
    client.connect()
}

// client.set('name', 'mario')

export { client }