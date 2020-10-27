import React, { FC } from "react";
import { Card, CardContent, Theme, withStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

interface Props {
  errorMessage: string;
}

const StyledCardContent = withStyles((theme: Theme) => ({
    root: {
      backgroundColor: red[500],
    },
  }))(CardContent);
  
const ErrorCard: FC<Props> = ({ errorMessage }) => {
  return (
    <Card>
      <StyledCardContent>{errorMessage}</StyledCardContent>
    </Card>
  );
};

export default ErrorCard;
