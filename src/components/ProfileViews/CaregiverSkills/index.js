import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckBoxSharpIcon from '@material-ui/icons/CheckBoxSharp';
import {
  CssBaseline,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Container,
  FormLabel
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

function CaregiverSkills() {
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
    nutritionalCounseling: false,
    transportationFacility: false
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
    nutritionalCounseling,
    transportationFacility
  } = state;

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component={'div'} variant="h5">
          Choose all the Skills you have
        </Typography>
        <div className={classes.root}>
          <FormControl className={classes.formControl}>
            <FormLabel component="legend">
              <CheckBoxSharpIcon /> Check all that apply
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={medicalSupervision}
                    onChange={handleChange('medicalSupervision')}
                    value="medicalSupervision"
                  />
                }
                label="Medical Supervision"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={personalAssistanceBathingDressing}
                    onChange={handleChange('personalAssistanceBathingDressing')}
                    value="personalAssistanceBathingDressing"
                  />
                }
                label="Personal assistance, bathing, dressing"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={rNRPNSupervisedCare}
                    onChange={handleChange('rNRPNSupervisedCare')}
                    value="rNRPNSupervisedCare"
                  />
                }
                label="RN/RPN Supervised Care"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={specializeInPerkinsonDementia}
                    onChange={handleChange('specializeInPerkinsonDementia')}
                    value="specializeInPerkinsonDementia"
                  />
                }
                label="Specialize in Perkinson/Dementia"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={specializeInAlzheimer}
                    onChange={handleChange('specializeInAlzheimer')}
                    value="specializeInAlzheimer"
                  />
                }
                label="Specialize in Alzheimer's"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={homeIndividualSafetyAssesment}
                    onChange={handleChange('homeIndividualSafetyAssesment')}
                    value="homeIndividualSafetyAssesment"
                  />
                }
                label="Home/Individual Safety Assesment"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={lightHousekeeping}
                    onChange={handleChange('lightHousekeeping')}
                    value="lightHousekeeping"
                  />
                }
                label="Light Housekeeping"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={escortingToAppointmentsOrShopin}
                    onChange={handleChange('escortingToAppointmentsOrShopin')}
                    value="escortingToAppointmentsOrShopin"
                  />
                }
                label="Escorting to Appointments, or Shoping"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={joyfulCompanionship}
                    onChange={handleChange('joyfulCompanionship')}
                    value="joyfulCompanionship"
                  />
                }
                label="Joyful Companionship"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={palliativeCare}
                    onChange={handleChange('palliativeCare')}
                    value="palliativeCare"
                  />
                }
                label="Palliative Care"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={liveInOutCare}
                    onChange={handleChange('liveInOutCare')}
                    value="liveInOutCare"
                  />
                }
                label="Live in/out to 24 hour Care"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={retirementHomecare}
                    onChange={handleChange('retirementHomecare')}
                    value="retirementHomecare"
                  />
                }
                label="Retirement Homecare"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={nutritionalCounseling}
                    onChange={handleChange('nutritionalCounseling')}
                    value="nutritionalCounseling"
                  />
                }
                label="Nutritional Counseling"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={transportationFacility}
                    onChange={handleChange('transportationFacility')}
                    value="transportationFacility"
                  />
                }
                label="Transportation Facility"
              />
            </FormGroup>
          </FormControl>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default CaregiverSkills;
