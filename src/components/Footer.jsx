import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white text-center py-4 flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 px-4  w-full'>

        <div className="logo font-bold text-white text-2xl">
           <span className='text-green-800'>   &lt; </span>
       
           <span>Pass</span>
           <span className='text-green-800'>OP/ &gt; </span>
           </div>
        <div className="flex justify-center items-center">

      Created with <img className='w-6 m-2 h-6' src="icons/heart.png" alt="" /> by Piyush raj
        </div>
    </div>
  )
}

export default Footer
