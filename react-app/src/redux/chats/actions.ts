export const ADD_CHAT = "CHATS::ADD_CHAT";

export const addChat = (name:string) => ({
    type: ADD_CHAT,
    name,
});
