import React from "react";

import {
  GoogleLogin
} from "@react-oauth/google";

const GoogleLoginButton = () => {

  return (

    <GoogleLogin

      onSuccess={(credentialResponse) => {

        console.log(
          credentialResponse
        );

        alert(
          "Google Login Success"
        );

      }}

      onError={() => {

        alert(
          "Google Login Failed"
        );

      }}

    />

  );
};

export default GoogleLoginButton;