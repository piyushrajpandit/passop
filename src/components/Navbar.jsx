import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-800   text-white">
      <div className="mycontainer flex justify-between items-center px-4 py-5 h-24">

        <div className="logo font-bold text-white text-2xl">
           <span className='text-green-800'>   &lt; </span>
       
           <span>Pass</span>
           <span className='text-green-800'>OP/ &gt; </span>
           </div>
      {/* <ul>
        <li className='flex gap-4'>
            <a href="/" className="hover:font-bold">Home</a>
            <a href="#" className="hover:font-bold">About</a>
            <a href="#" className="hover:font-bold">Contact</a>
       
        </li>
      </ul> */}
      <button className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center justify-center gap-2 hover:bg-green-600 transition border border-green-700 ring-white ring-1">
        <img className='invert p-3 w-16' src="/icons/github.svg" alt="github logo" />
        <span className='font-bold px-4'>Github</span>
      </button>
      </div>
    </nav>
  )
}

export default Navbar
