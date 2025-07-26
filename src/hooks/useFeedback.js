import { useReducer } from "react";

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function feedbackReducer(state, action) {
  switch (action.type) {
    case "good":
    case "neutral":
    case "bad":
      return {
        ...state,
        [action.type]: state[action.type] + 1,
      };
    default:
      return state;
  }
}

export function useFeedback() {
  const [feedback, dispatch] = useReducer(feedbackReducer, initialState);

  const handleLeaveFeedback = (type) => {
    dispatch({ type });
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total ? Math.round((feedback.good / total) * 100) : 0;
  };

  return {
    feedback,
    handleLeaveFeedback,
    total: countTotalFeedback(),
    positivePercentage: countPositiveFeedbackPercentage(),
  };
}
