import React, {useEffect, useState, } from 'react';
import './App.css';
import {Form} from "./components/Form";
import {MessageInterface, Message} from "./components/Message";
import {nanoid} from "nanoid";


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
    <div className="App">
      <header className="App-header container">
          <Form messageAdd={addMessage} messages={messages}/>
              <ul className="list-group d-flex flex-column align-items-end p-5 w-100" id="message-list">
                  {messages.map(message => <Message key={message.id} message={message}/>)}
              </ul>
      </header>
    </div>
  );
}

export default App;
