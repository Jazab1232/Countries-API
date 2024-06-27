import React, { useEffect, useState } from 'react'
import Header from './Header'
import '../../src/app.css'
import { Link } from 'react-router-dom';

export default function Details() {
    let url = new URLSearchParams(window.location.search).get('name');
    let isDark = new URLSearchParams(window.location.search).get('isDark');


    let [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then((res) => res.json())
            .then((data) => {
                setCountries(data)
            })
    }, [])
    let filterArray = countries.filter((country) => {
        return country.name.common.toLowerCase().includes(url.toLowerCase())

    }).map((country) => {
        console.log(country);
        return (
            <main id="main" className={isDark ?'darkBg':''}>
                <Link to={'/'} id="" className={isDark ?' back-btn darkElement':'back-btn'}><i className="fa-solid fa-arrow-left-long"></i> Back</Link>

                <div className="details">
                    <div className="img"> <img src={country.flags.svg} alt="" /></div>

                    <div className='countriesInfo'>
                        <div className="country-info1">
                        <h1>{country.name.common}</h1>
                        <p><b>Native Name: </b>  {country.name.common}</p>
                        <p><b>Population:</b> {country.population}</p>
                        <p><b>Region:</b> {country.region}</p>
                        <p><b>Sub Region:</b> {country.subregion}</p>
                        <p><b>Capital:</b> {country.capital}</p>
                    </div>
                    <div className="country-info2">
                        <p><b>Top Level Domain:</b> {country.tld} </p>
                        <p><b>Currencies:</b> {Object.values(country.currencies).map((cur) => cur.name).join(', ')}</p>
                        <p><b>Language:</b> {Object.values(country.languages).map((lang) => {
                            if (lang.length > 1) {
                                return lang + ', '
                            } else { return lang }
                        })}</p>
                    </div>

                    </div>
                </div>


            </main>
        )
    })
    return (
        <div  className={isDark ? ' darkBg': ''}>
            <Header   />
            {filterArray}

        </div>
    )
}
