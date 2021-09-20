import React, { Fragment, useEffect } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import auth from '../auth/auth';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';

const Navbar = () => {
  let history = useHistory();
  const logout = () => {
    auth.logout();
    history.push('/');
  };
  const links = (
    <Fragment>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/wizard">Wizard</NavLink>
      </li>
      {auth.isAutenticated() ? (
        <Fragment>
          <li>
            <NavLink to="#" className="nav-link" onClick={logout}>
              Logout
            </NavLink>
          </li>
        </Fragment>
      ) : (
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </Fragment>
  );
  useEffect(() => {
    let sidenav = document.querySelector('#slide-out');
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <Fragment>
      <nav className="nav-wrapper red darken-3">
        <div className="container">
          <NavLink to="/" className="brand-logo">Publicis</NavLink>
          <a href="#" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {links}
          </ul>
        </div>
      </nav>
      <ul id="slide-out" className="sidenav">
        {links}
      </ul>
    </Fragment>
  );
};

export default withRouter(Navbar);
