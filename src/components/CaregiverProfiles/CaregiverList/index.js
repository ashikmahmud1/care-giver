import React from "react";
import { Button, Grid } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./caregiverList.css";

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 2,
  border: 1,
  align: "center",
  style: { width: "22rem", height: "22rem" }
};

const CaregiverList = () => {
  const [value, setValue] = React.useState(4);

  return (
    <Box
      borderRadius="borderRadius"
      {...defaultProps}
      borderColor="grey.300"
      boxShadow={3}
    >
      <Grid className="img-round">
        <img src={require("../../../img/man.jpg")} alt="DP" />
      </Grid>
      <Grid className="caregiver-name">
        <Typography variant="h5">Madman Sadman</Typography>
        <span>Gender: Male,</span> <span>Location: Toronto</span>
        <Grid>
          <Rating name="read-only" value={value} readOnly />
          <VerifiedUserIcon color="secondary" fontSize="large" />
        </Grid>
        <Grid>
          <Button
            variant="contained"
            color="secondary"
            href="/caregiver-profile/id"
          >
            View Full Profile
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CaregiverList;
