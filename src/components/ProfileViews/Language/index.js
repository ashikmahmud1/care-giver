import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    english: false,
    french: false,
    hindi: false,
    chinese: false,
    spanish: false,
    italian: false,
    german: false,
    arabic: false,
    korean: false,
    bengali: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const {
    english,
    french,
    hindi,
    chinese,
    spanish,
    italian,
    german,
    arabic,
    korean,
    bengali
  } = state;
  const error =
    [
      english,
      french,
      hindi,
      chinese,
      spanish,
      italian,
      german,
      arabic,
      korean,
      bengali
    ].filter(v => v).length !== 2;

  return (
    <div className={classes.paper}>
      <InputLabel htmlFor="upload-btn">Choose Language(s) you speak</InputLabel>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Check all that apply</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={english}
                  onChange={handleChange("english")}
                  value="english"
                />
              }
              label="English"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={french}
                  onChange={handleChange("french")}
                  value="french"
                />
              }
              label="French"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={hindi}
                  onChange={handleChange("hindi")}
                  value="hindi"
                />
              }
              label="Hindi"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={chinese}
                  onChange={handleChange("chinese")}
                  value="chinese"
                />
              }
              label="Chinese"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={spanish}
                  onChange={handleChange("spanish")}
                  value="spanish"
                />
              }
              label="Spanish"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={italian}
                  onChange={handleChange("italian")}
                  value="italian"
                />
              }
              label="Italian"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={german}
                  onChange={handleChange("german")}
                  value="german"
                />
              }
              label="German"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={arabic}
                  onChange={handleChange("arabic")}
                  value="arabic"
                />
              }
              label="Arabic"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={korean}
                  onChange={handleChange("korean")}
                  value="korean"
                />
              }
              label="Korean"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={bengali}
                  onChange={handleChange("bengali")}
                  value="bengali"
                />
              }
              label="Bengali"
            />
          </FormGroup>
        </FormControl>
      </div>
    </div>
  );
}
