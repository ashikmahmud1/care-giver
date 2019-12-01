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
  m: 1,
  border: 1,
  style: { width: "22rem", height: "22rem" }
};

const CaregiverList = () => {
  const [value, setValue] = React.useState(4);

  return (
    <Box display="flex" justifyContent="absolute">
      <Box
        borderRadius="borderRadius"
        {...defaultProps}
        borderColor="secondary.main"
      >
        <Grid className="img-round">
          <img src={require("../../../img/man.jpg")} />
        </Grid>
        <Grid className="caregiver-name">
          <Typography variant="h5">Madman Sadman</Typography>

          <Rating name="read-only" value={value} readOnly />
          <VerifiedUserIcon color="lightseagreen" fontSize="large" />
          <Grid className="">
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
    </Box>
  );
};

export default CaregiverList;
