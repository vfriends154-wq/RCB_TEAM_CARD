import React from 'react'
import RightCard from './RightCard'

const RightSide = (props) => {
  return (
    <div  className='h-full rounded-[20px] w-2/3 p-6 flex flex-nowrap gap-10 overflow-x-auto ' >
     {props.users.map(function(elem,idx){
      return <RightCard  img={elem.img} tag={elem.tag} intro={elem.intro} key={idx} id={idx}/>

     })}
    </div>
  )
}

export default RightSide