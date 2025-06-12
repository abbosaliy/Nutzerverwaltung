import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import Sidebar from './routes/route';
import CreateUser from './routes/createUser/createUsers';
import UserPages from './routes/userPages/userpages';
import { UserContext, userSaveToLocalStorage } from './context/userContex';
import { clickerUser } from './hooks/userReducer';
import { useEffect, useReducer } from 'react';
import UserEdit from './routes/userEdit/usersEdit';
import Index from './routes/Index/Index';

function App() {
  const [user, setUser] = useReducer(clickerUser, userSaveToLocalStorage);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(user));
  }, [user]);

  const router = createBrowserRouter([
    {
      path: '/Nutzerverwaltung',
      element: <Sidebar />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: 'users',
          element: <UserPages />,
        },

        {
          path: 'users/edit/:itemID',
          element: <UserEdit />,
        },
        {
          path: 'user',
          element: <CreateUser />,
        },
      ],
    },
  ]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router}></RouterProvider>
    </UserContext.Provider>
  );
}

export default App;
