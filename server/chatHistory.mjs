const chatHistory = [];
export const LIMIT = 50;

const addMessage = (user, message,  email) => {
  const isMax = chatHistory.length === LIMIT;

  if (isMax) {
    chatHistory.pop();
  }

  chatHistory.push({
    user,
    message,
    createdAt: new Date().toDateString(),
    id: Date.now(),
    email
  });
};

export { addMessage, chatHistory };
