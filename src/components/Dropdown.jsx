import React from 'react'

export default function Dropdown({isDark}) {
    return (
        <> <select name="region" id="region" style={{backgroundColor: isDark ? '#2B3945' : '#E9E9E9',color: isDark ? 'white' : 'black'}} >
            <option value="">Select by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
        </select>
        </>
    )
}
