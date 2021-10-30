import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import useAuth from "../../hooks/useAuth";
// import logo from "../../assets/logo1.png";

//navbar component
const Header = () => {
  const { user, logOut, admin } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="fs-1 mx-5" href="#home">
            <p className="text-primary fs-2 text-start">Go Beyond Travels</p>
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto fs-5 align-items-center ">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer> */}

            {admin ? (
              <>
                {" "}
                <LinkContainer to="/managebookings">
                  <Nav.Link>Manage Bookings</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/managetourpackages">
                  <Nav.Link>Manage Tour Package</Nav.Link>
                </LinkContainer>
              </>
            ) : (
              <>
                <LinkContainer to="/mybookings">
                  <Nav.Link>My Bookings</Nav.Link>
                </LinkContainer>
              </>
            )}
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            {user.email ? (
              <div className="mx-5">
                <span>Logedin as {user.displayName}</span>
                <button onClick={logOut} className="btn btn-info m-3">
                  Logout
                </button>
              </div>
            ) : (
              <LinkContainer to="/login" className="mx-5 btn btn-info">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            )}
            {/* <Nav.Link> Phone: + 0800 24 66 7921</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
