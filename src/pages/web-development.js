import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Jumbotron, Row, Col, Card, Button } from "react-bootstrap"
import Mess from "../components/for"
import Testi from "../components/testi"
import noone from '../images/noone.png'
import jjinterprice from '../images/jjinterprice.png'
import coffee from '../images/coffee.png'
import foodshop from '../images/foodshop.png'
import portfolio from '../images/portfolio.png'

const SecondPage = () => (
  <Layout>
    <SEO 
        title="Web Development" 
        description= 'Web Development Agency, Build a website with marketing in mind.' />
    <Jumbotron fluid className="hero dev">
      <Container>
              <h1 className='dpt' >Web</h1>
              <h1 className='dpt'>Development</h1>
              <p className='dpl'>Bangun situs web dengan mempertimbangkan pemasaran.</p>
      </Container>
    </Jumbotron>
    <Jumbotron fluid style={{background:'#fff', color:'#000'}}>
      <Container style={{textAlign:'center'}} >
        <h4>MENGAPA PENGEMBANGAN & DESAIN WEB PENTING</h4>
        <p>
        Dengan keahlian dan pengetahuan kami, kami dapat membangun situs web berkualitas 
        tinggi yang menarik secara visual yang mendorong konversi untuk membantu mengembangkan 
        bisnis Anda. Kami bekerja sama dengan Anda untuk mengembangkan pemahaman yang mendalam 
        tentang tujuan dan industri perusahaan Anda untuk menerapkan elemen yang akan melibatkan 
        pengunjung Anda sejak mereka datang ke situs Anda.
        </p>
        <h4>Proses Kami</h4>
        <Row style={{marginTop:'1rem', textAlign:'left'}} >
          <Col xs={12} md={4}>
            <h6>| Step 1</h6>
            <h5>Perencanaan</h5>
            <p>
            Pertama, kami akan duduk bersama Anda dan tim Anda untuk mengevaluasi status situs web 
            Anda saat ini. Kami akan membahas tujuan Anda, dan memutuskan apa yang perlu dilakukan. 
            Setelah ini kami akan mengembangkan rencana, di mana kami menentukan struktur dan estetika 
            keseluruhan situs baru Anda. 
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h6>| Step 2</h6>
            <h5>Implementasi & Desain</h5>
            <p>
            Kami mulai menerapkan perubahan yang direncanakan ke situs Anda dan memasukkan desain baru. 
            Selama proses ini kami akan mengadakan putaran revisi untuk memastikan hasil akhir terbaik.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h6>| Step 3</h6>
            <h5>Pengiriman</h5>
            <p>
            Perubahan pada situs akan dipublikasikan dan situs web akan online! Kami akan terus memantau 
            kinerja situs Anda dan melakukan penyesuaian seperlunya untuk memastikan hasil yang optimal.
            </p>
          </Col>
        </Row>
      </Container>
      <Testi/>
      <Container>
        <Row>
          <Col xs={12} md={4} style={{marginBottom:'1rem'}}>
          <Card>
            <Card.Img src={noone}/>
            <Card.Body>
              <Card.Text>
                Noone
              </Card.Text>
              <Card.Title>Website Baru</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4}style={{marginBottom:'1rem'}}>
          <Card>
            <Card.Img src={jjinterprice}/>
            <Card.Body>
              <Card.Text>
                JJ Interprice
              </Card.Text>
              <Card.Title>Website Baru</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4}style={{marginBottom:'1rem'}}>
          <Card>
            <Card.Img src={coffee}/>
            <Card.Body>
              <Card.Text>
                Coffee Shop
              </Card.Text>
              <Card.Title>Website Baru</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4}style={{marginBottom:'1rem'}}>
          <Card>
            <Card.Img src={foodshop}/>
            <Card.Body>
              <Card.Text>
                Foodshop
              </Card.Text>
              <Card.Title>Website Baru</Card.Title>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={4}style={{marginBottom:'1rem'}}>
          <Card>
            <Card.Img src={portfolio}/>
            <Card.Body>
              <Card.Text>
                Portfolio
              </Card.Text>
              <Card.Title>Website Baru</Card.Title>
            </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>
      <Container style={{textAlign:'center', padding:'2rem', background:'#242424'}}>
            <h5 style={{color:'#ffba00', marginBottom:'2rem'}} className='dpc'>
            Sudah menemukan apa yang anda inginkan? Dapatkan penawaran harga instan untuk Anda!
            </h5>
            <a href='https://wa.me/6281219013721?text=Web+Development%0D%0ANama+Anda%3A+'>
            <Button variant="warning" size='lg'>
            DAPATKAN PENAWARAN
            </Button></a>
      </Container>
        <Mess/>
    </Jumbotron>
  </Layout>
)

export default SecondPage
