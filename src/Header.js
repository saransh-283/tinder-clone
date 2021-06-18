import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon className="header_icon" />
      </IconButton>

      <img
        src="https://img.pngio.com/tinder-logo-vector-images-icon-sign-and-symbols-tinder-logo-png-253_300.png"
        alt="Logo"
        className="header_logo"
      />

      <IconButton>
        <ForumIcon className="header_icon"></ForumIcon>
      </IconButton>
    </div>
  );
}

export default Header;
