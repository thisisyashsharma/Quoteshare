import { Fragment } from "react/cjs/react.production.min";
import classes from "./HighlightedQuote.module.css";
import { RiHandHeartFill } from "react-icons/ri";

const HighlightedQuote = (props) => {
  return (
    <Fragment>
      <div>
        <figure className={classes.quote}>
          <p>{props.text}</p>
          <figcaption
          // style="background-color:red"
          >
            {" "}
            - {props.author} <RiHandHeartFill />{" "}
          </figcaption>
        </figure>
      </div>
    </Fragment>
  );
};

export default HighlightedQuote;
