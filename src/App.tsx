import React, {useEffect, useState} from 'react';
import TalkJSChatbox from "./components/TalkJSChatbox";
import './App.css';

function App() {

    const [showChat, setShowChat] = useState<boolean>(false);



    const toggleChatButton = () => {
        console.log(showChat);
        setShowChat(!showChat);
    };


    const conversationId = "1234";
    const currentUserId = "1996";
    const currentUser = {
        id: currentUserId,
        name: "Sebastian",
        email: "test@test.com",
        photoUrl: "https://example.com/john-doe.jpg",
        welcomeMessage: "Hi there! How can I help you?",
    };
    const otherUser = {
        id: "1999",
        name: "example",
        email: "example@example.com",
        photoUrl: "https://example.com/jane-doe.jpg",
    };


    return (
        <div className="App">
            <TalkJSChatbox
                conversationId={conversationId}
                currentUserId={currentUserId}
                currentUser={currentUser}
                otherUser={otherUser}
            />
        </div>
    );
}

export default App;
