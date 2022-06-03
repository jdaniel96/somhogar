import {Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

export const NavBar = function(){
    return(
        <>
 <Navbar collapseOnSelect expand="lg" bg="dark" sticky='top' variant="dark" width='8.5em'>
  <Container>
  <Navbar.Brand href="#home">SomHogar Realty</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="something">something</Nav.Link>
      <Nav.Link eventKey={2} href="#something">
       something
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}