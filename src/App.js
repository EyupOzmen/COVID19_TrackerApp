import React, {useState, useEffect } from 'react';

import {Cards,Chart,CountryPicker} from './components/index'
import styles from './App.module.css'
import {fetchData} from './api'

import coronaImage from './images/image.png'

const App = () => {
  const [data,setData]=useState({})
  const [country,setCountry] =useState('')

  useEffect( async () => {
   const fetchedData = await fetchData();
   setData(fetchedData)
  },[])

  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    setData(fetchedData)
    setCountry(country)
  }

  return (
    <div className={styles.container} >
      <img className={styles.image} src={coronaImage} alt="COVID19" />
     <Cards data={data} />
     <CountryPicker handleCountryChange={handleCountryChange}  />
     <Chart data={data} country={country} />
     
    </div>
  );

}

export default App;
