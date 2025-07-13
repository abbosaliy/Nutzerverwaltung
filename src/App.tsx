import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.scss';
import CreateUser from './routes/createUser/createUsers';
import UserPages from './routes/userPages/usersPages';
import { UserContext, userLoadLocalStorage } from './context/userContext';
import { userReducer } from './hooks/userReducer';
import { useEffect, useReducer } from 'react';
import UserEdit from './routes/userEdit/usersEdit';
import Index from './routes/Index/Index';
import Route from './routes/route';

function App() {
  const [user, setUser] = useReducer(userReducer, userLoadLocalStorage);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(user));
  }, [user]);

  const router = createBrowserRouter([
    {
      path: '/Nutzerverwaltung',
      element: <Route />,
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
