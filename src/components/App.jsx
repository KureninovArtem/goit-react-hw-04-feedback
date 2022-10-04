import { Component } from 'react';
import Container from './Container/Container';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export default class App extends Component {
  state = {
		good: 0,
		neutral: 0,
		bad: 0
  };
  
  countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    if (!result) {
            return 0;
        }
		const { good } = this.state;
		const percentage = (good / result) * 100;
		return Number(percentage.toFixed(0));
	};
  
  onLeaveFeedback = (e) => {
		const name = e.target.name;
		this.setState((prevState) => ({
			[name]: prevState[name] + 1
		}));
	};

  render() {
    const { good, neutral, bad } = this.state;
		const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
    const objKey = Object.keys(this.state);
    return (
      <Container>
        <Section title="Please leave feedback">
					<FeedbackOptions options={objKey} onLeaveFeedback={this.onLeaveFeedback} />
        </Section>
        
        {total === 0 ? (
					<Notification message="No feedback given" />
				) : (
					<Section title="Statistics">
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={total}
							positivePercentage={positivePercentage}
						/>
					</Section>
				)}
      </Container>
    );
  }
}
