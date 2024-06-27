import React, { useEffect, useState } from 'react'
import Card from './Card'
import '../components/card.css'


export default function CountriesList({ query }) {
  let [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all').then((res) => res.json())
      .then((data) => {
        setCountries(data)
      })
  }, [])


  let array = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(query)
  }).map((country) => {

    return <Card name={country.name.common}
      flag={country.flags.svg}
      population={country.population}
      region={country.region}
      capital={country.capital} />
  })

  return (

    <div className='countriesCard'>
      {array}
    </div>
  )
}