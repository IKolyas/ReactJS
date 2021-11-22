import React from 'react';

export interface MessageInterface {
    id: string
    userName: string;
    text: string;
}

interface MessageProps {
    message: MessageInterface
}

export const Message: React.FC<MessageProps> = ({message}) => {
    let messageClass: string = "list-group-item my-2 text-white";
    (message.userName === ('робот') || message.userName === ('инструкция от робота'))? messageClass += " bg-primary" : messageClass += " bg-success";
    return (
        <li key={message.id} className={messageClass}>
            <div className="d-flex justify-content-between">
                <h5 className="mb-1 me-4">{message.userName}</h5>
                <small>{new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}</small>
            </div>
            <p className="mb-1">{message.text}</p>
        </li>
    )
}
