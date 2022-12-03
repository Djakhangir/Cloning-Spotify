import React from "react";
import "./LoginPage.css";
import { loginUrl } from "../../spotify";

const LoginPage = () => {
  return (
    <div className="login">
      <img
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify Logo"
      />
      <a href={loginUrl}> LOGIN WITH SPOTIFY </a>
    </div>
  );
};

export default LoginPage;
