import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { LoadingSpinner } from "../Cards/_cards";
import { Description } from "./_Description";
import { CarouselSomhogar } from "./_carousel";
import {Row, Col, Container} from "react-bootstrap";
import { Map } from "./_Map"




export const DetailedView = function() {
  
    const {id} = useParams();
    const [property, setProperty] = useState({});
    const [isLoading, setIsLoading] = useState(true)

    const url = `https://somhogaradmin.herokuapp.com/api/properties/${id}?populate=*`;
    

    useEffect(() => {
    fetch(url).then(response => response.json()).then(data => setProperty(data), setIsLoading(false))
    },[url]);



  

    return(

      <div>

        {isLoading && 
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
        }
  
        
        {property.data && 
            <Container>
            <h1 style={{textAlign:'center', marginTop:'1em', marginBottom:'0.5em', color:'#880808'}}>{property.data.attributes.name}</h1>


            <Row style={{marginBottom:'3em'}} className="row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-1">
                <Col>
                    <Map dataMap={property}/>
              </Col>   
                <Col>
                    <CarouselSomhogar data={property}/>
                </Col>
            </Row>
                <Description ok={property}/>
            </Container>
        }
        </div>
    )
}


