import {Box, IconButton, List, ListItem, ListItemText} from "@mui/material";
import CommentIcon from "@mui/icons-material/Comment";
import React from "react";
import {Link} from "react-router-dom";
import "./styles/ChatList.css"

interface ChatListProps {
    list: object
}

export const ChatList: React.FC<ChatListProps> = ({list}) => {
    return <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: '100vh' }}>
        <List sx={{ width: '100%', maxWidth: 360 }}>
            {Object.values(list).map((value) => (
                <Link  className="ChatList"  to={`/chat/${value.id}`}>
                    <ListItem
                        key={value.id}
                        disableGutters
                        secondaryAction={
                            <IconButton>
                                <CommentIcon className="ChatMessageIcon" />
                            </IconButton>
                        }
                    >
                        <ListItemText primary={`${value.name}`} />
                    </ListItem>
                </Link>

            ))}
        </List>
    </Box>
}

