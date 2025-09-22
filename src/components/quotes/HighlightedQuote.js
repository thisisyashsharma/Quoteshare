import { Fragment } from "react/cjs/react.production.min";
import classes from "./HighlightedQuote.module.css";
import {  RiHandHeartFill } from 'react-icons/ri';

const HighlightedQuote = (props) => {
  return (
    <Fragment>
      <figure className={classes.quote}>
        <p>{props.text}</p>
        <figcaption> - {props.author} <RiHandHeartFill /> </figcaption>
      </figure>
  
    </Fragment>
  );
};

export default HighlightedQuote;
