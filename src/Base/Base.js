import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartSimple, faGauge,faTable , faFaceKissWinkHeart, faBell, faMessage, faUser, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";






function Base({title,description,children}){
    const history = useHistory();
    
    return (
        <div className="base-content">
            <div className="left-content">
                <div className="admin">
                <Navbar variant="dark">
                    <Container>   
                            <Nav className="flex-column">
                            <Navbar.Brand><FontAwesomeIcon icon={faFaceKissWinkHeart} /><span className="logo-content" >VJ ADMIN</span></Navbar.Brand>
                            <hr/>
                                <Nav.Link ><FontAwesomeIcon icon={faGauge} /><span className="logo-content"
                                onClick={()=>history.push('/')}
                                >Dashboard</span></Nav.Link>
                                <hr/>
                                <Nav.Link eventKey="disabled" disabled><span className="disable">INTERFACE</span></Nav.Link>
                            
                                <NavDropdown
                                title="Components" id="collasible-nav-dropdown"> 
                                <NavDropdown.Item 
                                onClick={()=>history.push('/buttons')}
                                > Buttons</NavDropdown.Item>

                                <NavDropdown.Item 
                                onClick={()=>history.push('/carts')}
                                > Carts</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Utilities" id="collasible-nav-dropdown">
                                <NavDropdown.Item 
                                onClick={()=>history.push('/colors')}
                                >Colors</NavDropdown.Item>

                                <NavDropdown.Item
                                onClick={()=>history.push('/borders')}
                                >Borders</NavDropdown.Item>

                                <NavDropdown.Item 
                                onClick={()=>history.push('/')}
                                >Animations</NavDropdown.Item>
                                
                                </NavDropdown>
                                <hr/>

                                <Nav.Link eventKey="disabled" disabled>ADDONS</Nav.Link>

                                <NavDropdown title="Pages" id="collasible-nav-dropdown">
                                <Nav.Link eventKey="disabled" disabled><span className="span">LOGIN SCREENS:</span></Nav.Link>
                                <NavDropdown.Item 
                                onClick={()=>history.push('/login')}
                                >Login</NavDropdown.Item>

                                <NavDropdown.Item 
                                onClick={()=>history.push('/register')}
                                >Register</NavDropdown.Item>

                                <NavDropdown.Item 
                                onClick={()=>history.push('/forgot')}
                                >Forgot Password</NavDropdown.Item>


                                <Nav.Link eventKey="disabled" disabled><span className="span">OTHER PAGES:</span></Nav.Link>
                                <NavDropdown.Item 
                                onClick={()=>history.push('/**')}
                                >404 Page</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link><FontAwesomeIcon icon={faChartSimple} /><span className="logo-content"
                                onClick={()=>history.push('/')}
                                >Charts</span></Nav.Link>
                                
                                <Nav.Link><FontAwesomeIcon icon={faTable} /><span className="logo-content"
                                 onClick={()=>history.push('/tables')}
                                >Tables</span></Nav.Link>

                            </Nav>
                    </Container>
            </Navbar>            
            </div>
        </div>

            <div className="right-content">
                <div>
                    <div className="search-bar">
                        <Navbar bg="light" expand="lg">
                            <Container fluid>
                                <div>
                                    <Form className="d-flex" style={{width:'25rem'}}>
                                        <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        />
                                        <Button variant="primary"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                                    </Form>
                                </div>

                                <div className="profile">
                                    <Navbar.Toggle aria-controls="navbarScroll" />
                                    <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Nav.Link href="#action1"> <FontAwesomeIcon icon={faBell} /></Nav.Link>
                                        <Nav.Link href="#action2"><FontAwesomeIcon icon={faMessage} /></Nav.Link>
                                        <NavDropdown title="profile" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">settings</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            log out
                                        </NavDropdown.Item>
                    
                                        </NavDropdown>
                                        <Nav.Link href="#action1">  <FontAwesomeIcon icon={faUser} /></Nav.Link>
                                    
                                    </Nav>
                                    
                                    </Navbar.Collapse>
                                </div>
                            </Container>
                        </Navbar>

                    </div>
                    <h1 className="base-h1">{title}</h1>
                    <p className="base-p">{description}</p>
                    <p>{children}</p>
                </div>
            </div>

                
            

        </div>
    )
}
export default Base