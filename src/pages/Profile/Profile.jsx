import { NavLink, Outlet } from 'react-router-dom';
import './Profile.css';
function Profile() {
  return (
    <div>
      <div className="container">
        <h3
          className="fw-bold fs-2 mt-5 pt-4"
          style={{ fontFamily: 'Georgia, Times New Roman, Times, serif' }}
        >
          Profile & settings
        </h3>
      </div>
      <div className="container border-b-2 p-2">
        <NavLink
          className="fw-bold test pb-2.5 text-gray-500"
          style={{ textDecoration: 'none' }}
          to="/profile"
        >
          Udamy profile
        </NavLink>
        <NavLink
          className="fw-bold test ml-2 pb-2.5 text-gray-500"
          style={{ textDecoration: 'none' }}
          to="/profile/profile-picture"
        >
          Profile picture
        </NavLink>
        <NavLink
          className="fw-bold test  ml-2 pb-2.5 text-gray-500"
          style={{ textDecoration: 'none' }}
          to="/profile/privacy-setting"
        >
          Privacy setting
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Profile;
