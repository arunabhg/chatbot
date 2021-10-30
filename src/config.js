// Config starter code
import { createChatBotMessage } from 'react-chatbot-kit';

import LearningOptions from './components/Options/Options';
import LinkList from './components/LinkList/LinkList';

const botName = 'Axle';

const config = {
	initialMessages: [
		createChatBotMessage(`Hi! I'm ${botName}. How can I help you?`, { widget: 'learningOptions' })
	],
	botName: botName,
	customStyles: {
		botMessageBox: {
			backgroundColor: '#376B7E'
		},
		chatButton: {
			backgroundColor: '#376B7E'
		}
	},
	widgets: [
		{
			widgetName: 'learningOptions',
			widgetFunc: (props) => <LearningOptions {...props} />
		},
		{
			widgetName: 'roadsideLinks',
			widgetFunc: (props) => <LinkList {...props} />,
			props: {
				options: [
					{
						text: 'Vehicle Towing',
						url: '#',
						id: 1
					},
					{
						text: 'Engine Breakdown',
						url: '#',
						id: 2
					},
					{
						text: 'Petrol Requirement',
						url: '#',
						id: 3
					}
				]
			}
		}
	]
};

export default config;
