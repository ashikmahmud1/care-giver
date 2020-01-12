import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';

import CertificationInput from '../../CertificationInput';
import EducationInput from '../../EducationInput';

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2)
  },
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(1, 1)
  }
}));

function CaregiverEduAndCertification() {
  const classes = useStyles();

  const [certifications, setCertifications] = React.useState([{ name: '' }]);
  const [educations, setEducations] = React.useState([{ name: '' }]);

  //Professional Certifications History adding
  const addCertificationHandler = () => {
    setCertifications(oldCertifications => [
      ...oldCertifications,
      { name: '' }
    ]);
  };
  const certificationInputHandler = (index, value) => {
    let newCertifications = [...certifications];
    newCertifications[index].name = value;
    setCertifications(newCertifications);
  };

  //Educational History adding
  const addEducationHandler = () => {
    setEducations(oldEducations => [...oldEducations, { name: '' }]);
  };
  const educationInputHandler = (index, value) => {
    let newEducations = [...educations];
    newEducations[index].name = value;
    setCertifications(newEducations);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Add your Professional Certification History
        </Typography>
        <form className={classes.form} noValidate>
          <CertificationInput
            classes={classes}
            certifications={certifications}
            addCertificationHandler={addCertificationHandler}
            certificationInputHandler={certificationInputHandler}
          />
        </form>
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add your Educational History
          </Typography>
          <form className={classes.form} noValidate>
            <EducationInput
              classes={classes}
              educations={educations}
              addEducationHandler={addEducationHandler}
              educationInputHandler={educationInputHandler}
            />
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CaregiverEduAndCertification;
