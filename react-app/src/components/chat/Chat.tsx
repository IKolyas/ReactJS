import React, { useState, useEffect } from 'react';
import {Form} from "./Form";
import {MessageInterface, Message} from "../Message";
import {List,  Box} from '@mui/material';
import { useParams } from "react-router-dom";
import "../styles/Chat.css"
import {nanoid} from "nanoid";

interface ChatProps {
    chatList: Object
}

export const Chat: React.FC<ChatProps> = ({chatList}) => {
    const [chats, setChats] = useState<Object>(chatList)
    let {chatId} = useParams();
    const addMessage = (message: MessageInterface) => {
        setChats((oldChat) => Object.values(oldChat).map(chat => {
            if (chat.id == chatId) {
                chat.messages = [...chat.messages, message]
            }
            return chat
        }))
    }
    let currentChat = Object.values(chats).find((chat) => chat.id == chatId);

    useEffect(() => {
        let startTextMessage: string = currentChat.messages[currentChat.messages.length - 1].text;
        let isRobot: boolean = startTextMessage.split(' ')[0] === "робот" || startTextMessage.split(',')[0] === "робот";
        if (isRobot) {
            setTimeout(() => {
                const robotMessage: string = `Подождите, ${currentChat.messages[currentChat.messages.length - 1].userName}, я уже ищу ответ на Ваш вопрос ...`
                addMessage({ id:nanoid(), userName: "робот", text: robotMessage})
            }, 3000)
        }
    }, [chats]);


    return (
        <Box className="ChatBox">
            <h1 className="ChatTitle">{currentChat.name}</h1>
            <Form messageAdd={addMessage}/>
            <List sx={{width: '100%'}}>
                {currentChat.messages.map((message: MessageInterface) => <Message key={message.id} message={message}/>)}
            </List>
        </Box>
    )
}

export default Chat;
