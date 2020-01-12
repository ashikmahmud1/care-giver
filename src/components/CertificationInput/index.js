import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: 370,
    minWidth: 120
  }
}));

const CertificationInputs = props => {
  const classes2 = useStyles();

  const {
    certifications,
    classes,
    addCertificationHandler,
    certificationInputHandler
  } = props;
  return certifications.map((val, index) => {
    return (
      <Container component="main" maxWidth="xs">
        <Grid item>
          <div style={{ display: 'inline-flex' }}>
            <div>
              <TextField
                variant="outlined"
                fullWidth
                className={classes2.formControl}
                id="certificates"
                label="Certification, Institution Name"
                name="certificates"
                value={val.name}
                autoComplete="certificates"
                onChange={evt =>
                  certificationInputHandler(index, evt.target.value)
                }
              />
              <small>
                Click the (+) button if certification history is more to add
              </small>
            </div>
            <div style={{ alignSelf: 'right' }}>
              <Tooltip
                title="Add more"
                aria-label="add"
                onClick={() => addCertificationHandler()}
              >
                <Fab size="small" color="secondary" className={classes.fab}>
                  <AddIcon />
                </Fab>
              </Tooltip>
            </div>
            {/* Here display a remove button only if there is more than one item */}
          </div>
        </Grid>
      </Container>
    );
  });
};

export default CertificationInputs;
