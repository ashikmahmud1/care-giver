import React from "react";
//import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
//import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";

import "./caregiverProfiles.css";
import CaregiverList from "../../components/CaregiverProfiles/CaregiverList/index";

//const theme = createMuiTheme();

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
      <div className="pagination">
        <CssBaseline />
        <Box display="flex" flexDirection="row" justifyContent="center">
          <CaregiverList />
          <CaregiverList />
          <CaregiverList />
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <CaregiverList />
          <CaregiverList />
          <CaregiverList />
        </Box>
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

{
  /*CaregiverProfiles.propTypes = {
  classes: PropTypes.object.isRequired
};*/
}

export default CaregiverProfiles;
