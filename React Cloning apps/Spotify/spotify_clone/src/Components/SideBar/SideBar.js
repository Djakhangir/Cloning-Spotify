import React from "react";
import SideBarOption from "../SideBarOption/SideBarOption";
import "./SideBar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import { LibraryMusic } from "@material-ui/icons";
import { useDataLayerValue } from "././State/DataLayer";

const SideBar = () => {
    const [{playlists}, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify Logo"
      />
      <SideBarOption title="Home" Icon={HomeIcon}/>
      <SideBarOption title="Search" Icon={SearchIcon}/>
      <SideBarOption title="Your Library" Icon={LibraryMusic}/>
      <br/>
      <strong classNem="sidebar__title">PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map((playlist)=> (
        <SideBarOption title={playlist.name}/>
      ))}
    </div>
  );
};

export default SideBar;
