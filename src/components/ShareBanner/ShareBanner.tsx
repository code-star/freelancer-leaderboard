import React, { FC } from "react";
import { Typography, Link, Grid } from "@material-ui/core";
import codestarLogo from "./codestar.svg";
import ordinaLogo from "./ordina.svg";
// https://github.com/edent/SuperTinyIcons/
import githubIcon from "./github.svg";
import linkedinIcon from "./linkedin.svg";
import mediumIcon from "./medium.svg";
import meetupIcon from "./meetup.svg";
import youtubeIcon from "./youtube.svg";

const ShareBanner: FC = () => {
  return (
    <div style={{ margin: "1rem" }}>
      {/* <Typography align="center">Made by</Typography>
      <Box component="div" textAlign="center">
        <Link href="https://www.ordina.nl/vakgebieden/scala/">
          <img
            alt="Codestar - Passionate programmers. Powered by Ordina"
            style={{ width: "300px" }}
            src={codestarLogo}
          />
        </Link>
      </Box>
      <Box component="div" textAlign="center">
        <Link href="https://www.ordina.nl/vakgebieden/scala/">
          <img
            alt="Codestar - Passionate programmers. Powered by Ordina"
            style={{ width: "300px" }}
            src={ordinaLogo}
          />
        </Link>
      </Box> */}
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <Typography align="center">Made by</Typography>{" "}
          <Link href="https://www.ordina.nl/vakgebieden/scala/">
            <img
              alt="Codestar - Passionate programmers. Powered by Ordina"
              src={codestarLogo}
            />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Typography align="center">Powered by</Typography>{" "}
          <Link href="https://www.ordina.nl/vakgebieden/scala/">
            <img alt="Ahead of change" src={ordinaLogo} />
          </Link>
        </Grid>
      </Grid>
      {/* TODO fix order, links and alt texts */}
      <Grid container spacing={1} justify="center">
        <Grid item xs={1}>
          <Link href="https://www.ordina.nl/vakgebieden/scala/">
            <img alt="Codestar Github" src={githubIcon} />
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="https://www.ordina.nl/vakgebieden/scala/">
            <img alt="x" src={linkedinIcon} />
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="https://www.ordina.nl/vakgebieden/scala/">
            <img alt="x" src={mediumIcon} />
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="https://www.ordina.nl/vakgebieden/scala/">
            <img alt="x" src={meetupIcon} />
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link href="https://www.ordina.nl/vakgebieden/scala/">
            <img alt="x" src={youtubeIcon} />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default ShareBanner;
