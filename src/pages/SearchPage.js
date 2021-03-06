import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import response from "../response";
import "../style/SearchPage.css";
import useGoogleSearch from "../useGoogleSearch";
import Search from "../components/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import AvatarImg from "../img/avatar.jpg";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // Live API Call
  const { data } = useGoogleSearch(term);

  // Mock API Call
  // const data = response;

  console.log(data);

  useEffect(() => {
    document.title = term + " - Google";
  }, []);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link className="searchPage__logoA" to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
          />
        </Link>

        <div className="searchPage__headerBody">
          <Search hideButtons />

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <span className="HF9Klc iJddsb nav-icon">
                  <svg
                    className="searchPage__optionsIcons"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#34a853"
                      d="M10 2v2a6 6 0 0 1 6 6h2a8 8 0 0 0-8-8"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="M10 4V2a8 8 0 0 0-8 8h2c0-3.3 2.7-6 6-6"
                    ></path>
                    <path
                      fill="#fbbc04"
                      d="M4 10H2a8 8 0 0 0 8 8v-2c-3.3 0-6-2.69-6-6"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="M22 20.59l-5.69-5.69A7.96 7.96 0 0 0 18 10h-2a6 6 0 0 1-6 6v2c1.85 0 3.52-.64 4.88-1.68l5.69 5.69L22 20.59"
                    ></path>
                  </svg>
                </span>
                <Link to="/all">All</Link>
              </div>
              <div className="searchPage__option">
                <span className="HF9Klc iJddsb nav-icon">
                  <svg
                    className="searchPage__optionsIcons"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 13l4 5H6l4-4 1.79 1.78L14 13zm-6.01-2.99A2 2 0 0 0 8 6a2 2 0 0 0-.01 4.01zM22 5v14a3 3 0 0 1-3 2.99H5c-1.64 0-3-1.36-3-3V5c0-1.64 1.36-3 3-3h14c1.65 0 3 1.36 3 3zm-2.01 0a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7v-.01h7a1 1 0 0 0 1-1V5"></path>
                  </svg>
                </span>
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage__option">
                <span className="nav-icon">
                  <svg
                    className="searchPage__optionsIcons"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 16.5l6-4.5-6-4.5v9zM5 20h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm14.5 2H5a3 3 0 0 1-3-3V4.4A2.4 2.4 0 0 1 4.4 2h15.2A2.4 2.4 0 0 1 22 4.4v15.1a2.5 2.5 0 0 1-2.5 2.5"></path>
                  </svg>
                </span>
                <Link to="/videos">Videos</Link>
              </div>
              <div className="searchPage__option">
                <span className="nav-icon">
                  <svg
                    className="searchPage__optionsIcons"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 11h6v2h-6v-2zm-6 6h12v-2H6v2zm0-4h4V7H6v6zm16-7.22v12.44c0 1.54-1.34 2.78-3 2.78H5c-1.64 0-3-1.25-3-2.78V5.78C2 4.26 3.36 3 5 3h14c1.64 0 3 1.25 3 2.78zM19.99 12V5.78c0-.42-.46-.78-1-.78H5c-.54 0-1 .36-1 .78v12.44c0 .42.46.78 1 .78h14c.54 0 1-.36 1-.78V12zM12 9h6V7h-6v2"></path>
                  </svg>
                </span>
                <Link to="/news">News</Link>
              </div>

              <div className="searchPage__option">
                <span className="more-vert  SaPW2b nav-icon">
                  <svg
                    className="searchPage__optionsIcons"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                  </svg>
                </span>
                <Link to="/more">More</Link>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="searchPage__headerRight">
          <AppsIcon className="AppsIcon" />
          <Avatar src={AvatarImg} className="Avatar" />
        </div>
      </div>

      {term && (
        <div className="searchPage__results">
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds)
          </p>

          {data?.items.map((item) => (
            <div className="searchPage__result">
              <a className="searchPage__resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink} <ArrowDropDownIcon />
              </a>
              <a href={item.link} className="searchPage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage__resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
