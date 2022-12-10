import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import Journal from './components/Journal/Journal';
import Navbar from './components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import PieChart from './components/PieChart/PieChart.js'
// import Calendar from './components/Calendar/Calendar';
import { getAllFromTable } from "./components/networkRequests";
import React, { useEffect, useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import logo from './components/Navbar/Me Myself & I Logo.gif'

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
            <img id="Logo" src={logo} alt='logo'></img>
              <h2 className="slogan">
                {" "}
                 A mental health app to help members process their emotions. Users can select an emoji 
                 to reflect the emotional state, that they are currently in and have the option to write in the 
                  provided journal. The emoji inputs are then sent to the pie chart where your emoji inputs are stored and displayed 😃

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
        <>
        <Navbar/>
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
          <Route path="/pie-chart" exact element={<PieChart profile={profile}/>} />
        </Routes>
      </>
      )}
    </div>
  );
}

export default App;
