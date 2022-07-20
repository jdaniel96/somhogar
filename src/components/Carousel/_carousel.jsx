import {Carousel} from 'react-bootstrap'




export const CarouselSomhogar = ({data}) => {
    //pass in the data object
    // console.log(data.data.attributes.photos.data);
    const {photos} = data.data.attributes;
    console.log(photos.data)
    // console.log('hhe')
    // https://somhogaradmin.herokuapp.com/api/properties/${photo.attributes.url}`
    // https://somhogaradmin.herokuapp.com${value.attributes.photos.data[0].attributes.url}
    return(
         <Carousel className='rounded' >

        {photos.data && photos.data.map((photo, index) =>
        <Carousel.Item style={{height:'20em'}}  key={index}>
        <img style={{objectFit:'cover', height:'100%', width:'100%'}}
        className="d-block w-100"
        src={photo.attributes.url}
        alt="SomHogar Realty Photos"
        />
         </Carousel.Item>
        )} 
        
       
    </Carousel>
    )
}



