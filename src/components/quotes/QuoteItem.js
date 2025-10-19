import { Link } from "react-router-dom";
import classes from "./QuoteItem.module.css";
import { FcLike } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const QuoteItem = (props) => {
  const [liked, setLiked] = useState(false);
  const onToggleLiked = () => {
    setLiked((prevLiked) => !prevLiked);
  };

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
          <button className="btn" onClick={onToggleLiked}>
            <FcLike />
            {liked ? "Like" : ""}
          </button>
        </div>
      </li>
    </Link>
  );
};

export default QuoteItem;
