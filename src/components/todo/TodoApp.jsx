import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import withNavigation from "./WithNavigation";
import withParams from "./withParams";
import AuthenticatedRoute from "./AuthenticatedRoutes";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import WelcomeComponent from "./WelcomeComponent";
import LogoutComponent from "./LogoutComponent";
import TodoComponent from "./TodoComponent";

class TodoApp extends Component {
  render() {
    const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
    const LoginComponentWithNavigation = withNavigation(LoginComponent);
    const ListTodosComponentWithNavigation = withNavigation(ListTodosComponent);
    const TodoComponentWithParamsandNavigation = withParams(
      withNavigation(TodoComponent)
    );
    const WelcomeComponentWithParams = withParams(WelcomeComponent);
    return (
      <div className="TodoApp container">
        <Router>
          <HeaderComponentWithNavigation />
          <Routes>
            <Route path="/" exact element={<LoginComponentWithNavigation />} />
            <Route path="/login" element={<LoginComponentWithNavigation />} />
            <Route
              path="/welcome/:name"
              element={
                <AuthenticatedRoute>
                  <WelcomeComponentWithParams />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos/:id"
              element={
                <AuthenticatedRoute>
                  <TodoComponentWithParamsandNavigation />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/todos"
              element={
                <AuthenticatedRoute>
                  <ListTodosComponentWithNavigation />
                </AuthenticatedRoute>
              }
            />
            <Route
              path="/logout"
              element={
                <AuthenticatedRoute>
                  <LogoutComponent />
                </AuthenticatedRoute>
              }
            />
            <Route path="/*" element={<ErrorComponent />} />
          </Routes>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>An Error Occured.</div>;
}

export default TodoApp;
