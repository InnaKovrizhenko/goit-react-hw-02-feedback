import React, {Component} from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = () => {
    const state = this.state;
    return state.good + state.neutral + state.bad;
  }

  countPositiveFeedbackPercentage = () => {
    const state = this.state;
    const result = state.good * 100 / this.countTotalFeedback();
    return result.toFixed(2);
  }

  onIncrement = (el) => {
    this.setState(prevState => {
      return {
        [el] : prevState[el] + 1,
      }
    })
  }

render () {
  const state = this.state;
  return (
    <>
  <Section title="Please leave feedback">
    <FeedbackOptions
      options = {['good', 'neutral', 'bad']}
      onLeaveFeedback={this.onIncrement}
    />
  </Section>
  <Section title="Statistics">
    {this.countTotalFeedback() > 0 ? (
      <Statistics
      good = {state.good}
      neutral = {state.neutral}
      bad = {state.bad}
      total = {this.countTotalFeedback()}
      positivePersentage={this.countPositiveFeedbackPercentage()}
      /> ) : (
        <Notification message = "There is no feedback"/>
      )}
  </Section>
  </>
  );
}
}