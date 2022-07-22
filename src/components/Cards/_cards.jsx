import Card from 'react-bootstrap/Card'
import { useState, useEffect } from "react";
import {Row, Col} from 'react-bootstrap'
import cardStyles from './cards.module.css'
import { Link} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';

export function LoadingSpinner() {
  return <Spinner animation="grow" />;
}

export const PropertyCard = (props) =>{
  
  
  const url = props.url;
  


  const [properties, setProperties] =  useState({});

  useEffect(() => {    
     fetch(url).then(response => response.json()).then(data => setProperties(data))
  },[url]);

  // console.log(properties);

  

 



    return(

        <Container style={{padding:0}}>

          {!properties.data && (
            <div style={{display: 'flex', justifyContent:'space-evenly', color:'red'}}>
            <LoadingSpinner/>
            <LoadingSpinner/>
            <LoadingSpinner/>
            <LoadingSpinner/>
            <LoadingSpinner/>
            <LoadingSpinner/>
            <LoadingSpinner/>
            <LoadingSpinner/>
            </div>
          )}

        <Row className='row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1' style={{ rowGap:'1em'}}>

        {properties.data && properties.data.map((value, index) =>

        <Col>
        <Card className='shadow' key={index} style={{padding: '0', marginBottom:'4em' }}>
          <Card.Img className={cardStyles.img} variant="top" src={value.attributes.photos.data[0].attributes.url}/>
          <Card.Body>
            <Card.Title style={{height:'2.2em'}}>{value.attributes.name}</Card.Title>
            <Card.Text style={{height:'10em',overflow:'scroll'}}>
            {value.attributes.description}
            </Card.Text>
            <Link to={`property/${value.id}`} variant="primary">Ver más</Link> 
          </Card.Body>
        </Card>
        </Col>
        )
      }
    </Row>
    </Container>
           

    ) 

        
    
    
}