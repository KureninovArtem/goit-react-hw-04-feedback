import { useState, useEffect } from "react";
import Container from './Container/Container';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export default function App() {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const [total, setTotal] = useState(0)
	const [positivePercentage, setPositivePercentage] = useState(0)

	const onLeaveFeedback = (option) => {
		switch (option) {
			case 'good':
				setGood(good + 1);
				break
			case 'neutral':
				setNeutral(neutral + 1);
				break
			case 'bad':
				setBad(bad + 1);
				break
			default:
				return
    }
	}

	useEffect(() => {
		if (good || neutral || bad) {
			setTotal(good + neutral + bad)
			const result = (good / (good + neutral + bad)) * 100
			setPositivePercentage(Number(result.toFixed(0)))
		}
	}, [good, neutral, bad])

    return (
		<Container>
			<Section title="Please leave feedback">
						<FeedbackOptions options={Object.keys({ good, neutral, bad })} onLeaveFeedback={onLeaveFeedback} />
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
