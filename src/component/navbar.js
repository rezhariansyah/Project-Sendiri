import React from 'react';
import '../support/css/navbar.css'

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
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  import {Link} from 'react-router-dom';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <NavbarBrand href="/"><Link to='/'><img src='https://shmector.com/_ph/13/979709898.png' alt="imgfooter" style={{width:'50px'}} /></Link></NavbarBrand>
          <NavbarToggler className='custom-toggler' onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto bla menu" navbar>
              <NavItem>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" style={{width:'400px'}} placeholder="Find Store or Prouduct" aria-label="Search" />
                <button className="btn btn-outline-primary my-2 my-sm-0 mr-3" type="submit">Search</button>
              </form>
              </NavItem>
              <NavItem>
                <NavLink id='menu' href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <Link to='/loginPage' style={{textDecoration : 'none'}}><NavLink id='menu'>Login</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to='/registerPage' style={{textDecoration : 'none'}}><NavLink id='menu'>Register</NavLink></Link>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}