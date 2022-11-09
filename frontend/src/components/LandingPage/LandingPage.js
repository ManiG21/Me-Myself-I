import { useState, useEffect } from "react";
import "./LandingPage.css";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { getDatApiNinjas } from "../../network-requests";

export default function LandingPage() {
  const [user, setUser] = useState();
  // const [passswordReg, setPasswordReg] = useState('')
  const [quote, setQuote] = useState();
  useEffect(() => {
    getDatApiNinjas().then((res) => {
      console.log(res);
      setQuote(res[0].quote);
    });
  }, []);
  const onLogin = (credentialResponse) => {
    // grab user data from google api
    // grab user email from google api
    // create new user from google data for our api
    setUser({});
    console.log(credentialResponse);
  };
  const onError = () => {
    console.log("Login Failed");
  };

  return (
    <div classname="container">
      {!user ? (
        <>
        <div className="intro">
          <h1> Welcome to Me Myself & I </h1>
          <h2> A mental health home you never knew you needed</h2>
          </div>
          <GoogleOAuthProvider clientId="978546420366-2jbvrmamn5c4su29p12a35j25p9uo477.apps.googleusercontent.com">
            <GoogleLogin
              auto_select={true}
              useOneTap
              onSuccess={onLogin}
              onError={onError}
            />
          </GoogleOAuthProvider>
        </>
      ) : (
        <div className="member">
          {/* make client username show up in welcome */}
          <h1> Welcome "Logged In User"</h1>
          <h3 className="quotes">"{quote}"</h3>
        </div>
      )}
    </div>
  );
}
