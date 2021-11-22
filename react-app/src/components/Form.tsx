import React, {useState} from 'react';
import "./Form.css"
import {nanoid} from "nanoid";


interface Props {
    messages: Array<any>;
    messageAdd: (messages: any) => void
}

export const Form: React.FC<Props> = ({messageAdd, messages}) => {
    const [userName, setUserName] = useState<string>('')
    const [message, setMessage] = useState<string>('')
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
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">User Name</label>
                <input type="text" className="form-control" value={userName} onChange={addUserName}/>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <input type="text" className="form-control" value={message} onChange={addMessage}/>
            </div>
            <button type="submit" className="btn btn-primary" onChange={addMessage}>Submit</button>
        </form>
    )
};

