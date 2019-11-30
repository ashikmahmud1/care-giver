import React from "react";
import { Button, Grid } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

import "./caregiverDetails.css";

const CaregiverDetails = () => {
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
              <Grid>
                <p>Gender: Male</p>
                <p>Location: Toronto</p>
              </Grid>
              <Grid>
                <p>Horly Wage: $15</p>
                <p>Experience: 3.5 years</p>
              </Grid>
              <Grid>
                <p>Skills: Bla, Bla, Bla</p>
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="secondary"
              href="#contained-buttons"
              spacing={3}
            >
              Hire Now
            </Button>
            <Button
              variant="contained"
              color="secondary"
              href="#contained-buttons"
              spacing={3}
            >
              Setup an Interview
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CaregiverDetails;
