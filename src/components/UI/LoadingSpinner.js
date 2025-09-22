import classes from './LoadingSpinner.module.css';
import { Fragment } from 'react';

const LoadingSpinner = () => {
  return (
  <Fragment>
 <div className={classes.spinner}><div></div><div></div><div></div><div></div></div> 
 
  </Fragment>
  );
}

export default LoadingSpinner;

// <div className={classes.spinner}></div>