import React from 'react'
import '../components/card.css'

export default function Input({setQuery,isDark}) {
  return (
    <>            
            <div className="input-box" style={{backgroundColor: isDark ? '#2B3945' : '#E9E9E9',color: isDark ? 'white' : 'black'}} >
            <i className="fa-solid fa-magnifying-glass"></i>
            <input style={{backgroundColor: isDark ? '#2B3945' : '#E9E9E9',color: isDark ? 'white' : 'black'}}   onChange={(e)=>{setQuery(e.target.value)}} type="text" id="input" placeholder="Search for Countries" />

        </div>
        </>
  )
}
