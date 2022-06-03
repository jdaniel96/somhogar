import { Container } from "react-bootstrap"
import HeroStyles from './hero.module.css'
export const HeroSection = function() {


    return (
     
            <Container className={HeroStyles.heroContainer} fluid style={{padding: '0'}}>
    
            {/* <img className={HeroStyles.heroImg} src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="SomHogar Realty Hero Section Display" /> */}

            <div className={HeroStyles.heroText}>
            <h1>Un titulo aquí</h1>
            <h1>Breve descripcion</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit incidunt possimus, asperiores aliquam a vitae accusamus amet adipisci repudiandae distinctio beatae aliquid aspernatur corporis, totam ut doloremque. Magni, cumque! Voluptates!</p>
          
            </div>
           
            </Container>
     

    )
}