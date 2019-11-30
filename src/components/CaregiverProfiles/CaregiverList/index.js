import React from "react";
import { Button, Grid } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

import "./caregiverList.css";

const CaregiverList = () => {
  const [value, setValue] = React.useState(4);

  return (
    <Grid className="caregiver-list">
      <Grid className="caregiver-list-item">
        <Grid className="content">
          <Grid>
            <Grid className="img-round">
              <img src={require("../../../img/man.jpg")} />
            </Grid>
            <Grid className="caregiver-name">
              <Typography variant="h5">Madman Sadman</Typography>

              <Rating name="read-only" value={value} readOnly />
              <VerifiedUserIcon
                color="lightseagreen"
                fontSize="large"
                spacing={3}
              />
              <Button
                variant="contained"
                color="secondary"
                href="/caregiver-profile/id"
                spacing={3}
              >
                View Full Profile
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CaregiverList;
