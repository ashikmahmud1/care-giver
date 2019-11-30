import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import "./caregiverProfiles.css";
import CaregiverList from "../../components/CaregiverProfiles/CaregiverList/index";

const theme = createMuiTheme();

class CaregiverProfiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0 };
  }

  handleClick(offset) {
    this.setState({ offset });
  }

  render() {
    return (
      <div>
        <h1>HEllo</h1>
        <CssBaseline />
        <CaregiverList />
        <Pagination
          limit={10}
          offset={this.state.offset}
          total={100}
          onClick={(e, offset) => this.handleClick(offset)}
        />
      </div>
    );
  }
}

CaregiverProfiles.propTypes = {
  classes: PropTypes.object.isRequired
};

export default CaregiverProfiles;
