import { Link } from "react-router-dom";
import classes from "./QuoteItem.module.css";
import { FcLike } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";

const QuoteItem = (props) => {
  return (
    <Link to={`/quotes/${props.id}`} className="bottonLink">
      <li className={classes.item}>
        <figure>
          <blockquote>
            <p>{props.text}</p>
          </blockquote>
          <FaUserCircle />
          <figcaption>{props.author}</figcaption>
        </figure>
        <div>
          <FcLike />
        </div>
      </li>
    </Link>
  );
};

export default QuoteItem;
