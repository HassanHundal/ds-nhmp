"use client"
import React from 'react'
import Link from 'next/link'
import {showMessage}from '../../Functions/userData'
const Signup = () => {

  return (
 <div className='h-screen p-10 bg-white items-center justify-center flex'>
  <div className='bg-green-300 w-3/6 h-5/6 rounded-t-lg p-2 flex items-center flex-col'>

   <div className='w-full h-14 font-family:Roboto font-extrabold text-2xl bg-blue-500  items-center justify-center flex rounded-lg'>
    Driver Info
    </div>
    {/* ==========body */}
   <div className="bg-blue-400 rounded-xl w-full h-4/5 p-3 mt-3 flex justify-start pt-5 items-center flex-col gap-3">
    <input type="text" placeholder="Driver's Name" className={styles.userinput} />
    <input type="text" className={styles.userinput}/>
    <input type="text" className={styles.userinput}/>
    <input type="text" className={styles.userinput}/>
   </div>

    <div className='bg-indigo-300 p-3 flex flex-row m-3'>
      <div className='w-10 h-10 bg-green-400'></div>
      <input type="text" className={styles.userinput} />
    </div>

  </div>

 </div>


  )
}

export default Signup

const styles={
  userinput:'pl-3 p-2 w-full rounded-md'
}