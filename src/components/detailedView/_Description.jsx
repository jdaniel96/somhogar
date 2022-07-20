import { Container, Table } from "react-bootstrap"


export const Description = function({ok}) {
    const {data} = ok;
    return(
        <>
        <Container className="mt-5 mb-5" >
        
        <Table striped bordered hover>
          
            <tbody>
                <tr>
                <td><strong>Tipo de Immueble</strong></td>
                <td><strong>Metros Cuadrados</strong></td>
                <td><strong>Habitaciones</strong></td>
                <td><strong>Piscina</strong></td>
                <td><strong>Sala/s</strong></td>
                </tr>

                <tr>
                <td>{data.attributes.type}</td>
                <td>{data.attributes.Dimension} m2</td>
                <td>{data.attributes.bedrooms}</td>
                <td>{data.attributes.swimming_pool ? 'Sí' : 'No'}</td>
                <td>{data.attributes.living_rooms}</td>
                
                </tr>

                <tr>
                <td><strong>Cocina</strong></td>
                <td><strong>Baños</strong></td>
                <td><strong>Dirección</strong></td>
                <td><strong>Parqueos</strong></td>
                </tr>

                <tr>
                <td>{data.attributes.kitchen}</td>
                <td>{data.attributes.bathrooms}</td>
                <td>{data.attributes.direction}</td>
                <td>{data.attributes.Parking_lots}</td>
                </tr>
            </tbody>
            </Table>
                    </Container>
                    </>
                )
            }