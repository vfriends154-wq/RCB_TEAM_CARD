import React from 'react'
import HeroText from './HeroText'
import Arrow from './Arrow'


const LeftSide = () => {
    return (
        <div className='h-full flex flex-col justify-between  w-1/3 px-5 py-3  ' >
            <HeroText />
            <Arrow />
        </div>
    )
}

export default LeftSide