import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OptionItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <input value={this.props.itemSelected} type='checkbox' onClick={this.props.onItemClick} />
        <span> { this.props.itemLabel } </span>
      </div>
    );
  }
}

OptionItem.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  itemLabel: PropTypes.string.isRequired,
  itemSelected: PropTypes.bool.isRequired,
}



export default OptionItem
