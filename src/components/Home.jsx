import React from 'react'
import CountriesList from './CountriesList'
import Header from './Header'
import Input from './Input'
import './card.css'
import { useState } from 'react'
import Dropdown from './Dropdown'


export default function Home() {
    let [query, setQuery] = useState('')
    let [isDark, setIsDark] = useState(false)
   console.log(isDark);
    
  return (
    <div className={isDark ? 'main darkBg' : 'main' }>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className='search-box'>
      <Input setQuery={setQuery} isDark={isDark} />
        <Dropdown isDark={isDark} />
      </div>
      <CountriesList query={query} isDark={isDark} />
    </div>
  )
}
