import React, { useState, useEffect } from "react";
import "./App.css";
import LoginPage from "./Components/LoginPage/LoginPage";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./State/DataLayer";
import Player from "./Components/Player/Player";

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token} , dispatch] = useDataLayerValue();

  //useEffect is used to make sure that this part of the code is rendered only once page is loaded
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    //checking if user is logged in
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token:_token
      })
      spotify.setAccessToken(_token)
      // setToken(_token);
      spotify.getMe().then((user)=> {
        dispatch({
          type: "SET_USER",
          user
        })
    })
    spotify.getUserPlaylists().then((playlists)=> {
      dispatch({
        type: "SET_PLAYLISTS",
        playlists
      })
    })
    spotify.getPlaylist('37i9dQZF1E34Ucml4HHx1w').then((playlist)=> {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
      })
    })
    }
  }, []);

  return (
    <div className="App"> 
    {token ? <Player spotify={spotify} /> : <LoginPage/>}
    </div>
  );
}

export default App;
