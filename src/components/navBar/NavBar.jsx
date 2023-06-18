import React, { Component } from 'react';
import '../navBar/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



class NavBar extends Component {
  //Nel metodo render, viene prima effettuata la destrutturazione della prop category per ottenere il valore della categoria selezionata
  //In sostanza, questo codice crea una barra di navigazione con un menu a discesa che permette all'utente di selezionare un genere di libri. 
  //Quando viene selezionato un genere, viene richiamata la funzione setCategory fornita come prop, passando il genere selezionato come argomento.
  
render() {
   
    return (
      <div>
        <Navbar bg="info" expand="lg">
          <Container>
            <Navbar.Brand href="#home">IpicBOOK</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <NavDropdown title="Browser" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1" onClick={() => this.props.setCategory('fantasy')}>fantasy</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" onClick={() => this.props.setCategory('history')}>history</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" onClick={() => this.props.setCategory('horror')}>horror</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" onClick={() => this.props.setCategory('romance')}>romance</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3" onClick={() => this.props.setCategory('scifi')}>scifi</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
               
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

    );
  }
}
export default NavBar;