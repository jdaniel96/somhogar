import { PropertyCard } from "../Cards/_cards"
import { Link } from "react-router-dom"




export const Main = function() {
    
    return(
            <div style={{marginBottom:'2em'}}>
            <h1 style={{textAlign:'center', marginBottom: '1em'}}>ÚLTIMAS PROPIEDADES</h1>  
            <PropertyCard url={process.env.REACT_APP_URL_ALL_PROPERTIES_URL}/>
            <div style={{justifyItems: 'center'}}>
            <Link to='/properties' style={{textAlign:'center', marginBottom: '1em', display:'inherit', marginTop:'3em'}}>VER MÁS</Link>  
            </div>

        
    
            </div>     
    )

}