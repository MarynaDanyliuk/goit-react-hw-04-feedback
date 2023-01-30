import React from 'react';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = optionId => {
    // const key = Object.keys(this.state)[optionId];
    const key = optionId;
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  // handleGood = event => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  //   console.log('Кликнули Good');
  // };

  // handleNeutral = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  //   console.log('Кликнули Neutral');
  // };

  // handleBad = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  //   console.log('Кликнули Bad');
  // };

  countTotalFeedback({ good, neutral, bad }) {
    return Number(good + neutral + bad);
  }

  countPositiveFeedbackPercentage({ good, neutral, bad }) {
    return Number(((good / (good + neutral + bad)) * 100 || 0).toFixed());
    // return positivePercentage;
  }

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: `column`,
          marginLeft: 40,
          fontSize: 20,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback(this.state) > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(this.state)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.state,
                this.countTotalFeedback
              )}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
  }
}

// ___________________________________
/* <FeedbackOptions
            options={{
              onHandleGood: this.handleGood,
              onHandleNeutral: this.handleNeutral,
              onHandleBad: this.handleBad,
            }}
            onLeaveFeedback={{
              onLeaveFeedback: this.onLeaveFeedback,
            }}
          /> */
