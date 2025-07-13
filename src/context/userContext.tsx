import React, { createContext } from 'react';
import type { userAction, userState } from '../hooks/userReducer';

export const userLoadLocalStorage: userState = JSON.parse(
  localStorage.getItem('users') || '[]'
);

export const UserContext = createContext<{
  user: userState;
  setUser: React.Dispatch<userAction>;
}>({
  user: [],
  setUser: () => {},
});
