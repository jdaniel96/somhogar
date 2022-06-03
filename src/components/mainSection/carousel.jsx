import {Carousel} from 'react-bootstrap'


export const CarouselSomhogar = function(){
    return(
    <Carousel className='mt-5 rounded'>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="First slide"
            />
            <Carousel.Caption>
            <h5>Algo aqui</h5>
            <p>Algo aqui</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>algo aqui</h5>
            <p>algo aqui</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>algo aqui</h5>
            <p>algo aqui</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}