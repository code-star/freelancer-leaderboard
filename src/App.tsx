import React, { FC } from "react";
import "./App.css";
import {
  Container,
  ThemeProvider,
  List,
  Grid,
  Typography,
  Link, LinearProgress
} from "@material-ui/core";
import ErrorCard from "./components/ErrorCard";
import BoardCard from "./components/BoardCard";
import useLeaderboard from "./useLeaderboard";
import theme from "./theme";
import EntryListItem from "./components/EntryListItem";
import EntryListHeader from "./components/EntryListHeader";
import ShareBanner from "./components/ShareBanner/ShareBanner";

const App: FC = () => {
  const { entries, isLoading, error } = useLeaderboard();

  const entryListItems = entries.map((entry, index) => (
    <EntryListItem key={entry.name} index={index + 1} entry={entry} />
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
              <ShareBanner />
              {isLoading ? <LinearProgress title="Loading new high scores..." /> : <div style={{ height: "4px"}} />}
              <List>
                <EntryListHeader />
                {entryListItems}
              </List>
            </BoardCard>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
