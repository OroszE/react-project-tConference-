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
import axios from 'axios';

import Login from './Login.jsx';

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


export default class Header extends Component {
  constructor(props) {
    super(props);
    var loggedIn = this.props.logged
    console.log(loggedIn);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loggedIn: loggedIn
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  login(user, pass) {
    var component = this;
    console.log(pass);
    axios.post("http://94.237.87.26:3031/login", {
      user: user,
      pass: pass
    })
        .then((response) => {
          setCookie("user", response.data);
          component.props.loginSuccess();
        })
        .catch((err) => {
          console.log(err)
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
              <Login onLogin={(user, pass) => {this.login(user, pass);}}></Login>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    ) : (<div>
      <NavItem>
        <NavLink href="/">Logout</NavLink>
      </NavItem>
    </div>)


    return (
      <div style={{
        position: "fixed",
        width: "100%",
        zIndex: "10"
      }}>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">tConference</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
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
