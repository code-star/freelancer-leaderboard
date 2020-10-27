import React, { FC } from "react";
import {
  ListItem,
  Grid,
  Typography,
  withStyles,
  Theme,
} from "@material-ui/core";
import { Entry } from "../useLeaderboard";

interface Props {
  index: number;
  entry: Entry;
}

const EntryTypography = withStyles((theme: Theme) => ({
  body1: {
    fontWeight: "bold",
    fontFamily: "Vibrocentric-Regular, serif",
  },
  body2: {
    fontFamily: "Vibrocentric-Regular, serif",
    fontSize: "70%",
  },
}))(Typography);

const formatDate = (input: string) => {
  const date = new Date(input);
  const formatted = new Intl.DateTimeFormat("nl-NL", {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(date);
  return formatted;
};

const EntryListItem: FC<Props> = ({ index, entry: { name, date, score } }) => (
  <ListItem>
    <Grid container>
      <Grid item xs={1}>
        {index}
      </Grid>
      <Grid item xs>
        <EntryTypography>{name}</EntryTypography>
        <EntryTypography variant="body2">{formatDate(date)}</EntryTypography>
      </Grid>
      <Grid item xs={3}>
        {score}
      </Grid>
    </Grid>
  </ListItem>
);

export default EntryListItem;
