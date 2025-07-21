export default function FeedbackOptions ({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => (
        <button className="feedback-button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
          style={{ marginRight: 10 }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
