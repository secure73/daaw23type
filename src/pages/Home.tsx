import React, { useState } from 'react'
import DynamicService from '../core/DynamicService'
const Home = () => {
  
  type myPosts ={
    userId: number,
    id: number,
    title: string,
    body: string
  }[]

  const [myData,setMyData] = useState<myPosts>([]);



  const clickHandler = () => {
    
    const vladimirRequest = DynamicService({service:'/posts443'}).then((response) => {
        setMyData(response);
    }).catch((error) => {console.log(error)});
  }
  return (
    <>
    <h1>Home</h1>

    <button onClick={() => {clickHandler()} }>Click me</button>

    <ul>
        {myData && myData.map((item) => {
            return <li key={item.id}>{item.title}</li>
        })}
    </ul>
    
    </>
  )
}

export default Home