import React from "react";
import "./Header.css";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../State/DataLayer";

const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="header">
      <div className="header__left">
        <Search />
        <input
          placeholder="Search for Artisits, Songs, or Albums"
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar src={user && user.images[0] ? user.images[0].url : null} alt={user? user.display_name : "User Avatar"} />
        <h4>{user? user.display_name : null}</h4>
      </div>
    </div>
  );
};

export default Header;
