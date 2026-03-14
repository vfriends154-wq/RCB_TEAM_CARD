import React from 'react'

const Navbar = () => {
    return (
        <div className='flex item-center justify-between py-6 px-16'>
            <h1 className='bg-amber-600 text-white uppercase px-6 ml-5 py-2 rounded-full text-xs'>Match Schedule</h1>
            <button className='bg-amber-600 text-white uppercase px-6 py-2 rounded-full  text-xs '>Player Stats</button>
        </div>
    )
}
export default Navbar