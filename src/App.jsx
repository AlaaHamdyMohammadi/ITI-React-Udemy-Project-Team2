/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import CartPage from './pages/CartPage';
import InstructorPage from './pages/InstructorPage';
import TeachOnUdemy from './pages/TeachOnUdemy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '/teach-on-udemy', element: <TeachOnUdemy /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/instractor', element: <InstructorPage /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}


export default App;
