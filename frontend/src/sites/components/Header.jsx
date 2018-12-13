import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu
} from 'reactstrap';


export default class Header extends Component {
  constructor(props) {
    super(props);
    var logged = this.props.loggedIn;
    this.toggle = this.toggle.bind(this);
    this.state = {
      loggedIn: logged,
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    var logFunctionality = (!this.state.loggedIn)? (
      <div>
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav>
          Login
        </DropdownToggle>
        <DropdownMenu right>
            {/* You should insert a login component here! */}
        </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    ) : (<div>
      <NavItem>
        <NavLink href="/">Logout</NavLink>
      </NavItem>
    </div>)

    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">tConference</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Book a conference!</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://buutti.com/buuttilaiset/">Our Team</NavLink>
              </NavItem>
              {logFunctionality}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
