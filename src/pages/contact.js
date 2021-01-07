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
              <h1 className='dpt' >HUBUNGI KAMI</h1>
              <p className='dpl'>
              Kami akan sangat senang membantu anda.
            </p>
      </Container>
    </Jumbotron>
    <Jumbotron fluid style={{background:'#fff', color:'#000'}}>
      <Container>
        <Row>
          <Col xs={12} md={{span:4, offset:1}}>
            <p>
            Apakah Anda sedang mencari bantuan dengan <span>marketing</span>, <span>web development</span>, 
            <span> search engine optimization</span>, atau sesuatu yang lain, kami ingin membantu. 
            Kirim pesan kepada kami dan kami akan segera menghubungi Anda.
            </p>
          </Col>
          <Col xs={12} md={{span:4, offset:2}}>
            <h5>Alamat</h5>
            <p>
            Perumahan Mediterania<br/>
            Blok F3/24, Sukamulya<br/>
            Cikupa, Tangerang<br/>
            Banten
            </p>
            <h5>Telepon</h5>
            <p>
            Mobile & Whatsapp: <a href='https://wa.me/6281219013721'>
            <Button variant="warning" size='sm'>
              081219013721
            </Button>
            </a>
            </p>
          </Col>
        </Row>
      </Container>
      <Container style={{textAlign:'center', padding:'2rem', background:'#242424'}}>
            <h5 style={{color:'#ffba00', marginBottom:'2rem'}} className='dpc'>
            Sudah menemukan apa yang anda inginkan? Dapatkan penawaran harga instan untuk Anda!
            </h5>
            <a href='https://wa.me/6281219013721?text=Nama+Anda%3A+'>
            <Button variant="warning" size='lg'>
            DAPATKAN PENAWARAN
            </Button></a>
      </Container>
        <Mess/>
    </Jumbotron>
  </Layout>
)

export default Contact
