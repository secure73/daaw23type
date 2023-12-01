import React, { useState } from 'react'

const Home = () => {
  
  type myPosts ={
    userId: number,
    id: number,
    title: string,
    body: string
  }[]

  const [myData,setMyData] = useState<myPosts>([]);



  return (
    <>
    <h1>Home</h1>

    <button onClick={() => {} }>Click me</button>

    <ul>
        {myData && myData.map((item) => {
            return <li key={item.id}>{item.title}</li>
        })}
    </ul>
    
    </>
  )
}

export default Home