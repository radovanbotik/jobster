import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

export const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={hero} alt="hero image" />
        <h3>Oh No! Are you lost?</h3>
        <p>Let's escort you back to safety.</p>
        <Link to="/">return to front page</Link>
      </div>
    </Wrapper>
  );
};
