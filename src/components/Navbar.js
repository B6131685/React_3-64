import React from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { FiActivity } from "react-icons/fi";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <>
       <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="/" exact>
          <img 
            src='./logo192.png'
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt='React one Week' 
          />
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' exact className="nav-link" activeClassName='active'>
              หน้าหลัก
            </NavLink>
            <NavLink to='/product'  className="nav-link" activeClassName='active'>
              สินค้า
            </NavLink>
            <NavLink to='/about'  className="nav-link" activeClassName='active'>
              เกี่ยวกับเรา
            </NavLink>
            
            <Nav.Link href="#link"><FiActivity color="red"/></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default NavBar;
