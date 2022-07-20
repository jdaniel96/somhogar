import { MDBFooter } from 'mdb-react-ui-kit';
import React from 'react';


export const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/SomHogarRealty' className='me-4'>
          <i className='fab fa-facebook'></i>
          </a>
          {/* <a  href='3' className='me-4'>
            <i className='fab fa-twitter'></i>
          </a> */}
          {/* <a href='3' className='me-4'>
            <i className='fab fa-google'></i>
          </a> */}
          <a  style={{color:'red'}}href='https://www.instagram.com/somhogarrd/' className='me-4'>
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Somhogar Realty
              </h6>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium sunt aut enim cumque repellat deleniti modi est nostrum at eum inventore voluptatum neque quaerat explicabo et, nisi quos. Fugiat, sit?
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>PROPIEDADES</h6>
              <p>
                <a href='/rent' className='text-reset'>
                En alquiler
                </a>
              </p>
              <p>
                <a href='/properties' className='text-reset'>
                 Todas las propiedades
                </a>
              </p>
              <p>
                <a href='/sell' className='text-reset'>
                  En Venta
                </a>
              </p>
              {/* <p>
                <a href='#!' className='text-reset'>
                 En Alquiler
                </a>
              </p> */}
            </div>

            {/* <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div> */}

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i>  Av. José Contreras 28, Santo Domingo 10103
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                somhogarRealty@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> +1 809-674-7878
              </p>
              {/* <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright 
        <a style={{paddingLeft:'5px', textDecoration:'none'}} className='text-reset' href='https://mdbootstrap.com/'>
           Somhogar Realty
        </a>
      </div>
    </MDBFooter>
  );
}