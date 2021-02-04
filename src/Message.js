import React, {forwardRef, useEffect, useRef} from 'react';
import {Card, CardContent, Typography} from '@material-ui/core';
import './Message.css';

const Message = forwardRef(({message, username, messages}, ref) => {
    const isUser = username === message.username;
    const messagesEndRef = useRef(null);
    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    useEffect(scrollToBottom,[messages]);
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            {!isUser && `${message.username || 'Unknown user'}`}
            <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
                <CardContent>
                    <Typography color="white" variant="h5" component="h2">
                         {message.message}
                        <div ref={messagesEndRef}></div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
