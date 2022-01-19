import React from 'react';
import classes from './MainHeader.module.css';
// import Navigation from './NavigationConsumer';
import Navigation from './NavigationHook';


const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
