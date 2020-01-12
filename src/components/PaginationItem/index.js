import React from 'react';
import Pagination from 'material-ui-flat-pagination';

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
      <React.Fragment>
        <Pagination
          limit={10}
          offset={this.state.offset}
          total={100}
          onClick={(e, offset) => this.handleClick(offset)}
        />
      </React.Fragment>
    );
  }
}

export default CaregiverProfiles;
