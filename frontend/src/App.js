import {Routes, Route} from 'react';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Journal from './components/Journal/Journal';
// import Calendar from './components/Calendar/Calendar';
// import LandingPage from './components/LandingPage/LandingPage';
import { Routes, Route } from "react-router-dom";
import { getAllFromTable } from "./components/networkRequests";
import React, { useEffect, useState } from "react";
import LandingPage from "./components/LandingPage/LandingPage";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

function App() {
  const [journal, setJournal] = useState([]);
  const refreshData = () => {
    getAllFromTable("journals").then((res) => setJournal(res));
  };
  useEffect(() => {
    refreshData();
  }, []);
  console.log(journal);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
    // try to load user from local storage
    const loadedProfile = JSON.parse(localStorage.getItem("profile"));
    if (loadedProfile?.ttl > Date.now()) setProfile(loadedProfile);
  }, []);

  const [profile, setProfile] = useState(null);
  const clientId =
    "978546420366-2jbvrmamn5c4su29p12a35j25p9uo477.apps.googleusercontent.com";

  const onSuccess = async (res) => {
    // fetch user from our database
    const data = {
      email: res.profileObj.email,
      full_name: res.profileObj.name,
      img: res.profileObj.imageUrl,
    };

    const profile = await fetch("http://localhost:3030/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
    // how long to be logged in
    profile.ttl = Date.now() + 1000 * 60 * 60 * 24 * 21;
    setProfile(profile);
    console.log("profile", profile, "thisIsLogin");
    localStorage.setItem("profile", JSON.stringify(profile));
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  const logOut = () => {
    setProfile(null);
    localStorage.removeItem("profile");
  };

  return (
    <div className="App">
      {!profile ? (
        <>
          <div className="intro">
            <div className="content_container">
              <h1> Me Myself & I </h1>
              <h2 className="slogan">
                {" "}
                A mental health home you never knew you needed
              </h2>
            </div>
          </div>

          <GoogleLogin
            clientId={clientId}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            // isSignedIn={true}
            auto_select={true}
            // useOneTap
          />
        </>
      ) : (
        <Routes>
          <Route
            path="/"
            exact
            element={
              <LandingPage
                profile={profile}
                clientId={clientId}
                logOut={logOut}
              />
            }
          />
          <Route
            path="/journal"
            exact
            element={<Journal profile={profile} />}
          />
          <Route path="/calendar" exact element={<h1>Calendar</h1>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
