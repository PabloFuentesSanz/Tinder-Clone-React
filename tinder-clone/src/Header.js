import React from "react";
import { Link, useHistory} from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import ChatIcon from "@material-ui/icons/Chat";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import IconButton from "@material-ui/core/IconButton";
import "./styles/Header.css";

function Header({ back }) {
  const history = useHistory();
  return (
    <div className="headerContainer">
      {back ? (
        <Link to={back}>
          <IconButton onClick={()=> history.replace(back)}>
            <ArrowBackIos fontSize="large" className="headerIcon" />
          </IconButton>
        </Link>
      ) : (
        <Link to="/profile">
          <IconButton>
            <SettingsIcon fontSize="large" className="headerIcon" />
          </IconButton>
        </Link>
      )}
      <Link to="/">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo-2012-2017.png"
          className="imgHeader"
          alt="tinderLogo"
        />
      </Link>

      <Link to="/chat">
        <IconButton>
          <ChatIcon fontSize="large" className="headerIcon" />
        </IconButton>
      </Link>
    </div>
  );
}

export default Header;
