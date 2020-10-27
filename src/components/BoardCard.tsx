import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Theme,
  withStyles,
} from "@material-ui/core";

const StyledCard = withStyles(() => ({
  root: {
    backgroundColor: "transparent",
  },
}))(Card);

const StyledCardHeader = withStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    textAlign: "center"
  },
}))(CardHeader);

const StyledCardContent = withStyles(() => ({
  root: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
}))(CardContent);

const BoardCard: FC = ({ children }) => {
  return (
    <StyledCard>
      <StyledCardHeader title="Freelancer Leaderboard" />
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  );
};

export default BoardCard;
