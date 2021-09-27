import React, {useRef, useEffect} from 'react';
import styled  from 'styled-components';
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import ChatInput from './ChatInput';
import {useSelector} from 'react-redux';
import { selectRoomId } from '../features/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import firebase from 'firebase';
import MessageComponent from './Message';


function Chat() {
    const chatRef= useRef<any>(null);
    const roomId = useSelector(selectRoomId);
    // let roomDetails, roomMessage;
    console.log("Collection of Room IDs here", db.collection("rooms").where(firebase.firestore.FieldPath.documentId(), "==", `${roomId}`));
    // const [roomDetails] = useCollection(db.collection("rooms").where(firebase.firestore.FieldPath.documentId(), "==", `${roomId}`));
    // const [roomMessage] = useCollection(
    //     db.collection("rooms")
    //     .doc(`${roomId}`)
    //     .collection('messages')
    //     .orderBy("timestamp", "asc")
    // );

    // console.log("Room Details: ", roomDetails?.docs[0]._delegate._document.value?.mapValue.fields.name.stringValue);
    // console.log("Room Messages: ", roomMessage);

    const [roomDetails] = useDocument(db.doc(`rooms/${roomId}`));
    const [roomMessages, loading] = useCollection(
        db.collection("rooms")
        .doc(`${roomId}`)
        .collection('messages')
        .orderBy("timestamp", "asc")
    );
    
    useEffect(() => {
        chatRef?.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }, [roomId, loading])

    return (
        <ChatContainer>
            {roomDetails && roomMessages && (
                <>
                    <Header>
                        <HeaderStart>
                            <h4>
                                <strong>
                                {roomDetails?.data()?.name ? ` # ${roomDetails?.data()?.name.toUpperCase()}` : `# Select a room`}
                                </strong>
                                <StarBorderOutlined />
                            </h4>
                        </HeaderStart>
                        <HeaderEnd>
                            <p>
                                <InfoOutlined />
                                Details
                            </p>
                        </HeaderEnd>
                    </Header>
                    <ChatMessages>
                        {/* List out the messages. */}
                        {roomMessages?.docs?.map(doc => {
                        let { message, timestamp, user, userImage } = doc?.data();
                        const options = {  weekday: 'short', month: 'long', day: 'numeric', hour: '2-digit', minutes:'2-digit' };
                        timestamp = timestamp?.toDate().toLocaleTimeString('en-US', options);
                        return (
                            <MessageComponent
                                    key={doc.id}
                                    message={message}
                                    timestamp={timestamp}
                                    user={user}
                                    userImage={userImage}
                                />
                                
                        )
                        })}

                        
                        <ChatBottom ref={chatRef}/>
                    </ChatMessages>
                    

                    {/* Adding a Chat input */}
                    <ChatInput 
                        chatRef={chatRef}
                        channelName={roomDetails?.data()?.name}
                        channelId={roomId}
                    ></ChatInput>
                </>
            )}
        </ChatContainer>
    )
}

export default Chat

const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
`;

const ChatMessages = styled.div`
    /* display: flex; */
    /* justify-content: space-between; */
    /* padding: 20px; */
    /* border-bottom: 1px solid lightgray; */
`
const ChatBottom = styled.div`
    padding-bottom: 200px;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`

const HeaderStart = styled.div`
    display: flex;
    align-items: center;

    > h4 {
        display: flex;
        /* text-transform: lowercase; */
        text-transform: capitalize;
        margin-right: 10px;
    }
    
    > h4 > .MuiSvgIcon-root {
        margin-left: 20px;
        font-size: 22px;
    }
`

const HeaderEnd = styled.div`
    > p {
        display: flex;
        align-items: center;
        font-size: 14px;
        /* padding-left: 5px; */
    } 
    > p > .MuiSvgIcon-root {
        padding: 0 10px;
    }
`