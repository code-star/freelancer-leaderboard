import React, { FC, useEffect, useState } from "react";
import "./App.css";

import { orange } from "@material-ui/core/colors";
import {
  Container,
  createMuiTheme,
  ThemeProvider,
  List,
  ListItem,
  Grid,
  Box,
} from "@material-ui/core";
import ErrorCard from "./components/ErrorCard";
import BoardCard from "./components/BoardCard";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: orange,
  },
});

interface Entry {
  name: string;
  score: number;
  date: string;
  seed: number;
}

const App: FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [error, setError] = useState<
    { errorMessage: string; technicalMessage?: string } | undefined
  >();

  useEffect(() => {
    async function fetchData() {
      // TODO fix CORS
      try {
        const response = await fetch(
          "http://localhost:9009/?get=https://u3jbutkvth.execute-api.eu-west-1.amazonaws.com/prod/scores?seed=4"
          // "https://u3jbutkvth.execute-api.eu-west-1.amazonaws.com/prod/scores?seed=4"
        ).then((data) => data.json());

        // TODO update every n seconds
        if (response.length > 0) {
          setEntries(response);
        } else {
          setError({ errorMessage: "Could not update leaderboard" });
        }
      } catch (err) {
        setError({
          errorMessage: "Could not update leaderboard",
          technicalMessage: err.toString(),
        });
      }
    }
    fetchData();
  }, []);

  const entryListItems = entries.map(({ name, score }) => (
    <ListItem key={name}>
      <Grid container>
        <Grid item xs>
          {name}
        </Grid>
        <Grid item xs>
          {score}
        </Grid>
      </Grid>
    </ListItem>
  ));

  return (
    <ThemeProvider theme={darkTheme}>
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
