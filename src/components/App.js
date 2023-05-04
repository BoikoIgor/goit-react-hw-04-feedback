import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   updState = item => {
//     this.setState({ [item]: this.state[item] + 1 });
//   };
//   countTotalFeedback = ({ good, neutral, bad }) => good + neutral + bad;
//   countPositiveFeedbackPercentage = () => {
//     return Math.floor(
//       (this.state.good / this.countTotalFeedback(this.state)) * 100
//     );
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <Layout>
//         <Section title="Please leave us feedback">
//           <FeedbackOptions
//             onLeaveFeedback={this.updState}
//             options={Object.keys(this.state)}
//           />
//         </Section>
//         {this.countPositiveFeedbackPercentage() > 0 ? (
//           <Section title="Statistics">
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback(this.state)}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           </Section>
//         ) : (
//           <Notification message="There is no feedback" />
//         )}
//         <GlobalStyle />
//       </Layout>
//     );
//   }
// }
export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = e => {
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () =>
    Math.floor((good / (good + neutral + bad)) * 100);

  return (
    <Layout>
      <Section title="Please leave us feedback">
        <FeedbackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={Object.keys({ good, neutral, bad })}
        />
      </Section>
      {countPositiveFeedbackPercentage() > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={good + neutral + bad}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
      <GlobalStyle />
    </Layout>
  );
};
