import './Chat.css';

export default function Chat(props) {
    return (
        <div className="main-container">
            <h1>{props.title}</h1>
            <div className="chat-container">
                <div className="chat">
                    <div className="chat-message">
                        <div className="chat-message-content">
                            <p>Hi</p>
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="chat-message-content">
                            <p>How are you?</p>
                        </div>
                    </div>
                    <div className="chat-message">
                        <div className="chat-message-content">
                            <p>Good, you?</p>
                        </div>
                    </div>
                </div>
                <div className="chat-input">
                    <input type="text" placeholder="Type your message here..." />
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}