import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

function About () {
    return (
        <Container style={{textAlign:'center'}} id='Services' className='bts' >
            <Row>
                <Col xs={{span: 8, offset: 2}} className='tp' >
                <h4>
                   DIGITAL MARKETING & WEB DEVELOPMENT
                </h4>
                </Col>
                <Col xs={{span:10,offset:1}} className='bw' >
                <p>Kami membantu bisnis mendapatkan lebih banyak prospek dan brand awareness 
                    dengan menilai kembali dan meningkatkan kehadiran online mereka. 
                    Kami menyediakan desain web unik yang dikombinasikan dengan pengoptimalan 
                    search engine (SEO), iklan online, dan strategi konten untuk memastikan pertumbuhan bisnis.
                </p>
                </Col>
            </Row>
        </Container>
    )
}
export default About;