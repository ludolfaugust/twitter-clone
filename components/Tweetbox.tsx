import React, { useState } from 'react'
import {MagnifyingGlassIcon, PhotoIcon, MapPinIcon, CalendarIcon, FaceSmileIcon  } from '@heroicons/react/24/outline';

function Tweetbox() {

    const [input, setInput]  = useState<string>("")
  return (
    <div className='flex'>
        <img className='h-14 w-14 object-cover rounded-full mt-4 ' 
            src="https://links.papareact.com/gll"
        />
        <div className='flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col'>
                <input 
                value={input}
                type="text" 
                placeholder='What´s happening?'
                className='h-24 text-xl outline-none '
                onChange={(event)=>setInput(event?.target.value)}
                />
                <div className='flex items-center justify-between'>
                    <div className='flex space-x-2 text-twitter'>
                        <PhotoIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150' />
                        <MagnifyingGlassIcon className='h-5 w-5' />
                        <FaceSmileIcon className='h-5 w-5' />
                        <CalendarIcon className='h-5 w-5' />
                        <MapPinIcon className='h-5 w-5' />

                    </div>
                    <button disabled={!input} className='bg-twitter px-5 py-2 font-bold
                     text-white rounded-full disabled:opacity-40'
                     >
                        Tweet
                    </button>
                </div>
            </form>
        </div>
    </div>
    
  )
}

export default Tweetbox