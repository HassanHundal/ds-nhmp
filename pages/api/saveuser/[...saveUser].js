import db from '../../../db'
export default async function handler(req, res) {

    if (req.method === 'POST') {
        const {saveUser} = req.query
        
        await db.query(`insert into login ( username,password) values ('${saveUser[0]}','${saveUser[1]}') `)
       console.log("data saved")
      }
    }

