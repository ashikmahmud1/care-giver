import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  TextField,
  Tooltip,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import * as actionCreators from '../../store/actions';
import { validate, checkError } from '../../utils/validator';

const useStyles = makeStyles(() => ({
  formControl: {
    width: 380,
    minWidth: 120
  }
}));

const PhysicalComplicationsInputs = props => {
  const classes = useStyles();

  const {
    physicalComplications,
    //classes,
    addPhysicalComplicationsHandler,
    physicalComplicationsInputHandler
  } = props;

  const [errors, setErrors] = useState({});

  return physicalComplications.map((val, index) => {
    return (
      <React.Fragment>
        <Grid item xs={12}>
          <div>
            <TextField
              variant="outlined"
              fullWidth
              className={classes.formControl}
              id="physicalComplications"
              label="Physical Complications"
              name="physicalComplications"
              value={val.name}
              autoComplete="physicalComplications"
              onChange={evt =>
                physicalComplicationsInputHandler(index, evt.target.value)
              }
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip
                      title="Add more"
                      aria-label="add physical complications"
                      onClick={() => addPhysicalComplicationsHandler()}
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
              Click the (+) button if Physical Complications are more to add
            </small>
          </div>
          {/*    here display a remove button only if there is more than one item*/}
          {errors.physicalComplications && (
                <div className="alert alert-danger">
                  {errors.physicalComplications}
                </div>
              )}
        </Grid>
      </React.Fragment>
    );
  });
};

export default PhysicalComplicationsInputs;
