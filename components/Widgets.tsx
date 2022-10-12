import React from 'react';
import {MagnifyingGlassCircleIcon} from '@heroicons/react/24/outline';
import { TwitterTimelineEmbed} from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='px-2 mt-2 col-span-2 hidden lg:inline'>
        <div className='flex items-center space-x-2 p-3 rounded-full bg-blue-100 '>
            <MagnifyingGlassCircleIcon className='h-5 w-5 text-gray-400' />
            <input type="search" placeholder='Search Twitter'className='bg-transparent outline-none'/>
        </div>
        <TwitterTimelineEmbed
  sourceType="profile"
  screenName="saurabhnemade"
  options={{height: 1400}}
/>
    </div>
  )
}

export default Widgets