import React, { FC, useEffect, useState } from "react";
import "./App.css";

import { orange } from "@material-ui/core/colors";
import {
  Container,
  Button,
  createMuiTheme,
  ThemeProvider,
  CardHeader,
  Card,
  CardContent,
  List,
  ListItem,
  Paper,
  Grid,
} from "@material-ui/core";
import ErrorCard from "./components/ErrorCard";

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
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      // TODO fix CORS
      try {
        const response = await fetch(
          // "http://localhost:9009/?get=https://u3jbutkvth.execute-api.eu-west-1.amazonaws.com/prod/scores?seed=4"
          "https://u3jbutkvth.execute-api.eu-west-1.amazonaws.com/prod/scores?seed=4"
        ).then((data) => data.json());

        // TODO update every n seconds
        if (response.length > 0) {
          setEntries(response);
        } else {
          setErrorMessage("Could not update leaderboard");
        }
      } catch (err) {
        setErrorMessage("Could not update leaderboard" + err.toString());
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
          style={{ height: "100%" }}
        >
          <Grid item>
            <Card>
              <CardHeader title="Freelancer Leaderboard" />
              <CardContent>
                <List>{entryListItems}</List>
              </CardContent>
            </Card>
          </Grid>
          {errorMessage && (
            <Grid item>
              <ErrorCard errorMessage={errorMessage} />
            </Grid>
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
