import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import { useFeedback } from "./hooks/useFeedback";
import "./App.css";

const App = () => {
  const { feedback, handleLeaveFeedback, total, positivePercentage } =
    useFeedback();

  return (
    <div className="App" style={{ padding: "20px" }}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
