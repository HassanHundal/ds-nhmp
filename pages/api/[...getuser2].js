import db from '../../db'
export default async function handler(req, res) {
  if(req.method === 'GET'){
    const {getuser2} = req.query
    const result = await db.query(`select * from login where username ='${getuser2[0]}' `)
    res.status(200).json(result.recordset )
  }
}
