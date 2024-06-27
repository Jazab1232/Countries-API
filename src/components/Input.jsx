import React from 'react'
import '../components/card.css'

export default function Input({setQuery}) {
  return (
    <>            
            <div className="input-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input  onChange={(e)=>{setQuery(e.target.value)}} type="text" id="input" placeholder="Search for Countries" />

        </div>
        </>
  )
}
