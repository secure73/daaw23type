import React from 'react'
import DynamicService from '../core/DynamicService'
const Home = () => {
  

  const clickHandler = () => {
    
    const vladimirRequest = DynamicService({service:'index'}).then((response) => {
      console.log(response);
    }).catch((error) => {console.log(error)});
  }
  return (
    <>
    <h1>Home</h1>

    <button onClick={() => {clickHandler()} }>Click me</button>
    
    </>
  )
}

export default Home