import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";
import { BsAlignCenter } from "react-icons/bs";
import { BiGhost } from "react-icons/bi";
import { SiEquinixmetal } from "react-icons/si";
import { GiArmoredBoomerang } from "react-icons/gi";
import { RiAliensFill } from "react-icons/ri";
import { AiFillRobot } from "react-icons/ai";

const QuoteList = (props) => {
  const sortQuotes = (quotes, ascending) => {
    return quotes.sort((quoteA, quoteB) => {
      if (ascending) {
        return quoteA.id > quoteB.id ? 1 : -1;
      } else {
        return quoteA.id < quoteB.id ? 1 : -1;
      }
    });
  };

  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
    // history.push(`${location.pathname}?sort=${(isSortingAscending ? 'desc':'asc')}`)            //alternative
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          <span>Sort {isSortingAscending ? "Descending" : "Ascending"}</span>
          {isSortingAscending ? (
            <BsAlignCenter className={classes.icons} />
          ) : (
            <BsAlignCenter className={classes.icons} />
          )}
        </button>

        <button>
          <span>Personality</span>
          <BiGhost className={classes.icons} />
        </button>
        <button>
          <span>Growth</span>
          <GiArmoredBoomerang className={classes.icons} />
        </button>
        <button>
          <span>Elon Musk</span>
          <RiAliensFill className={classes.icons} />
        </button>
        <button>
          <span>Artificial Intelligence</span>
          <AiFillRobot className={classes.icons} />
        </button>
        <button>
          <span>MetaVerse</span>
          <SiEquinixmetal className={classes.icons} />
        </button>
      </div>
      <hr />

      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
