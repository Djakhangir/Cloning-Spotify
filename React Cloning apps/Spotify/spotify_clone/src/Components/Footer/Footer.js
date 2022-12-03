import React from "react";
import "./Footer.css";
import {
  PlayCircleOutline,
  SkipPrevious,
  SkipNext,
  PlaylistPlay,
  Shuffle,
  Repeat,
  VolumeDown,
} from "@material-ui/icons";
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          src="https://i.pinimg.com/originals/8d/c7/52/8dc752834195102e4cb630a53221255e.jpg"
          alt=""
          className="footer__albumLogo"
        />
        <div className="footer__songInfo">
          <h4>My fav song</h4>
          <p>Atharva</p>
        </div>
      </div>
      <div classNmae="footer__center">
        <Shuffle className="footer__green" />
        <SkipPrevious className="footer__icon" />
        <PlayCircleOutline className="footer__icon" fontSize="large" />
        <SkipNext className="footer__icon" />
        <Repeat className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay />
          </Grid>
          <Grid item>
            <VolumeDown />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
