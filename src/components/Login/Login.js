import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFirebase } from "../../Hooks/useFirebase";

const Login = () => {
  const [errorFireBase, setErrorFireBase] = useState("");
  const { signinUserUsingPassword, signInUsingGoogle } = useFirebase();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/";
  const handleGoogleLogin = () => {
    signInUsingGoogle().then((result) => {
      setErrorFireBase("");
      history.push(redirect_url);
    });
  };

  const googleLogo = <FontAwesomeIcon icon={faGoogle} />;
  return (
    <Container fluid>
      <div className="login-container d-flex justify-content-center align-items-center">
        <div className="">
          <h1 className="display-1 fw-bold">Login with Google to continue</h1>
          <h1
            title="Continue using google"
            onClick={handleGoogleLogin}
            className="display-1 text-danger google-login"
          >
            {googleLogo}
          </h1>
        </div>
      </div>
    </Container>
  );
};

export default Login;
