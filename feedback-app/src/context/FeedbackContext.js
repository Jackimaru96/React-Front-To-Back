import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackToEdit, setFeedbackToEdit] = useState({
    item: {},
    edit: false,
  });

  // Run once when the page loads (empty dep array)
  useEffect(() => {
    fetchFeedbackDB();
  }, []);

  const fetchFeedbackDB = async () => {
    const response = await fetch(
      `http://localhost:5050/feedback?_sort=id&_order=desc`
    );
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
    console.log(newFeedback);
  };

  const editFeedback = (item) => {
    setFeedbackToEdit({
      item,
      edit: true,
    });
  };

  const updateFeedback = (id, updateItem) => {
    setFeedback(feedback.map((item) => (item.id === id ? updateItem : item)));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackToEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
