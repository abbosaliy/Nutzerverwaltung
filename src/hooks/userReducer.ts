export type User = {
  id: number;
  name: string;
  birthDate: string;
  gender: string;
  email: string;
  post: string;
  phone: string;
  webseite: string;
};

export type userState = User[];

export type userAction =
  | { type: 'ADD'; payload: User }
  | {
      type: 'REMOVE';
      payload: number;
    }
  | { type: 'EDIT'; payload: User };

export function clickerUser(prevState: userState, action: userAction) {
  switch (action.type) {
    case 'ADD':
      return [...prevState, action.payload];

    case 'EDIT':
      return prevState.map((users) =>
        users.id === action.payload.id ? action.payload : users
      );

    case 'REMOVE':
      return prevState.filter((user) => user.id !== action.payload);

    default:
      return prevState;
  }
}
