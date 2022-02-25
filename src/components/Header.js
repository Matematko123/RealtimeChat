import { Navbar, Nav, Button } from 'react-bootstrap';

function Header() {
  return (
    <>
      <Navbar className="px-4" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <h2>Talker</h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Button className="btn-primary m-xs-3 m-lg-2">Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
