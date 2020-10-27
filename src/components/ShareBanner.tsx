import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import codestarLogo from "./codestar.svg";

/* TODO logos and links to Ordina and Codestar sites and social media */
// https://github.com/edent/SuperTinyIcons/
const ShareBanner: FC = () => {
  return (
    <>
      <Typography align="center">Made by</Typography>
      <img
        alt="Codestar - Passionate programmers. Powered by Ordina"
        style={{ width: "300px" }}
        src={codestarLogo}
      />
      <Typography>OrdinaCodestar Github Youtube Meetup Linkedin</Typography>
    </>
  );
};

export default ShareBanner;
