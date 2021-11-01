// ActionProvider starter code
class ActionProvider {
	constructor(
		createChatBotMessage,
		setStateFunc,
		createClientMessage,
		stateRef,
		createCustomMessage,
		...rest
	) {
		this.createChatBotMessage = createChatBotMessage;
		this.setState = setStateFunc;
		this.createClientMessage = createClientMessage;
		this.stateRef = stateRef;
		this.createCustomMessage = createCustomMessage;
	}

	greet() {
		const greetingMessage = this.createChatBotMessage('Hi, friend. How can I help you?');
		this.updateChatbotState(greetingMessage);
	}

	handleRoadsideList = () => {
		const message = this.createChatBotMessage(
			"Okay, I've got the following resources for you on Roadside Assistance:",
			{
				widget: 'roadsideLinks'
			}
		);

		this.updateChatbotState(message);
	};

	updateChatbotState(message) {
		// NOTE: This function is set in the constructor, and is passed in
		// from the top level Chatbot component. The setState function here
		// actually manipulates the top level state of the Chatbot, so it's
		// important that we make sure that we preserve the previous state.

		this.setState((prevState) => ({
			...prevState,
			messages: [...prevState.messages, message]
		}));
	}
}

export default ActionProvider;
