import React, { useContext } from "react";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  let averageRating =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  averageRating = averageRating.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
};

export default FeedbackStats;
