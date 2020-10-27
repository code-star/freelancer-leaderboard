import React, { FC } from "react";
import { ListItem, Grid } from "@material-ui/core";
import { Entry } from "../useLeaderboard";

interface Props {
  index: number;
  entry: Entry;
}

const EntryListItem: FC<Props> = ({ index, entry: { name, score } }) => (
  <ListItem>
    <Grid container>
      <Grid item xs={1}>
        {index}
      </Grid>
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
