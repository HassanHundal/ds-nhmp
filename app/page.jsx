"use client"
import React,{useState} from "react"
import axios from "axios"
import Link from "next/link"

export default function Home() {

const [user,setUser] =useState("")
const [pwd,setPwd] =useState("")

//-----------------------save function

const newUser ={

username:user,
password:pwd
}


const save =()=>{
  try {
    
    axios.post(`/api/saveuser`, newUser).then(
      alert("data saved")
     )

  } catch (error) {
    console.log(error)
  }


}

//----------------------get data

const getdata =()=>{
  axios.get(`/api/${user}`).then(
    response=>{
    setPwd(response.data[0].password)
     
    }
  )
}


  //====================================UI 
  return (
    <div className="bg-gray-200  p-4 flex items-center justify-center h-screen">
     <div className=" w-4/5 h-5/6 bg-gradient-to-tr from-blue-600 via-purple-500
      to-purple-600  items-center justify-center  top-8 rounded-lg flex flex-col gap-4">
       <div className="flex justify-center items-center ">
        <h1 className="text-white">User Name</h1>
        {/* userName */}
      <input value={user} onChange={e=>setUser(e.target.value)} className="w-3/5 rounded-md p-1 ml-4 pl-3"  />  
      </div>
      <div className="flex justify-center items-center ">
        <h1 className="text-white">Password</h1>
      <input value={pwd} onChange={e=>setPwd(e.target.value)}  type ="password"  className="w-3/5 rounded-md p-1 ml-6 pl-3"  />
      </div>
      <div className="" >
        <button 
       onClick={() => save()}
        
        className="border-2 rounded-md  px-4 py-1 bg-purple-900 text-white font-semibold hover:bg-white hover:text-purple-900">Login</button>

<button 
       onClick={() => getdata()}
        
        className="border-2 rounded-md  px-4 py-1 bg-purple-900 text-white font-semibold hover:bg-white hover:text-purple-900">getdata</button>

        <Link href='/signup' className="bg-white p-2 m-2 text-bold rounded-md hover:p-3" >
          Signup
          </Link>
          <Link href='/regForm' className="bg-white p-2 m-2 text-bold rounded-md hover:p-3" >
          Registration
          </Link>
      </div>
     </div>
    </div>
  )
}
