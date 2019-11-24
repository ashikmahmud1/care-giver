import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import Steppers from "../../../components/Steppers/index";
import CaregiverPersonalDetails from "../../../components/ProfileViews/CaregiverPersonalDetails/index";
import CaregiverEduAndCerification from "../../../components/ProfileViews/CaregiverEduAndCertification/index";
import CaregiverSkills from "../../../components/ProfileViews/CaregiverSkills/index";

export default function ProfileCaregiver() {
  return (
    <div>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ height: "10vh" }} />
        <Steppers />
        <CaregiverPersonalDetails />
        <CaregiverSkills />
        <CaregiverEduAndCerification />
      </Container>
    </div>
  );
}
