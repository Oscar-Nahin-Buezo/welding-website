import React, { Component } from 'react';
import './home.css';
import {Carousel, Card, Button} from 'react-bootstrap';
import { Facebook,Instagram,Twitter,Linkedin } from 'react-feather';
export default class home extends Component{

    render(){
        return(
            <div className ="contenedor">
                <div className = "galeria">
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="imagen1"
                            src="https://picsum.photos/500/300?img=1"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>Bienvenido a Soldaduras S.A</h3>
                            <p>Empresa dedicada a la preparacion y certificacion de profesionales</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="imagen2"
                            src="https://s3-eu-west-1.amazonaws.com/spaceson/uploads/room_image/image/2627/slider_sol01.jpg"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Equipo de calidad</h3>
                            <p>Contamos con equipo de punta</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            id="imagen3"
                            src="https://picsum.photos/500/300?img=3"
                            alt="Third slide"
                            />

                            <Carousel.Caption>
                            <h3>Profesionales capacitados</h3>
                            <p>Contamos con los mejores instructores y profesionales a nivel nacional</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                <section className="servicios">
                    <div class="row justify-content-center mb-5 element-animate">
                        <div class="col-md-8 text-center">
                            <h2 class="text-uppercase heading border-bottom mb-4">Servicios</h2>
                            <p class="mb-3 lead">Contamos con los recursos, certificados y capacitaciones necesarios para profesionales</p>
                        </div>
                    </div>
                    <Card style={{ width: '18rem' }} id="izquierdo">
                        <Card.Img className="icono_card"style={{ width: '80px',height:'80px' }} variant="top" src="data:image/png;base64,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" />
                        <Card.Body>
                            <Card.Title>Cursos</Card.Title>
                            <Card.Text>
                            Informacion sobre los cursos
                            </Card.Text>
                            <Button variant="primary">Mas informacion</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}id="centro">
                        <Card.Img className="icono_card"style={{ width: '80px',height:'80px' }} variant="top" src="https://psiemco.com/wp-content/uploads/2019/06/people_14383.png" />
                        <Card.Body>
                            <Card.Title>Capacitaciones</Card.Title>
                            <Card.Text>
                            Informacion sobre capacitaciones
                            </Card.Text>
                            <Button variant="primary">Mas informacion</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }} id="derecho">
                        <Card.Img className="icono_card"style={{ width: '80px',height:'80px' }} variant="top" src="data:image/png;base64,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" />
                        <Card.Body>
                            <Card.Title>Certificados</Card.Title>
                            <Card.Text>
                            Informacion de Certificados
                            </Card.Text>
                            <Button variant="primary">Mas informacion</Button>
                        </Card.Body>
                    </Card>
                </section>
                <section className="pie">
                    <footer className="footer" role="contentinfo">
                        <div className="container">
                            <div className="row">
                            <div className="col-md-3">
                                
                                <p className="copyright">Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                            
                            </div>
                            <div className="col-md-3">
                                <ul className="list-unstyled footer-link">
                                <li className="d-flex"><span class="mr-3">A:</span><span class="text-black">34 Street Name, City Name Here, United States</span></li>
                                <li className="d-flex"><span class="mr-3">T:</span><span class="text-black">+1 242 4942 290</span></li>
                                <li className="d-flex"><span class="mr-3">E:</span><span class="text-black">info@yourdomain.com</span></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3>Quick Links</h3>
                                <ul className="list-unstyled footer-link">
                                <li><a href="#">About</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Works</a></li>
                                <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h3>Social</h3>
                                <ul className="list-unstyled footer-link d-flex footer-social">
                                <li><a href="#" className="p-2"><span ><Twitter/></span></a></li>
                                <li><a href="#" className="p-2"><span ><Facebook/></span></a></li>
                                <li><a href="#" className="p-2"><span ><Linkedin/></span></a></li>
                                <li><a href="#" className="p-2"><span ><Instagram/></span></a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </div>
        );
    }
}