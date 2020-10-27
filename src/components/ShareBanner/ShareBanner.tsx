import React, { FC } from "react";
import { Typography, Link, Grid } from "@material-ui/core";
import codestarLogo from "./codestar.svg";
import ordinaLogo from "./ordina.svg";

/* TODO logos and links to Ordina and Codestar sites and social media */
// https://github.com/edent/SuperTinyIcons/
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
      <Grid container spacing={4} justify="center">
        <Grid item xs={1}>
          <img alt="Ahead of change" src={ordinaLogo} />
        </Grid>
        <Grid item xs={1}>
          <img alt="Ahead of change" src={ordinaLogo} />
        </Grid>
      </Grid>
      <Typography>OrdinaCodestar Github Youtube Meetup Linkedin</Typography>
    </div>
  );
};

export default ShareBanner;
