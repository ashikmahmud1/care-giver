import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Tooltip, Fab, Container } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: 370,
    minWidth: 120
  }
}));

const EducationInputs = props => {
  const classes2 = useStyles();

  const {
    educations,
    classes,
    addEducationHandler,
    educationInputHandler
  } = props;
  return educations.map((val, index) => {
    return (
      <Container component="main" maxWidth="xs">
        <Grid item>
          <div style={{ display: 'inline-flex' }}>
            <div>
              <TextField
                variant="outlined"
                fullWidth
                className={classes2.formControl}
                id="educations"
                label="Degree, School Name"
                name="educations"
                value={val.name}
                autoComplete="educations"
                onChange={evt => educationInputHandler(index, evt.target.value)}
              />
              <small>
                Click the (+) button if educational history is more to add
              </small>
            </div>
            <div style={{ alignSelf: 'right' }}>
              <Tooltip
                title="Add more"
                aria-label="add"
                onClick={() => addEducationHandler()}
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

export default EducationInputs;
