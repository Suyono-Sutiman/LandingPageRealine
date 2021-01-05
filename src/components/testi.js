import React from 'react'

import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

function Testi () {
    return (
        <Container style={{textAlign:'center', padding:'2rem'}} >
            <Carousel>
            <Carousel.Item>
                <h5>90.7% new user growth in the last 3 months</h5>
                <p>
                We started working with Realine in October 2019 when they created a new 
                website for us and started managing our digital marketing. We are very glad we 
                decided to work with them, and they have done a great job on the website and in 
                the marketing. It is really great how easy our website is to manage and how many 
                more inquiries we have had since we made the change. It is wonderful how well 
                Realine knows their job and the amazing positive attitude and openness 
                they have for any suggestions that might arise. We are very happy and we want 
                to thank them for a great service!
                </p>
                <h6>M. Hambali</h6>
                <p>Reservations & Manager @ JJ interprice</p>
            </Carousel.Item>
            <Carousel.Item>
                <h5>We are very satisfied with the new website</h5>
                <p>
                Because of the pleasant and fast communication, the competitive prices and the 
                thinking, we have chosen Realine to build our new website. We 
                are very satisfied with the collaboration and the new website!
                </p>
                <h6>Budi Hartono</h6>
                <p>Owner @ Foodshop</p>
            </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default Testi;