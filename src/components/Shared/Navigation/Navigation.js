import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../Hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, signOutFromAccount } = useAuth();
  console.log(user);
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <i>DESTINATION DEN</i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="about">
                About us
              </Nav.Link>
              {user.email ? (
                <>
                  <Nav.Link
                    as={NavLink}
                    onClick={() => signOutFromAccount()}
                    to="/"
                  >
                    Logout {user.displayName}{" "}
                  </Nav.Link>

                  <Nav.Link as={NavLink} to={`/my-orders/${user.displayName}`}>
                    My Trips
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/manage-all-orders">
                    Manage All Trips
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="/add-service">
                    Add A New Service
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={NavLink} to="login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
