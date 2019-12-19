import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import CheckBoxSharpIcon from "@material-ui/icons/CheckBoxSharp";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function CaregiverSkills() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    medicalSupervision: false,
    personalAssistanceBathingDressing: false,
    rNRPNSupervisedCare: false,
    specializeInPerkinsonDementia: false,
    specializeInAlzheimer: false,
    homeIndividualSafetyAssesment: false,
    lightHousekeeping: false,
    escortingToAppointmentsOrShoping: false,
    joyfulCompanionship: false,
    palliativeCare: false,
    liveInOutCare: false,
    retirementHomecare: false,
    nutritionalCounseling: false
  });

  const {
    medicalSupervision,
    personalAssistanceBathingDressing,
    rNRPNSupervisedCare,
    specializeInPerkinsonDementia,
    specializeInAlzheimer,
    homeIndividualSafetyAssesment,
    lightHousekeeping,
    escortingToAppointmentsOrShopin,
    joyfulCompanionship,
    palliativeCare,
    liveInOutCare,
    retirementHomecare,
    nutritionalCounseling
  } = state;

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Typography component="h1" variant="h5">
        Choose all the Skills you have
      </Typography>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">
            <CheckBoxSharpIcon /> Check all that apply
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={medicalSupervision}
                  onChange={handleChange("medicalSupervision")}
                  value="medicalSupervision"
                />
              }
              label="Medical Supervision"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={personalAssistanceBathingDressing}
                  onChange={handleChange("personalAssistanceBathingDressing")}
                  value="personalAssistanceBathingDressing"
                />
              }
              label="Personal assistance, bathing, dressing"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={rNRPNSupervisedCare}
                  onChange={handleChange("rNRPNSupervisedCare")}
                  value="rNRPNSupervisedCare"
                />
              }
              label="RN/RPN Supervised Care"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={specializeInPerkinsonDementia}
                  onChange={handleChange("specializeInPerkinsonDementia")}
                  value="specializeInPerkinsonDementia"
                />
              }
              label="Specialize in Perkinson/Dementia"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={specializeInAlzheimer}
                  onChange={handleChange("specializeInAlzheimer")}
                  value="specializeInAlzheimer"
                />
              }
              label="Specialize in Alzheimer's"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={homeIndividualSafetyAssesment}
                  onChange={handleChange("homeIndividualSafetyAssesment")}
                  value="homeIndividualSafetyAssesment"
                />
              }
              label="Home/Individual Safety Assesment"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={lightHousekeeping}
                  onChange={handleChange("lightHousekeeping")}
                  value="lightHousekeeping"
                />
              }
              label="Light Housekeeping"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={escortingToAppointmentsOrShopin}
                  onChange={handleChange("escortingToAppointmentsOrShopin")}
                  value="escortingToAppointmentsOrShopin"
                />
              }
              label="Escorting to Appointments, or Shoping"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={joyfulCompanionship}
                  onChange={handleChange("joyfulCompanionship")}
                  value="joyfulCompanionship"
                />
              }
              label="Joyful Companionship"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={palliativeCare}
                  onChange={handleChange("palliativeCare")}
                  value="palliativeCare"
                />
              }
              label="Palliative Care"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={liveInOutCare}
                  onChange={handleChange("liveInOutCare")}
                  value="liveInOutCare"
                />
              }
              label="Live in/out to 24 hour Care"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={retirementHomecare}
                  onChange={handleChange("retirementHomecare")}
                  value="retirementHomecare"
                />
              }
              label="Retirement Homecare"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={nutritionalCounseling}
                  onChange={handleChange("nutritionalCounseling")}
                  value="nutritionalCounseling"
                />
              }
              label="Nutritional Counseling"
            />
          </FormGroup>
        </FormControl>
      </div>
    </Container>
  );
}
