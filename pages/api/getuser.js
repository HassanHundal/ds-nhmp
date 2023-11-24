import db from '../../db'
export default async function handler(req, res) {
  if(req.method === 'GET'){
    const result = await db.query("select * from login")
    res.status(200).json({ message: result.recordset })
  }
}
