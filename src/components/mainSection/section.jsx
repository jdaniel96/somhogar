import {Container} from 'react-bootstrap'
import { CarouselSomhogar } from './carousel'
import { CardsSection } from './cards'

export const Section = function(){
    return(
        <>

        <Container>
                <CarouselSomhogar className='mt-2'/>
                <CardsSection/>
        </Container>
       
        </>

    )

}