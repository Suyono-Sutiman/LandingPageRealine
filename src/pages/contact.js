import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap"
import Mess from "../components/for"

const Contact = () => (
  <Layout>
    <SEO title="Contact"/>
    <Jumbotron fluid className="hero cont">
      <Container>
              <h1 className='dpt' >CONTACT US</h1>
              <p className='dpl'>
              We would love to help.
            </p>
      </Container>
    </Jumbotron>
    <Jumbotron fluid style={{background:'#fff', color:'#000'}}>
      <Container>
        <Row>
          <Col xs={12} md={{span:4, offset:1}}>
            <p>
            Whether you are looking for help with <span>marketing</span>, <span>web development</span>, 
            <span> search engine optimization</span>, or something else, we would love to help. Send us 
            a message and we will get back to you as soon as possible. 
            </p>
          </Col>
          <Col xs={12} md={{span:4, offset:2}}>
            <h5>Address</h5>
            <p>
            Perumahan Mediterania<br/>
            Blok F3/24, Sukamulya<br/>
            Cikupa, Tangerang<br/>
            Banten
            </p>
            <h5>Phone</h5>
            <p>
            Mobile & Whatsapp: <Button variant="warning" size='sm' href='https:wa.me/6281219013721' >
                        081219013721
            </Button>
            </p>
          </Col>
        </Row>
      </Container>
      <Container style={{textAlign:'center', padding:'2rem', background:'#242424'}}>
            <h5 style={{color:'#ffba00', marginBottom:'2rem'}} className='dpc'>
            Already know what you want? Get an instant quote for your project!
            </h5>
            <Button variant="warning" size='lg' href='https:wa.me/6281219013721' >
            GET A QUOTE
            </Button>
      </Container>
        <Mess/>
    </Jumbotron>
  </Layout>
)

export default Contact
