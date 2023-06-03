import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../src/Styles/Header.css'


const Navbar1=()=> {
  return (
    <div className="">
    <Navbar  expand="lg">
      {/* <Container> */}
      
      <img className='logo' src="https://bengkelthemethemes5e401.zapwp.com/q:i/r:0/wp:1/w:1/u:https://bengkeltheme.themesawesome.com/wp-content/uploads/sites/10/2015/05/logo.png" alt="logo" data-wpc-loaded="true" class="wps-ic-cdn image-logo ic-fade-in"></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='Navbar' id="basic-navbar-nav ">
        <div className="Navbar_Styles">
        <div className="Styles">
          <Nav className="me-auto">
            <Nav.Link  href="/">HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/services">SERVICES</Nav.Link>
            
           
         
            
            <Nav.Link href="*/"></Nav.Link>
            <NavDropdown title="PAGES" id="basic-nav-dropdown">
            <div className="dropdown">
              <NavDropdown.Item href="#action/3.1">GALLERY</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              ARCADE CLAIM
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SEARCH RESULT</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SUB MENULEVEL2 </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">SUB MENULEVEL2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">404</NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              </div>
            </NavDropdown>
            
            <Nav.Link href="/blogs">BLOGS</Nav.Link>
            <Nav.Link href="/testimonial">TESTIMONIAL</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/services"></Nav.Link>
            

          </Nav>
          </div>
          </div>
          
        </Navbar.Collapse>

         
      {/* </Container> */}
    </Navbar>
    </div>
  );
}

export default Navbar1;