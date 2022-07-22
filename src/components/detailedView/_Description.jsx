import {  Table } from "react-bootstrap"


export const Description = function({ok}) {
    const {data} = ok;
    
    //TODO fix the table so that details are displayed in a better way
    return(
        
  
        
            <Table striped bordered hover responsive>
                <tbody>
                    <tr>
                    <th><strong>Tipo de Immueble</strong></th>
                    <th><strong>Metros Cuadrados</strong></th>
                    <th><strong>Habitaciones</strong></th>
                    <th><strong>Piscina</strong></th>
                    <th><strong>Sala/s</strong></th>
                    </tr>

                    <tr>
                    <td>{data.attributes.type}</td>
                    <td>{data.attributes.Dimension} m2</td>
                    <td>{data.attributes.bedrooms}</td>
                    <td>{data.attributes.swimming_pool ? 'Sí' : 'No'}</td>
                    <td>{data.attributes.living_rooms}</td>
                    
                    </tr>

                    <tr>
                    <th><strong>Cocina</strong></th>
                    <th><strong>Baños</strong></th>
                    <th><strong>Dirección</strong></th>
                    <th><strong>Parqueos</strong></th>
                    <th><strong>Disponible</strong></th>
                    </tr>

                    <tr>
                    <td>{data.attributes.kitchen}</td>
                    <td>{data.attributes.bathrooms}</td>
                    <td>{data.attributes.direction}</td>
                    <td>{data.attributes.Parking_lots}</td>
                    <td><strong>Sí</strong></td>
                    </tr>
                </tbody>
            </Table>


                    
                )
            }