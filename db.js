const sql = require('mssql')

const config = {
    user: "admin",
    password:"123456",
    server: "DESKTOP-K4GTMTR",
    database: "hundal",
    port: 1433,
    options: {
        trustedconnection: true,
        trustServerCertificate: true
    },
}
async function connectDB(){
    try {
        await sql.connect(config)
        console.log('connected to SQL')
    } catch (error) {
        console.log(error)
    }
}

connectDB()

module.exports =sql