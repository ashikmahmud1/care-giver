import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  TextField,
  Tooltip,
  Container,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: 400,
    minWidth: 120
  }
}));

const EducationInputs = props => {
  const classes = useStyles();

  const {
    educations,
    //classes,
    addEducationHandler,
    educationInputHandler
  } = props;

  return educations.map((val, index) => {
    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs">
          <Grid item>
            <div>
              <TextField
                variant="outlined"
                fullWidth
                className={classes.formControl}
                id="educations"
                label="Degree, School Name..."
                name="educations"
                value={val.name}
                autoComplete="educations"
                onChange={evt => educationInputHandler(index, evt.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip
                        title="Add more"
                        aria-label="add educational history"
                        placement="right-end"
                        onClick={() => addEducationHandler()}
                      >
                        <IconButton>
                          <AddIcon />
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  )
                }}
              />
              <small>
                Click the (+) button if educational history is more to add
              </small>
            </div>
            {/* Here display a remove button only if there is more than one item */}
          </Grid>
        </Container>
      </React.Fragment>
    );
  });
};

export default EducationInputs;
