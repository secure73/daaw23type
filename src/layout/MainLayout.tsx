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
     <div className='m-5 h-[screen]'>
      {props.children}
     </div>
      <Footer/>
    </Fragment>
  );
}

export default MainLayout;
