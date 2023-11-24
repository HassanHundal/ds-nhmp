import db from '../../../db'
export default async function handler(req, res) {

    if (req.method === 'POST') {
     const data = req.body
        
        await db.query(`insert into login (

           username,
           password

           ) 
           values (

            '${data.username}',
            '${data.password}'
            
            ) `
            
            )


       console.log("data saved")
      }
    }