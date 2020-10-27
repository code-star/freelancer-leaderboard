import React, { FC } from "react";
import "./App.css";

import {
  Container,
  ThemeProvider,
  List,
  Grid,
} from "@material-ui/core";
import ErrorCard from "./components/ErrorCard";
import BoardCard from "./components/BoardCard";
import useLeaderboard from "./useLeaderboard";

import theme from "./theme";
import EntryListItem from "./components/EntryListItem";

const App: FC = () => {
  const { entries, error } = useLeaderboard();

  const entryListItems = entries.map((entry) => (
    <EntryListItem key={entry.name} entry={entry} />
  ));

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" style={{ height: "100%" }}>
        <Grid
          container
          direction="column"
          justify="center"
          spacing={4}
          style={{ height: "100%", margin: 0 }}
        >
          <Grid item>
            <BoardCard>
              <List>{entryListItems}</List>
            </BoardCard>
          </Grid>
          {error && (
            <Grid item>
              <ErrorCard
                errorMessage={error.errorMessage}
                technicalMessage={error.technicalMessage}
              />
            </Grid>
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
