import React, { Component } from "react";
import AuthService from "./AuthService";
import { Link } from "react-router-dom";

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthService.isUserLoggedIn();
    // console.log(isUserLoggedIn);

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <Link
              className="navbar-brand"
              to={`/welcome/${AuthService.getLoggedInUserName()}`}
            >
              in28minutes
            </Link>
          </div>
          <ul className="navbar-nav">
            {isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to={`/welcome/${AuthService.getLoggedInUserName()}`}
                >
                  Home
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/todos">
                  Todos
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            {!isUserLoggedIn && (
              <li>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  className="nav-link"
                  to="/logout"
                  onClick={AuthService.logout}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;
