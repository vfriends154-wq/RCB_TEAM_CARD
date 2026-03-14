import React from 'react'
import LeftSide from './leftSide'
import RightSide from './rightSide'

const PageContent = (props) => {
  return (
    <div className='py-10 h-[90vh] flex items-center gap-10 px-18'>
      <LeftSide />
      <RightSide  users={props.users}/>
    </div>
  )
}

export default PageContent