import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Logout from "@material-ui/icons/ExitToApp";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useHistory } from "react-router";

function Header() {
  const [{ user }, dispatch] = useStateValue();
  const history = useHistory();
  const signOut = () => {
    auth.signOut();
    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    });
    history.push("/");
  };
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <Logout onClick={signOut} />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon />
        <input placeholder="Search Developer" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
