import { useRef, useState, Fragment } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";
import { HiPencilAlt } from "react-icons/hi";
import { FaUserEdit } from "react-icons/fa";
import { BsTextParagraph } from "react-icons/bs";

const QuoteForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    const isValidAuthor = /\w/.test(enteredAuthor);
    const isValidText = /\w/.test(enteredText);

    if (!isValidAuthor || !isValidText) {
      alert("Please enter an author and your thoughts!");
    }
    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
    authorInputRef.current.value = "";
    textInputRef.current.value = "";

    alert("Astra submitted");
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };
  const formFocusHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sured you want to leave? All entered data will be lost"
        }
      />

      <h2 className={classes.headingH2}>New Quote</h2>
      <Card>
        <form
          onFocus={formFocusHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
          autoComplete="off"
        >
          {props.isLoading && (
            <div className={classes.loading}>
              {" "}
              <LoadingSpinner />{" "}
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">
              Author <FaUserEdit />{" "}
            </label>
            <input type="text" id="author" required ref={authorInputRef} />
          </div>

          <div className={classes.control}>
            <label htmlFor="text">
              Astra/Quote <BsTextParagraph />{" "}
            </label>
            <textarea id="text" rows="5" required ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Quote <HiPencilAlt />
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
