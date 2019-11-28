import React from "react";
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

const PhysicalComplicationsInputs = props => {
  const {
    physicalComplications,
    classes,
    addPhysicalComplicationsHandler,
    physicalComplicationsInputHandler
  } = props;
  return physicalComplications.map((val, index) => {
    return (
      <Grid item xs={12}>
        <div style={{ display: "inline-flex" }}>
          <div>
            <TextField
              variant="outlined"
              required
              fullWidth
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
              Click the button if Physical Complications are more to add
            </small>
          </div>
          <div style={{ alignSelf: "center" }}>
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
