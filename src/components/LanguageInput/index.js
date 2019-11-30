import React from "react";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Grid } from "@material-ui/core";

const LanguageInputs = props => {
  const {
    languages,
    classes,
    addLanguageHandler,
    languageInputHandler
  } = props;
  return languages.map((val, index) => {
    return (
      <Grid item xs={12}>
        <div style={{ display: "inline-flex" }}>
          <div>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="languages"
              label="Languages"
              name="languages"
              value={val.name}
              autoComplete="languages"
              onChange={evt => languageInputHandler(index, evt.target.value)}
            />
            <small>
              Click the button if Speaking Languages are more to add
            </small>
          </div>
          <div style={{ alignSelf: "center" }}>
            <Tooltip
              title="Add more"
              aria-label="add"
              onClick={() => addLanguageHandler()}
            >
              <Fab size="small" color="secondary" className={classes.fab}>
                <AddIcon />
              </Fab>
            </Tooltip>
          </div>
          {/* Here display a remove button only if there is more than one item */}
        </div>
      </Grid>
    );
  });
};

export default LanguageInputs;
