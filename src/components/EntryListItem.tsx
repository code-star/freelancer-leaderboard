import React, { FC } from "react";
import { ListItem, Grid } from "@material-ui/core";
import { Entry } from "../useLeaderboard";

interface Props {
  entry: Entry;
}

const EntryListItem: FC<Props> = ({ entry: { name, score } }) => (
  <ListItem>
    <Grid container>
      <Grid item xs>
        {name}
      </Grid>
      <Grid item xs={3}>
        {score}
      </Grid>
    </Grid>
  </ListItem>
);

export default EntryListItem;
