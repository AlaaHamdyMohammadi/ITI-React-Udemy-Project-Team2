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
import { Provider } from "react-redux"
import store from './store/store'
import Business from './pages/Business';
import UdemyProfile from './pages/UdemyProfile/UdemyProfile'
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/udemy-business', element: <Business /> },
      { path: '/udemyProfile', element: <UdemyProfile /> },
      { path: '/teach-on-udemy', element: <TeachOnUdemy /> },
      { path: '/instractor', element: <InstructorPage /> },
      { path: '/cart', element: <CartPage /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <SignUp /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}


export default App;
