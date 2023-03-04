import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Collapse from 'react-bootstrap/Collapse';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import banner from '../../assets/images/banner-image.png';
import gateway from '../../assets/images/choose.png';
import code from '../../assets/images/code.jpg';
import steps from '../../assets/images/steps-right.png';
import { AnimationOnScroll} from "react-animation-on-scroll";

const Home = () => {
    const [open, setOpen] = useState(false);
    return (
        <section className="wrapper">
            <div className="banner">
                {/* <img  src={banner}/> */}
                <div className="top-bar">
                {['xl'].map((expand) => (
                    <Navbar key={expand} expand={expand} className="mb-3" fixed="top">
                        <Container>
                            <Navbar.Brand href="#">Logo</Navbar.Brand>
                            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                            <Navbar.Offcanvas id={`offcanvasNavbar-expand-${expand}`} aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`} placement="end">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                        Offcanvas
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Nav className="justify-content-center flex-grow-1 pe-3 navbar-options">
                                        <Nav.Link href="#action1">Home</Nav.Link>
                                        <Nav.Link href="#action2">About</Nav.Link>
                                        <Nav.Link href="#action2">Features</Nav.Link>
                                        <Nav.Link href="#action2">Services</Nav.Link>
                                        <Nav.Link href="#action2">Pricing</Nav.Link>
                                        <Nav.Link href="#action2">API</Nav.Link>
                                        <Nav.Link href="#action2">Contact Us</Nav.Link>
                                        {/* <NavDropdown title="Dropdown" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                            <NavDropdown.Item href="#action4">
                                                Another action
                                            </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action5">
                                                Something else here
                                            </NavDropdown.Item>
                                        </NavDropdown> */}
                                    </Nav>
                                    <Form className="d-flex">

                                        <Button variant="outline-success">Register</Button>
                                        <Button variant="outline-success">Login</Button>
                                    </Form>
                                </Offcanvas.Body>
                            </Navbar.Offcanvas>
                        </Container>
                    </Navbar>
                ))}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="banner-content">
                                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                    <Button variant="outline-success" className="api">API Docs</Button>
                                    <Button variant="outline-success">Contact Our Team</Button>
                                </div> 
                            </div>
                            <div className="col-md-6">
                                <div className="banner-image">
                                    <img src={banner} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="why-choose">
                <div className="choose-heading">
                    <h3>Strong reasons to choose <span className="payuguru">PayUGuru</span> Payment Gateway</h3>
                    {/* <ScrollAnimationItem
    path={'top'}
    offsetHeight={-400}
  >
    Its top
  </ScrollAnimationItem> */}
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="choose-block">
                            <span className="material-symbols-outlined">
                                frame_source
                            </span>
                            <h3>Developer Friendly</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis adipisci veniam dolores totam esse quam, quaerat quos sit error culpa sunt ipsum excepturi eligendi,</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="choose-block">
                                <span class="material-symbols-outlined">
                                    account_balance
                                </span>
                                <h3>100+ Payment Modes</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam ipsa consequuntur, dignissimos quaerat et assumenda molestias ducimus sit </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="choose-block">
                                <span class="material-symbols-outlined">
                                table_rows
                                </span>
                                <h3>99.9% System Uptime</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur totam ipsa consequuntur, dignissimos quaerat et assumenda molestias ducimus sit </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="gateway">
                                <img src={gateway} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="api">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="api-doc">
                                <h3>API & Plugins</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni, provident rerum id illum at et optio quaerat unde quo! Rerum, molestiae accusantium expedita quaerat temporibus nisi ea quisquam architecto</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae magni, provident rerum id illum at et optio quaerat unde quo! Rerum, molestiae accusantium expedita quaerat temporibus nisi ea quisquam architecto</p>
                                <div className="api-doc-link">
                                    <p><a href="#">Learn More </a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="api-code">
                                <img src={code} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services">
                <div className="container">
                    <div className="services-body">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="services-images">

                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="services-heading">
                                    <h3>Payment Solutions Designed for</h3>
                                </div>
                                <div className="services-content">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="services-blocks">
                                            <h3>eCommerce Platforms</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum similique, enim aliquam eos obcaecati provident, dolores in porro unde quidem beatae et! Voluptates reprehenderit libero earum atque, omnis tempore?</p>
                                            <div className="services-icon">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="services-blocks">
                                            <h3>SaaS Platforms</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum similique, enim aliquam eos obcaecati provident, dolores in porro unde quidem beatae et! Voluptates reprehenderit libero earum atque, omnis tempore?</p>
                                            <div className="services-icon">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="services-blocks">
                                            <h3>Service Providers</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum similique, enim aliquam eos obcaecati provident, dolores in porro unde quidem beatae et! Voluptates reprehenderit libero earum atque, omnis tempore?</p>
                                            <div className="services-icon">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="services-blocks">
                                            <h3>Exporters and Importers</h3>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolorum similique, enim aliquam eos obcaecati provident, dolores in porro unde quidem beatae et! Voluptates reprehenderit libero earum atque, omnis tempore?</p>
                                            <div className="services-icon">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="process-steps">
                <div className="process-heading">
                    <h3>Smooth and Fast Onboarding Process</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, at? Officiis esse voluptatem maxime</p> 
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="process-steps-content">
                                <h3>Sign up</h3>
                                <p>Create a free account on the PayUGuru website.</p>
                                <h3>Account verification & confirmation</h3>
                                <p>Receive instant online account authentication.</p>
                                <h3>Upload Documents</h3>
                                <p>Complete paperless KYC with minimal documentation.</p>
                                <h3>Go Live</h3>
                                <p>Start accepting payments with one of the best Indian payment gateways.</p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="process-image">
                                <img src={steps} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="faq">
                <div className="container">
                    <Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open} >
                        click
                    </Button>
                    <Collapse in={open}>
                        <div id="example-collapse-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </Collapse>
                </div>
            </section>
        </section>
    )
}


export default Home

