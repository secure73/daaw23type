import React, { Fragment } from 'react'
import Header from './Header'

type MainLayoutProps = {
    children: React.ReactNode
}
const MainLayout = (props:MainLayoutProps) => {
  return (
    <Fragment>
     <Header />
      {props.children}
    </Fragment>
  );
}

export default MainLayout