import React from "react";
import "./Question.css";

const Question = () => {
  return (
    <div className="question-container">
      <h1 className="question-title">Question Part</h1>
      <div className="question-part">
        <div>
          <h2>How React Works?</h2>
          <p>
            React is a JavaScript-based UI development library.React offers some
            outstanding features that make it the most widely adopted library
            for frontend app development.React is more popular because of the
            virtual dom which helps React.Vartual dom is a lightweight copy of
            React's real dom.When an object's state changes, Virtual DOM updates
            only that object in the real DOM rather than all of them.
          </p>
        </div>
        <div className="right-part">
          <img
            className="question-img"
            src="https://dejanvasic.files.wordpress.com/2020/06/react-img.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="question-part part-2">
        <div>
          <img
            className="question-img"
            src="https://www.techdiagonal.com/wp-content/uploads/2019/09/react-props-blog-image-design-2.jpg"
            alt=""
          />
        </div>
        <div className="right-part">
          <h2>How React State Works?</h2>
          <p>
            A state is an object that stores properties values for those
            attributed to a component that could change over some time. A state
            can be updated to event handlers, server responses, or prop changes.
            This is done using setState method.setState() method enqueues all
            the updates made to the component state and instructs React to
            re-render the component and its children with the updated state.
            setState() is used to alter the state object's value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Question;
