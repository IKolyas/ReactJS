import React from 'react';
import './App.css';
import {Container} from '@mui/material';
import NavTabs from "./components/Navigate";
import {ChatList} from "./components/ChatList";
import Chat from "./components/chat/Chat";
import {Profile} from "./components/profile/Profile";
import {nanoid} from "nanoid";
import {Provider} from "react-redux";
import store from './redux/store'

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

const list: object = {
    0: {
        id: 0,
        name: 'Общий',
        messages: []
    },
    1: {
        id: 1,
        name: 'Тематический',
        messages: []
    },
    2: {
        id: 2,
        name: 'Курилка',
        messages: []
    }
}
const robotStartText: string = 'Привет ЧЕЛОВЕК! Я робот этого чата. Если хочешь о чём то спросить, просто обратись ко мне "робот, вопрос ..."'
Object.values(list).map(chat => chat.messages = [...chat.messages, { id:nanoid(), userName: 'инструкция от робота', text: robotStartText}])
console.log(list)

function App() {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Container>
                    <header style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <nav>
                            <NavTabs/>
                        </nav>
                    </header>
                    <Routes>
                        <Route index element={<ChatList list={list}/>}/>
                        <Route path="chat" element={<Chat chatList={list}/>}>
                            <Route path=":chatId" element={<Chat chatList={list}/>}/>
                        </Route>
                        <Route path="profile" element={<Profile/>}/>
                    </Routes>
                </Container>
            </BrowserRouter>
        </Provider>
    )
}

export default App;
