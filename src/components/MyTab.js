import React, { Component } from 'react';
import { MDBNavLink } from "mdbreact";
import PropTypes from 'prop-types';

class MyTab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' active';
    }

    return (
      <MDBNavLink to="#!" className={className} onClick={onClick}>
        {label}
      </MDBNavLink>
    );
  }
}

export default MyTab;