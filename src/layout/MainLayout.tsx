<<<<<<< HEAD
import React from 'react';
import Footer from './Footer';

const MainLayout = () => {
  return <div>MainLayout</div>;
};
=======
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
>>>>>>> 76c5bcf43eab5225fe87f9076660e4d0a7b34ca3

export default MainLayout;
