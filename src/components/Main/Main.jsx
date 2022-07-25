import { PropertyCard } from "../Cards/_cards"
import { Link } from "react-router-dom"




export const Main = function() {
    //TODO add a business section
    //TODO add a contact us section
    //TODO add vision mission etc
    //TODO implement Email from form functionality
    
    
    return(
            <div>
            <h1 style={{textAlign:'center', marginBottom: '1em'}}>ÚLTIMAS PROPIEDADES</h1>  
            <PropertyCard url={process.env.REACT_APP_URL_FIRST_6_PROPERTIES_URL}/>
            <div style={{justifyItems: 'center'}}>
            <Link to='/properties' style={{textAlign:'center', marginBottom: '1em', display:'inherit', marginTop:'3em'}}>VER MÁS</Link>  
            </div>

        
    
            </div>     
    )

}