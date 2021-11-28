import React from 'react';
import {ListItem, ListItemAvatar, ListItemText, Typography, Avatar} from '@mui/material';
import "./styles/Message.css"

export interface MessageInterface {
    id: string
    userName: string;
    text: string;
}

interface MessageProps {
    message: MessageInterface
}

export const Message: React.FC<MessageProps> = ({message}) => {
    let IsRobot = (message.userName === ('робот') || message.userName === ('инструкция от робота'));
    return (
            <ListItem alignItems="flex-start"
                      key={message.id}
                      className={(IsRobot ? "RobotMessage" :  "Message")}
                      sx={{mb: 2, bgcolor: 'success.main'}}
            >
                <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                    primary={message.userName}
                    secondary={
                        <React.Fragment>
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >{new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()}
                            </Typography>
                             - {message.text}
                        </React.Fragment>
                    }
                />
            </ListItem>
    )
}
