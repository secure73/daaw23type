import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

type MainLayoutProps = {
    children: React.ReactNode
}
const MainLayout = (props:MainLayoutProps) => {
  return (
    <Fragment>
     <Header />
      {props.children}
      <Footer/>
    </Fragment>
  );
}

export default MainLayout;
