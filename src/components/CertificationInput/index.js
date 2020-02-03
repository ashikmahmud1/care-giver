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

const CertificationInputs = props => {
  const classes = useStyles();

  const {
    certifications,
    //classes,
    addCertificationHandler,
    certificationInputHandler
  } = props;
  return certifications.map((val, index) => {
    return (
      <React.Fragment>
        <Container component="main" maxWidth="xs">
          <Grid item>
            <div>
              <TextField
                variant="outlined"
                fullWidth
                className={classes.formControl}
                id="certificates"
                label="Certification, Institution Name..."
                name="certificates"
                value={val.name}
                autoComplete="certificates"
                onChange={evt =>
                  certificationInputHandler(index, evt.target.value)
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip
                        title="Add more"
                        aria-label="add professional certificational history"
                        placement="right-end"
                        onClick={() => addCertificationHandler()}
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
                Click the (+) button if certification history is more to add
              </small>
            </div>
            {/* Here display a remove button only if there is more than one item */}
          </Grid>
        </Container>
      </React.Fragment>
    );
  });
};

export default CertificationInputs;
