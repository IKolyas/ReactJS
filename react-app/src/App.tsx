import React, {useEffect, useState, } from 'react';
import './App.css';
import {Form} from "./components/Form";
import {MessageInterface, Message} from "./components/Message";
import {nanoid} from "nanoid";
import {List, Container, Box, IconButton, ListItem, ListItemText} from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';


function App() {
    const robotStartText: string = 'Привет ЧЕЛОВЕК! Я робот этого чата. Если хочешь о чём то спросить, просто обратись ко мне "робот, вопрос ..."'

    const [messages, setMessage] = useState<Array<MessageInterface>>([{ id:nanoid(), userName: 'инструкция от робота', text: robotStartText}])

    const addMessage = (message: MessageInterface) => {
        setMessage(messages => [...messages, message])
    }

    useEffect(() => {
        let startTextMessage: string = messages[messages.length - 1].text;
        let isRobot: boolean = startTextMessage.split(' ')[0] === "робот" || startTextMessage.split(',')[0] === "робот";
        if (isRobot) {
            setTimeout(() => {
                const robotMessage: string = `Подождите, ${messages[messages.length - 1].userName}, я уже ищу ответ на Ваш вопрос ...`
                setMessage(messages => [...messages, { id:nanoid(), userName: "робот", text: robotMessage}])
            }, 3000)
        }
    }, [messages]);
    return (
    <Container sx={{ display: "flex" }}>
        <Box sx={{ width: "30%", bgcolor: 'success.main' }}>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'success.main' }}>
                {[1, 2, 3].map((value) => (
                    <ListItem
                        key={value}
                        disableGutters
                        secondaryAction={
                            <IconButton>
                                <CommentIcon />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={`Чат № ${value}`} />
                    </ListItem>
                ))}
            </List>
        </Box>
        <Box sx={{ width: "70%", backgroundColor: 'primary.dark'}}>
            <div className="App">
                <List sx={{ width: '100%', bgcolor: 'success.main' }}>
                    {messages.map(message => <Message key={message.id} message={message}/>)}
                </List>
                <Form messageAdd={addMessage} messages={messages}/>
            </div>
        </Box>
    </Container>
  );
}

export default App;
