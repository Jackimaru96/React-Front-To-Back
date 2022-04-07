import React, { useState } from "react";
import Card from "./shared/Card";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  return (
    <Card>
      <h2>Rate your service</h2>
      {/* TODO: rating select component  */}
      <div className="input-group">
        <input
          onChange={handleTextChange}
          type="text"
          value={text}
          placeholder="Write a review"
        />
        <button type="submit">Send</button>
      </div>
    </Card>
  );
};

export default FeedbackForm;
