import React, { useState, useEffect } from 'react'
import { StyledHeader, Main } from './styles'

const Temp = () => {

    const [weather, setWeather] = useState('')
    let location = "Chicago"

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1697ec31096323947f4c4c49ac1be5b8`)
            const data = await res.json()
            setWeather(data.weather[0].description.toUpperCase())
        }
        fetchData()
    }, [])

    return (
        <div className="App">
          <Main>
            <center><StyledHeader>The weather for today in {location} is: {weather}</StyledHeader></center>
          </Main>
        </div>
        
    )
}

export default Temp