import React, { FC } from "react";
import codestarLogo from "./codestar.svg";

/* TODO logos and links to Ordina and Codestar sites and social media */

const ShareBanner: FC = () => {
  return (
    <img
      alt="Codestar - Passionate programmers. Powered by Ordina"
      src={codestarLogo}
    />
  );
};

export default ShareBanner;
