import React, { useState, useEffect } from "react";
import { GoogleLogout } from "react-google-login";
import "./LandingPage.css";
import { getDatApiNinjas } from "../../network-requests";

function LandingPage({ profile, clientId, logOut }) {
  console.log(profile);
  const [quote, setQuote] = useState();
  useEffect(() => {
    // grab random quote for user
    getDatApiNinjas().then((res) => {
      console.log(res);
      setQuote(res[0].quote);
    });
    // load gapi client for API
  }, []);

  const firstName = profile.full_name.split(" ")[0];

  return (
    <div className="container">
      
          <div className="member">
            {/* make client username show up in welcome */}
            <h1 className= "Welcome">  Welcome {firstName}  </h1>
            <h3 className="quotes">"{quote} "</h3>
          </div>
          <div className="googleInfo">
            <p>Google Log In goes to Navbar</p>
            <img
              className="profilePic"
              src={profile.img}
              alt="user pic"
              referrerPolicy="no-referrer"
            />
            {/* <h3>Welcome {profile.givenName}</h3> */}
            <p>{profile.full_name}</p>
            {/* <p>{profile.email}</p> */}
            
            <GoogleLogout
              clientId={clientId}
              buttonText="Log out"
              onLogoutSuccess={logOut}
            />
             </div>
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
