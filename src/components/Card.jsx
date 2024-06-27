import React from 'react'
import '../components/card.css'
import { Link } from 'react-router-dom'

export default function Card({name,flag,population ,capital,region}) {
  return (
    <>
      <Link to= {`/details?name=${name}`}   className="card"   >
        <img src={flag} alt="Flag" />
        <div className="card-text">
          <h3>{name}</h3>
          <p><b>Population: </b> {population.toLocaleString('en-IN')}</p>
          <p><b>Region: </b>{region}</p>
          <p><b>Capital: </b>{capital}</p>
        </div>

      </Link>
    </>
  )
}
