import React, { useState } from "react";
import Button from "./Button";
import RatingSelect from "./RatingSelect";
import Card from "./shared/Card";

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 9) {
      const newFeedback = {
        text: text,
        rating: rating,
      };
      handleAdd(newFeedback);
      setText("");
    }
  };

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== "" && text.trim().length < 10) {
      setBtnDisabled(true);
      setMsg("Text must be at least 10 characters!");
    } else {
      setBtnDisabled(false);
      setMsg(null);
    }
    setText(e.target.value);
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate your service</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            value={text}
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {msg && <div className="message">{msg}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
