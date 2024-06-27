import React from 'react'
import CountriesList from './CountriesList'
import Header from './Header'
import Input from './Input'
import './card.css'
import { useState } from 'react'
import Dropdown from './Dropdown'


export default function Home() {
    let [query, setQuery] = useState('')
  return (
    <div className='main'>
      <Header />
      <div className='search-box'>
      <Input setQuery={setQuery} />
        <Dropdown />
      </div>
      <CountriesList query={query} />
    </div>
  )
}
