import { Button } from '@material-ui/core';
import React from 'react'
import styled  from 'styled-components';

interface props {
    channelName?: string|null;
    channelId?: string|null;
};

function ChatInput({channelName, channelId}: props) {
    const sendMessage = (e: any) => {
        e.preventDefault();
        console.log("Sent Message: ", e)

    }

    return (
        <ChatInputContainer>
            <form>
                <input type="text" placeholder={`Message #Room`}/>
                <Button hidden type="submit" onClick={sendMessage}>
                    Send
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 15px;

    > form {
        position: relative;
        display: flex;
        justify-content: center;
        /* align-items: flex-end; */
    }

    > form > input {
        position: fixed;
        bottom: 30px;
        width: 60%;
        border: 1px solid gray;
        border-radius: 3px;
        padding:20px;
        outline: none;
    }

    > form > button {
        display: none !important;
    }
`
