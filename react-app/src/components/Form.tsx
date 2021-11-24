import React, {useState} from 'react';
import "./Form.css"
import {nanoid} from "nanoid";
import {Button, Stack, TextField} from '@mui/material';

interface Props {
    messages: Array<any>;
    messageAdd: (messages: any) => void
}

export const Form: React.FC<Props> = ({messageAdd, messages}) => {
    const [userName, setUserName] = useState<string | undefined>('')
    const [message, setMessage] = useState<string | undefined>('')
    const handleSubmit = (event: any) => {
        messageAdd({ id:nanoid(), userName: userName, text: message});
        setUserName('');
        setMessage('');
        event.preventDefault();
    }

    const addMessage = (event: any) => {
        setMessage(event.target.value );
    }

    const addUserName = (event: any) => {
        setUserName(event.target.value);
    }

    return (
        <Stack
            className="Form_inputs"
            component="form"
            sx={{
                width: '100%',
                justifyContent: 'center'
            }}
            spacing={2}
            noValidate
            autoComplete="off"
            bgcolor="background.primary"
            direction="row"
        >
            <TextField
                className="TextField"
                autoFocus
                color="warning"
                label="Имя"
                id="filled-hidden-label-small"
                variant="filled"
                size="small"
                value={userName}
                onChange={addUserName}
                sx={{
                    width: '15%'
                }}
            />
            <TextField
                label="Сообщение"
                id="filled-hidden-label-small"
                variant="filled"
                size="small"
                value={message}
                onChange={addMessage}
                sx={{
                    width: '50%',
                }}
            />
            <Button variant="contained"
                    color="success"
                    onClick={handleSubmit}
                    sx={{
                        width: '25%',
                    }}
            >Отправить</Button>
        </Stack>

    )
};

