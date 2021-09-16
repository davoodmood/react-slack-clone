import React from 'react'
import styled from 'styled-components'

interface props {
    message: string;
    timestamp: number | string;
    user: string;
    userImage: string;
}

function Message({message, timestamp, user, userImage}: props) {
    // console.log("Timestamp: ", new Date(timestamp.nanoseconds))
    // const timestampNano = timestamp[`nanoseconds`]
    return (
        <MessageContainer>
            <img src={userImage} alt={message}/>
            <MessageInfo>
                <h4>
                    {user}{``}
                    <span>
                        {timestamp && timestamp}
                    </span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div`
display: flex;
align-items: center;
padding: 20px;

> img{
    height: 50px;
    border-radius: 8px;
    margin-right: 10px;
}
`

const MessageInfo = styled.div`
padding: 0 0 0 10px;

> h4 > span {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
}
`
