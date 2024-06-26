import React from 'react'
import SearchBar from './searchInput.jsx'
import Conversations from './conversations.jsx'


const messageSideBar = () => {
  return (
    <div className='border-r border-primary p-4 flex flex-col'>
        <SearchBar/>
        <div className="divider px-3"></div>
        <Conversations/>
        
    </div>
  )
}

export default messageSideBar