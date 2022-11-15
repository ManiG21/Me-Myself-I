import React, { useState, useEffect } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import "./LandingPage.css";
import { getDatApiNinjas } from "../../network-requests";

function LandingPage(props) {
  const [profile, setProfile] = useState(null);
  const clientId =
    "978546420366-2jbvrmamn5c4su29p12a35j25p9uo477.apps.googleusercontent.com";

  const onSuccess = async (res) => {
    // fetch user from our database 
    const data = {
      email: res.profileObj.email,
      full_name: res.profileObj.name,
      img: res.profileObj.imageUrl
    }

    const profile = await fetch("http://localhost:3030/user/login", {
      method: "POST",
      headers: {
          "Content-Type" : "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
    // how long to be logged in
    profile.ttl = Date.now() + 1000 * 60 * 60 * 24 * 21
    setProfile(profile);
    console.log("profile", profile, "thisIsLogin");
    localStorage.setItem("profile", JSON.stringify(profile))
  };

  const onFailure = (err) => {
    console.log("failed", err);
  };

  const logOut = () => {
    setProfile(null);
    localStorage.removeItem("profile")
  };

  const [quote, setQuote] = useState();
  useEffect(() => {
    // grab random qoute for user
    getDatApiNinjas().then((res) => {
      console.log(res);
      setQuote(res[0].quote);
    });
    // load gapi client for API

    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
    // try to load user from local storage
    const loadedProfile = JSON.parse(localStorage.getItem("profile"));
    if (loadedProfile?.ttl > Date.now()) setProfile(loadedProfile)

  }, []);

  return (
    <div className="container">
      <br />
      <br />
      {profile ? (
        <>
          <div className="member">
            {/* make client username show up in welcome */}
            <h1 className="Welcome"> 🎭 Welcome {profile.name} 🎭</h1>
            <h3 className="quotes">"{quote} "</h3>
          </div>
          <div className="googleInfo">
            <img
              className="profilePic"
              src={profile.img}
              alt="user pic"
              referrerPolicy="no-referrer"
            />
            {/* <h3>Welcome {profile.givenName}</h3> */}
            <p>{profile.full_name}</p>
            <p>{profile.email}</p>
            <br />
            <GoogleLogout
              clientId={clientId}
              buttonText="Log out"
              onLogoutSuccess={logOut}
            />
          </div>
        </>
      ) : (
        <>
          <div className="intro">
            <h1 > Welcome to Me Myself & I </h1>
            <h2 className="slogan"> A mental health home you never knew you needed</h2>
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
      )}
    </div>
  );
}
export default LandingPage;

// import { useState, useEffect } from "react";
// import "./LandingPage.css";
// import { GoogleLogin } from "@react-oauth/google";
// import { GoogleOAuthProvider } from "@react-oauth/google";
// import { getDatApiNinjas } from "../../network-requests";

// export default function LandingPage() {
//   const [user, setUser] = useState();
//   // const [passswordReg, setPasswordReg] = useState('')
//   const [quote, setQuote] = useState();
//   useEffect(() => {
//     getDatApiNinjas().then((res) => {
//       console.log(res);
//       setQuote(res[0].quote);
//     });
//   }, []);
//   const onLogin = (credentialResponse) => {
//     // grab user data from google api
//     // grab user email from google api
//     // create new user from google data for our api
//     setUser({});
//     console.log(credentialResponse);
//   };
//   const onError = () => {
//     console.log("Login Failed");
//   };

//   return (
//     <div classname="container">
//       {!user ? (
//         <>
//
//           <GoogleOAuthProvider clientId="978546420366-2jbvrmamn5c4su29p12a35j25p9uo477.apps.googleusercontent.com">
//             <GoogleLogin
//               auto_select={true}
//               useOneTap
//               onSuccess={onLogin}
//               onError={onError}
//             />
//           </GoogleOAuthProvider>
//         </>
//       ) : (
//         <div className="member">
//           {/* make client username show up in welcome */}
//           <h1> Welcome "Logged In User"</h1>
//           <h3 className="quotes">"{quote}"</h3>
//         </div>
//       )}
//     </div>
//   );
// }
