import { Col, Row, Container } from "react-bootstrap"

export const Footer = function(){


    return(


        <Container fluid className="bg-dark" bg='dark' style={{color:'white'}}>

            <Row>
            <h1>Aqui va un footer</h1> 
            <Col>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere iste quidem, debitis minus maiores, sequi perspiciatis deleniti ullam aliquam, itaque quas molestiae repudiandae ipsum natus minima quasi et? Maiores?</p>
            </Col>

            <Col>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere iste quidem, debitis minus maiores, sequi perspiciatis deleniti ullam aliquam, itaque quas molestiae repudiandae ipsum natus minima quasi et? Maiores?</p>
            </Col>

            <Col>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse facere iste quidem, debitis minus maiores, sequi perspiciatis deleniti ullam aliquam, itaque quas molestiae repudiandae ipsum natus minima quasi et? Maiores?</p>
            </Col>

            </Row>
        </Container>

    
    )
}