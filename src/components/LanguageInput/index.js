import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Tooltip, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: 380,
    minWidth: 120
  }
}));

const LanguageInputs = props => {
  const classes2 = useStyles();

  const {
    languages,
    classes,
    addLanguageHandler,
    languageInputHandler
  } = props;
  return languages.map((val, index) => {
    return (
      <Grid item>
        <div style={{ display: 'inline-flex' }}>
          <div>
            <TextField
              variant="outlined"
              fullWidth
              className={classes2.formControl}
              id="languages"
              label="Languages"
              name="languages"
              value={val.name}
              autoComplete="languages"
              onChange={evt => languageInputHandler(index, evt.target.value)}
            />
            <small>
              Click the (+) button if speaking language is more to add
            </small>
          </div>
          <div style={{ alignSelf: 'right' }}>
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
