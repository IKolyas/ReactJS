export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId:number, message:string) => ({
    type: ADD_MESSAGE,
    chatId,
    message,
});
