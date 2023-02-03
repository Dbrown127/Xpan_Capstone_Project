import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";

import Profile from "./components/Profile";

import EventBus from "./common/EventBus";
import BoardAuditor from "./components/BoardAuditor";
import BoardEmployer from "./components/BoardEmployer";
import BoardReviewer from "./components/BoardReviewer";
import BoardApplicant from "./components/BoardApplicant";

const App = () => {
  const [showApplicantBoard, setshowApplicantBoard] = useState(false);
  const [showReviewerBoard, setshowReviewerBoard] = useState(false);
  const [showEmployerBoard, setshowEmployerBoard] = useState(false);
  const [showAuditorBoard, setshowAuditorBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setshowApplicantBoard(user.roles.includes("ROLE_APPLICANT"));
      setshowReviewerBoard(user.roles.includes("ROLE_REVIEWER"));
      setshowEmployerBoard(user.roles.includes("ROLE_EMPLOYER"));
      setshowAuditorBoard(user.roles.includes("ROLE_AUDITOR"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setshowApplicantBoard(false);
    setshowReviewerBoard(false);
    setshowEmployerBoard(false);
    setshowAuditorBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
         ADP
        </Link>
        <div className="navbar-nav mr-auto">
          {/* <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li> */}

          {showApplicantBoard && (
            <li className="nav-item">
              <Link to={"/applicant"} className="nav-link">
                Applicant Dashboard
              </Link>
            </li>
          )}

          {showReviewerBoard && (
            <li className="nav-item">
              <Link to={"/reviewer"} className="nav-link">
                Reviewer Dashboard
              </Link>
            </li>
          )}

          {showEmployerBoard && (
            <li className="nav-item">
              <Link to={"/employer"} className="nav-link">
                Employer Dashboard
              </Link>
            </li>
          )}

          {showAuditorBoard && (
            <li className="nav-item">
              <Link to={"/auditor"} className="nav-link">
                Auditor Dashboard
              </Link>
            </li>
          )}

          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Register
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/home" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/applicant" element={<BoardApplicant />} />
          <Route path="/reviewer" element={<BoardReviewer />} />
          <Route path="/employer" element={<BoardEmployer />} />
          <Route path="/auditor" element={<BoardAuditor/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
