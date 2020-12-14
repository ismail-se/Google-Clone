import "../style/Home.css";
import React from "react";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "../components/Search";
import AvatarImg from "../img/avatar.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
          <a href="https://mail.google.com/mail/">Gmail</a>
          <Link to="/images">Images</Link>
          <AppsIcon className="AppsIcon" />
          <Avatar src={AvatarImg} className="Avatar" />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="Google"
        />
        <div className="home__inputContainer">
          <Search />
        </div>
      </div>
      <footer className="home__footer">
        <div className="home__footerLine">
          <div className="country">Pakistan</div>
        </div>
        <div className="home__footerLine">
          <div className="left">
            <ul>
              <li>Advertising</li>
              <li>Business</li>
              <li>About</li>
              <li>How Search Words</li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>Privecy</li>
              <li>Terms</li>
              <li>Settings</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
