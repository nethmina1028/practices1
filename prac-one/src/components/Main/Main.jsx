import React from 'react'
import Heroimg from '../../assets/coffee2.png'

function Main() {
  return (
    <div className=' min-h-[550px] sm:min-h-[600px] bg-brandDark text-white  flex justify-center items-center'>
      <div className='container pb-8 xs:pt-12 '>
        <div className=' grid grid-cols-1 sm:grid-cols-2 items-center flex-wrap '>
            <div>
                <h1 className='lg:text-7xl text-5xl sm:text-6xl font-bold '>We serve the richest <span className='font-cursive text-primary'>Coffee</span> in the city</h1>
                <button className='mt-6 border rounded-full h-12 w-40 hover:bg-black'>Coffee And Code</button>
            </div>
             
            <div className='min-h-[450px] flex justify-center items-center order-1 sm:order-2 relative '>
                <img src={Heroimg} alt='coffee'
                 className='w-[330px] sm:w-[450px]
                 sm:scale-110 mx-auto spin'
                />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Main