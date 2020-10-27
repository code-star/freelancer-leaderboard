import React, { FC } from "react";
import "./App.css";

import {
  Container,
  ThemeProvider,
  List,
  Grid,
  Typography,
  Link,
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
          spacing={4}
          style={{ height: "100%", margin: 0 }}
          wrap="nowrap"
        >
          {error && (
            <Grid item>
              <ErrorCard
                errorMessage={error.errorMessage}
                technicalMessage={error.technicalMessage}
              />
            </Grid>
          )}
          <Grid item>
            <BoardCard>
              <Typography>
                Try out the Freelancer challenge and see your high score here.{" "}
                <Link href="./Freelancer.pdf">More info in this PDF</Link>.
              </Typography>
              {/* TODO logos and links to Ordina and Codestar sites and social media */}
              <List>{entryListItems}</List>
            </BoardCard>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
