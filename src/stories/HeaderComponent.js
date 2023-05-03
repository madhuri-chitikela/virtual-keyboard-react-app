import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function HeaderComponent(){
    return(
        <div>
            <Navbar bg="light" expand="lg">
      <Container style={{justifyContent: 'center'}}>
        <Navbar.Brand href="#home"><b>VirtualKeyboard-React-App</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Container>
    </Navbar>
        </div>
    );
}
//export HeaderComponent
