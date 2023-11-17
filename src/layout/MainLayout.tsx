import React from 'react'
import Header from './Header'

type MainLayoutProps = {
    children: React.ReactNode
}
const MainLayout = (props:MainLayoutProps) => {
  return (
    <>
     <Header />

    </>
  );
}

export default MainLayout