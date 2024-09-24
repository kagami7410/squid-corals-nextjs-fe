// /lib/token.js
let storedToken = null;

export const setToken = (token) => {
  storedToken = token;
};

export const getToken = () => storedToken;