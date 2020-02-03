import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  TextField,
  Tooltip,
  InputAdornment,
  IconButton
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  formControl: {
    width: 380,
    minWidth: 120
  }
}));

const LanguageInputs = props => {
  const classes = useStyles();

  const {
    languages,
    //classes,
    addLanguageHandler,
    languageInputHandler
  } = props;

  return languages.map((val, index) => {
    return (
      <React.Fragment>
        <Grid item>
          <div>
            <TextField
              variant="outlined"
              fullWidth
              className={classes.formControl}
              id="languages"
              label="Languages"
              name="languages"
              value={val.name}
              autoComplete="languages"
              onChange={evt => languageInputHandler(index, evt.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Tooltip
                      title="Add more"
                      aria-label="add languages"
                      placement="right-end"
                      onClick={() => addLanguageHandler()}
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
              Click the (+) button if speaking language is more to add
            </small>
          </div>
          {/* Here display a remove button only if there is more than one item */}
        </Grid>
      </React.Fragment>
    );
  });
};

export default LanguageInputs;
