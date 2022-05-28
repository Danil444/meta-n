import React, { Component } from "react";
import Slider from "react-slick";
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Sliders = ()=>{
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 1
    };
const posts=[1,2,3,4];
const styles={
  width: '400px',
  position: ''
}

    return (
      <div>
        <div style={{marginTop:"20px"}}>
          <Slider {...settings}>
            <Card class="card">
              <Card.Body>
                <Card.Title>2020</Card.Title>
                <Card.Text>
                  dfsuhuisdf asdfjhsdahf dsafhasd
                </Card.Text>
                
              </Card.Body>
            </Card>
            <Card style={styles}>
              <Card.Body>
                <Card.Title>2020</Card.Title>
                <Card.Text>
                  dfsuhuisdf asdfjhsdahf dsafhasd
                </Card.Text>
                
              </Card.Body>
            </Card>
            <Card style={styles}>
              <Card.Body>
                <Card.Title>2020</Card.Title>
                <Card.Text>
                  dfsuhuisdf asdfjhsdahf dsafhasd
                </Card.Text>
                
              </Card.Body>
            </Card>
            <Card class="card">
              <Card.Body>
                <Card.Title>2022</Card.Title>
                <Card.Text>
                  dfsuhuisdf asdfjhsdahf dsafhasd
                </Card.Text>
                
              </Card.Body>
            </Card>
            <Card style={styles}>
              <Card.Body>
                <Card.Title>2020</Card.Title>
                <Card.Text>
                  dfsuhuisdf asdfjhsdahf dsafhasd
                </Card.Text>
                
              </Card.Body>
            </Card>
            <Card class="card">
              <Card.Body>
                <Card.Title>2022</Card.Title>
                <Card.Text>
                  dfsuhuisdf asdfjhsdahf dsafhasd
                </Card.Text>
                
              </Card.Body>
            </Card>
            <Card style={styles}>
              <Card.Body>
                <Card.Title>2020</Card.Title>
                <Card.Text>
                  dfsuhuisdf asdfjhsdahf dsafhasd
                </Card.Text>
                
              </Card.Body>
            </Card>
            <Card class="card">
              <Card.Body>
                <Card.Title>2022</Card.Title>
                <Card.Text>
                  dfsuhuisdf asdfjhsdahf dsafhasd
                </Card.Text>
                
              </Card.Body>
            </Card>
          </Slider>
        </div>
      </div>
    );
}
export default Sliders;