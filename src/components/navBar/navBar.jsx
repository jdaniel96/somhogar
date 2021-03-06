import {Navbar, Container, Nav, } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavBar = function(){

  //TODO implement intersectionobserver for smooth scrolling

  //TODO implement revealing dom elements when scrolling.
  //TODO show navbar when leaving hero section with background color
    return(
        <>
 <Navbar collapseOnSelect expand="lg" style={{backgroundColor: 'rgb(102 179 187)', padding:'1em'}} sticky='top' variant="dark" width='8.5em'>
  <Container>
  <Navbar.Brand><Link style={{textDecoration: 'none', color:'white'}} to='/'>SomHogar Realty</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" style={{columnGap: '1em'}}>
      
      <Link style={{textDecoration:'none', color:'white',alignContent:'center'}} to='/properties'>Propiedades</Link>
     <Link style={{textDecoration:'none', color:'white',alignContent:'center'}} to='/sell'>En Venta</Link>
      <Link style={{textDecoration:'none', color:'white',alignContent:'center'}} to='/rent'>En alquiler</Link>
    
    </Nav>
    <Nav>
      <Nav.Link style={{pointerEvents: 'none', color:'white'}} href="something">809-674-7878</Nav.Link>
      <Nav.Link style={{pointerEvents:'none', color:'white'}} eventKey={2} href="#something">
       somhogarRealty@gmail.com
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
</>
    )
}