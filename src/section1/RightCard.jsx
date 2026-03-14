import React from 'react'
import {ArrowRight} from 'lucide-react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden relative bg-amber-400 w-50  rounded-4xl shrink-0'>
      <img className='h-full w-full object-cover' src={props.img} alt="Invalid Link" />
      <RightCardContent tag={props.tag} intro={props.intro} index={props.id}/>
    
    </div>
  )
}

export default RightCard