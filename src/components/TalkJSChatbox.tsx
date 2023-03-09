import {FunctionComponent, useEffect, useRef} from "react";
import Talk from "talkjs";

type Props = {
    conversationId: string;
    currentUserId: string;
    currentUser: {
        id: string;
        name: string;
        email: string;
        photoUrl: string;
        welcomeMessage: string;
    };
    otherUser: {
        id: string;
        name: string;
        email: string;
        photoUrl: string;
    };
};

const TalkJSChatbox: FunctionComponent<Props> = ({
                                            conversationId,
                                            currentUserId,
                                            currentUser,
                                            otherUser,
                                        }) => {
    const chatboxRef = useRef<HTMLDivElement>(null);



    useEffect(() => {
        const talkSession = new Talk.Session({
            appId: "tXejufRs",
            me: new Talk.User({
                id: currentUserId,
                name: currentUser.name,
                email: currentUser.email,
                photoUrl: currentUser.photoUrl,
                welcomeMessage: currentUser.welcomeMessage,
            }),
        });

        const conversation = talkSession.getOrCreateConversation(conversationId);
        conversation.setParticipant(new Talk.User({
            id: otherUser.id,
            name: otherUser.name,
            email: otherUser.email,
            photoUrl: otherUser.photoUrl,
        }));

        const chatbox = talkSession.createChatbox(conversation);
        chatbox.mount(chatboxRef.current as HTMLDivElement);

        return () => {
            chatbox.destroy();
        };
    }, [conversationId, currentUserId, currentUser, otherUser]);

    return (

        <div ref={chatboxRef} style={{ height: "550px", width:"360px" }}>
            {/* Placeholder for the chatbox */}
        </div>



    );
};

export default TalkJSChatbox;