import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap"
import Mess from "../components/for"
import {MdDescription, MdSupervisorAccount, MdTrendingUp} from 'react-icons/md'

const Marketing = () => (
  <Layout>
    <SEO 
    title="Social Media Marketing" 
    description= 'Social Media Marketing, Libatkan pelanggan Anda, saksikan pengikut sosial Anda tumbuh, dan tingkatkan hasil media sosial.'/>
    <Jumbotron fluid className="hero mar">
      <Container>
              <h1 className='dpt' >Social</h1>
              <h1 className='dpt'>Media</h1>
              <h1 className='dpt'>Marketing</h1>
              <p className='dpl'>
              Libatkan pelanggan Anda, saksikan pengikut sosial Anda tumbuh, dan tingkatkan hasil media sosial.
            </p>
      </Container>
    </Jumbotron>
    <Jumbotron fluid style={{background:'#fff', color:'#000'}}>
      <Container style={{textAlign:'center'}} >
        <h4>MENGAPA PERIKLANAN MEDIA SOSIAL PENTING</h4>
        <p>
        Iklan berbayar di media sosial adalah cara yang bagus untuk menjangkau pelanggan baru sambil berinteraksi 
        kembali dengan yang sudah ada. Tetapi hanya jika itu dilakukan secara efektif! Jika tidak, Anda membuang 
        uang dengan peluang acak untuk melihat hasilnya. Ada banyak platform sosial di luar sana dan keputusan 
        tentang di mana dan bagaimana menjalankan iklan membuatnya semakin kompleks. Dengan pengetahuan dan 
        keahlian kami, kami dapat membantu Anda membuat iklan sosial yang (lebih) efektif.
        </p>
        <Row style={{marginTop:'2rem', textAlign:'left'}} >
          <Col xs={12} md={4}>
            <h5><MdDescription/> Pembuatan Iklan</h5>
            <p>
            Untuk setiap jaringan media sosial kami akan membuat iklan unik. Karena, apa yang berfungsi untuk 
            satu jaringan belum tentu berfungsi di jaringan lain. Ini akan membuat iklan Anda menonjol 
            dari persaingan.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h5><MdSupervisorAccount/> Segmentasi Audiens</h5>
            <p>
            Iklan akan membuang-buang uang jika ditampilkan kepada orang yang salah. Oleh karena itu, 
            kami akan menyegmentasikan audiens Anda untuk memastikan iklan yang tepat ditampilkan 
            kepada orang yang tepat.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h5><MdTrendingUp/> Pengujian & Optimasi</h5>
            <p>
            Pekerjaan kami tidak selesai disitu saja. Setelah kami menerapkan strategi sosial berbayar, 
            kami akan menguji iklan dan terus melakukan perubahan untuk mengoptimalkan hasil.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h4 style={{textAlign:'center', marginTop:'2rem'}}>Proses Kami</h4>
        <Row>
          <Col xs={12} md={{span:4, offset:1}} >
            <h6>| Step 1</h6>
            <h5>Buat & Uji Iklan</h5>
            <p>
            Kami akan membuat berbagai iklan, menguji dengan beberapa pesan, gambar, dan menargetkan audiens. 
            Setelah iklan diluncurkan, kami terus mengoptimalkannya hingga kami menemukan kombinasi terbaik.
            </p>
          </Col>
          <Col xs={12} md={{span:4, offset:2}}>
            <h6>| Step 2</h6>
            <h5>Hasil & Pertumbuhan</h5>
            <p>
            Pengoptimalan yang kami lakukan akan meningkatkan hasil sosial berbayar Anda. 
            Anda akan melihat peningkatan pengikut media sosial, kesadaran merek, dan konversi Anda. 
            Ini menghasilkan lebih banyak uang.
            </p>
          </Col>
        </Row>
      </Container>
      <Container style={{textAlign:'center', padding:'2rem', background:'#242424'}}>
          <h5 style={{color:'#ffba00'}}>
          116.14% lebih banyak lalu lintas sosial dibandingkan tahun lalu
          </h5>
          <p style={{color:'#ffffff'}}>
          “Pada tahun 2018 saya memulai dengan Realine untuk meningkatkan kesadaran merek dan meningkatkan 
          penjualan melalui Iklan Media Sosial. Sejak itu saya telah mengalami pertumbuhan yang nyata dalam 
          audiens target saya. Komunikasi cepat dan profesional dan selama analisis bulanan pertimbangan 
          selalu diberikan pada keinginan dan ide pribadi saya. Saya pasti akan merekomendasikan Realine 
          kepada perusahaan mana pun yang ingin memaksimalkan kampanye Media Sosial mereka! ”
          </p>
          <h6 style={{color:'#ffba00'}}>Ryan Angoro</h6>
          <p style={{color:'#ffba00'}}>
          Owner @ Martabak Surprice
          </p>
      </Container>
      <Container style={{textAlign:'center', padding:'2rem', background:'#242424', marginTop:'2rem'}}>
            <h5 style={{color:'#ffba00', marginBottom:'2rem'}} className='dpc'>
            Sudah menemukan apa yang anda inginkan? Dapatkan penawaran harga instan untuk Anda!
            </h5>
            <a href='https://wa.me/6281219013721?text=Digital+Marketing%0D%0ANama+Anda%3A+'>
            <Button variant="warning" size='lg'>
            DAPATKAN PENAWARAN
            </Button></a>
      </Container>
        <Mess/>
    </Jumbotron>
  </Layout>
)

export default Marketing
