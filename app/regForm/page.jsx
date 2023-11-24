import React from 'react'
import axios from 'axios'



const companies= [
  'Faisal Mover',
  'Nestle',
  'Total',
  'PSO'
                
]

const Registration = () => {
  return (
    <div className='flex justify-center items-center h-screen '>
        <div className='w-11/12 h-11/12 bg-slate-300 border border-slate-200  rounded-md shadow-md '>
            <div className='h-10 text-center font-extrabold text-blue-900 text-xl p-3 '>Driver Registration Form</div>
              <div className='pt-5 p-3 flex flex-col gap-5'>
              <div className='flex flex-col gap-4 sm:flex-row'>
         
              {/* ======cnic */}
              <div className= {styles.inputdiv}>
              <label htmlFor="CNIC" className={styles.inputlabel}>Driver Cnic<sup className='text-xs text-red-500'>*</sup></label>
             <input type='text'  className= {styles.formInput} placeholder="3331034578123"/>
          </div>
          {/* company */}
          <div className= {styles.inputdiv}>
          <label htmlFor="" className={styles.inputlabel}>Company</label>
          <input 
          placeholder=' Select Company'
           list='driverCompanies'
            className={styles.formInput}/>

          <datalist id = 'driverCompanies'>
            { companies.map((item,index)=>(
              <option key={index} value={item}></option>
           ))}
          </datalist>
          </div>
          </div>

          {/* ====user info */}
          <div className='flex flex-row gap-4'>


          {/* ===========name */}
          <input type='text'  className={styles.formInput} placeholder="Driver's Name "/>


          {/* ===========date of birth */}
          <input type='date'  className={styles.formInput} placeholder="Driver's Name "/>


           {/* ===========Cell no */}
          <input type='tell' className={styles.formInput} placeholder="Cell No "/>
          </div>

          {/* licence Info */}
          <div className='flex flex-row gap-4'>
                <input type="text" placeholder='Liecense No'  className={styles.formInput}/>
                <input type="text" placeholder='License Type' className={styles.formInput}/>
                <input type="date" className={styles.formInput}/>
          </div>
               
                <div className='flex flex-row gap-4'>
                <input type="text" placeholder='Course'  className={styles.formInput}/>
                <input type="date"  className={styles.formInput}/>
                <input type="date"  className={styles.formInput}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration
const styles={
  formInput:'px-3 focus:outline-transparent w-4/5 focus:border-b-2 focus:border-green-400',

  inputdiv:'bg-white rounded-md p-1  flex gap-1 ',
  inputlabel:'p-1 font-semibold border-r-2 text-sm border-dotted border-slate-400 w-2/6'
}