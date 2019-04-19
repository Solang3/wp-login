import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import MyTab from './MyTab';

class MyTabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol size="12">
            <MDBNav className="tab-list">
                {children.map((child) => {
                  const { label } = child.props;
                  return (
                    <MDBNavLink active to="#!" className="tab">
                      <MyTab
                        activeTab={activeTab}
                        key={label}
                        label={label}
                        onClick={onClickTabItem}
                      />
                    </MDBNavLink>
                    );
                  })}
            </MDBNav>
            <MDBContainer>
              {children.map((child) => {
                if (child.props.label !== activeTab) return undefined;
                return child.props.children;
              })}
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default MyTabs;