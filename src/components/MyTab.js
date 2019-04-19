import React, { Component } from 'react';
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
      <span
        className={className}
        onClick={onClick}
      >
        {label}
      </span>
    );
  }
}

export default MyTab;