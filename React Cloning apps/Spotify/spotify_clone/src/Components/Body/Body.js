import React from "react";
import "./Body.css";
import Header from "../Header/Header";
import { useDataLayerValue } from "../../State/DataLayer";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "../SongRow/SongRow";

const Body = ({ spotify }) => {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly);
  
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly && discover_weekly.img[0] ? discover_weekly.img[0].url : null} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly? discover_weekly.description : null}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {discover_weekly? discover_weekly.tracks.items.map((item) => (
          <SongRow track={item.track} />
        )) : null }
      </div>
    </div>
  );
};

export default Body;
