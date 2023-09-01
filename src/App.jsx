/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <p className="text-center font-semibold text-red-600">Hello Tailwind</p>
      <p className="text-primary text-center">Hello Bootstrap</p>
    </>
  );
}

export default App;
