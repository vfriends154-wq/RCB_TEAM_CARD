import React from 'react'
import {ArrowRight} from 'lucide-react'
const RightCardContent = (props) => {
  return (
      <div className='h-full w-full left-0 top-0 absolute p-7 flex flex-col justify-between'>
        <h3 className='bg-white  text-xl font-semibold h-10 w-10 rounded-full flex items-center justify-center'>{props.index+1}</h3>
        <div>
          < p className='text-white mb-10 text-lg font-semibold leading-normal'>{props.intro}</p>
          <div className='flex justify-between '>
            <button className='bg-red-600 rounded-full  px-7 py-1 text-lg  text-black font-semibold h-10'>{props.tag}</button>
            <button className='bg-red-600 rounded-full px-2 py-1 text-white h-10'><ArrowRight/></button>

          </div>

        </div>

      </div>
  )
}

export default RightCardContent