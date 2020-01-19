import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Tooltip, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(() => ({
  formControl: {
    width: 380,
    minWidth: 120
  }
}));

const PhysicalComplicationsInputs = props => {
  const classes2 = useStyles();

  const {
    physicalComplications,
    classes,
    addPhysicalComplicationsHandler,
    physicalComplicationsInputHandler
  } = props;
  return physicalComplications.map((val, index) => {
    return (
      <Grid item xs={12}>
        <div style={{ display: 'inline-flex' }}>
          <div>
            <TextField
              variant="outlined"
              fullWidth
              className={classes2.formControl}
              id="physicalComplications"
              label="Physical Complications"
              name="physicalComplications"
              value={val.name}
              autoComplete="physicalComplications"
              onChange={evt =>
                physicalComplicationsInputHandler(index, evt.target.value)
              }
            />
            <small>
              Click the (+) button if Physical Complications are more to add
            </small>
          </div>
          <div style={{ alignSelf: 'right' }}>
            <Tooltip
              title="Add more"
              aria-label="add"
              onClick={() => addPhysicalComplicationsHandler()}
            >
              <Fab size="small" color="secondary" className={classes.fab}>
                <AddIcon />
              </Fab>
            </Tooltip>
          </div>
          {/*    here display a remove button only if there is more than one item*/}
        </div>
      </Grid>
    );
  });
};

export default PhysicalComplicationsInputs;
