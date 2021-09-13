import React from 'react';
import styled  from 'styled-components';
import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons';
import ChatInput from './ChatInput';
import {useSelector} from 'react-redux';
import { selectRoomId } from '../features/appSlice';
function Chat() {
    const roomId = useSelector(selectRoomId);

    return (
        <ChatContainer>
            <Header>
                <HeaderStart>
                    <h4>
                        <strong>
                            #Room-name
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
            </ChatMessages>

            {/* Adding a Chat input */}
            <ChatInput 
                // channel Name
                channelId={roomId}
            ></ChatInput>
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
        text-transform: lowercase;
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