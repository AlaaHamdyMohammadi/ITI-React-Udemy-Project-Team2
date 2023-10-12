/* eslint-disable no-unused-vars */
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { useSelector } from 'react-redux';


function AppLayout() {
  const nav = useSelector((state) => state.nav.navbar);
  const Bar = useSelector((state) => state.ScrollBar.ScrollBar);
  //const language = useSelector(state => state.language.language);

  // console.log(nav);
  return (
    <div>
      {nav && !Bar ? <Header /> : ''}
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;

/*



*/
