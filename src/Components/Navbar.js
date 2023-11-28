import React, { useState } from 'react'

function Navbar() {
  
const [darkmode, setDarkmode] = useState(false);

  return (
    <div className='flex w-full h-[50px] px-9 justify-between bg-slate-400 items-center'>
        <div className='flex '>
        <h2 className='text-2xl pr-6 font-extrabold text-cyan-600'> Text Editor</h2>
        <div className='flex gap-5 pt-2'>
            <h3 className='text-l font-bold'>HOME</h3>
            <h3 className='text-l font-bold'>About</h3>
            <h3 className='text-l font-bold'>Contact</h3>
        </div>
        </div>
        <div >

        <label class="relative inline-flex items-center ">
  <input type="checkbox" value="false" class="sr-only peer"/>
  <div className="w-11 cursor-pointer h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm  text-black dark:text-gray-300  items-center font-bold">Dark Mode</span>
</label>

        </div>
    </div>
  )
}

export default Navbar