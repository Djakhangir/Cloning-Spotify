import React, { useEffect, useState } from "react";
import LoginPage from "./Components/LoginPage/LoginPage";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import { DataLayer, useDataLayerValue } from "./State/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  console.log(useDataLayerValue())
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      console.log("[token]", token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then((playlist) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: playlist,
        });
      });
    }
  }, []);

  return (
    <div className="App">
      {/* <DataLayer initialState={initialState} reducer={reducer}> */}
      {token ? <Player spotify={spotify} />:<LoginPage />}
      {/* </DataLayer> */}
    </div>
  );
}

export default App;