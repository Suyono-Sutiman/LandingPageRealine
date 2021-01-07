import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Jumbotron, Row, Col, Button } from "react-bootstrap"
import Mess from "../components/for"
import {MdAssignment, MdPageview, MdLaunch} from 'react-icons/md'

const Seo = () => (
  <Layout>
    <SEO 
    title="SEO" 
    description=
    'Search Engine Optimization, SEO is more than just incorporating keywords, let us help you to optimize all SEO elements'/>
    <Jumbotron fluid className="hero seo">
      <Container>
              <h1 className='dpt' >Search</h1>
              <h1 className='dpt'>Engine</h1>
              <h1 className='dpt'>Optimization</h1>
              <p className='dpl'>
              SEO lebih dari sekadar memasukkan kata kunci, izinkan kami membantu Anda mengoptimalkan semua elemen SEO.
            </p>
      </Container>
    </Jumbotron>
    <Jumbotron fluid style={{background:'#fff', color:'#000'}}>
      <Container style={{textAlign:'center'}} >
        <h4>MENGAPA OPTIMASI MESIN PENCARI PENTING</h4>
        <p>
        SEO mengacu pada pengaturan dan pengoptimalan elemen tertentu di situs Anda untuk memudahkan mesin pencari, 
        seperti Google dan Bing, untuk menemukan dan mengevaluasi informasi yang tersedia. Ini akan meningkatkan 
        kemungkinan peringkat situs web Anda lebih tinggi di halaman hasil pencarian organik. Pengoptimalan mesin 
        telusur membantu Anda menjangkau audiens target saat mereka secara aktif mencari informasi yang terkait 
        dengan produk dan layanan Anda secara online. Tanpa SEO, Anda berisiko kehilangan klien potensial karena 
        pesaing Anda, karena situs web mereka lebih mudah diakses dan muncul lebih tinggi di hasil pencarian. 
        Realine dapat membantu Anda meningkatkan strategi pemasaran SEO Anda, sehingga meningkatkan lalu lintas 
        organik ke situs web Anda. Saat kami berupaya mengevaluasi posisi Anda saat ini dan meningkatkan peringkat 
        Anda dalam hasil pencarian, bisnis dan kehadiran online Anda akan tumbuh.
        </p>
        <Row style={{marginTop:'2rem', textAlign:'left'}} >
          <Col xs={12} md={4}>
            <h5><MdAssignment/> SEO On Page</h5>
            <p>
            Kami akan mengevaluasi strategi SEO Anda saat ini melalui audit SEO teknis. Analisis lanjutan ini 
            mencakup rekomendasi untuk perbaikan, laporan penelitian kata kunci yang mendalam, serta pengoptimalan 
            halaman dan saran pemasaran konten.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h5><MdPageview/> SEO Teknis</h5>
            <p>
            Mesin pencari merayapi situs Anda untuk mendapatkan informasi. Untuk memastikan tidak ada penghalang 
            teknis yang dapat memengaruhi kinerja situs Anda, kami akan mengoptimalkan struktur situs web dan 
            elemen teknis situs Anda. Ini akan meningkatkan kemudahan situs web Anda untuk ditemukan.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h5><MdLaunch/> SEO Off Page</h5>
            <p>
            Saat mesin telusur menentukan peringkat Anda, mereka juga mempertimbangkan keberadaan situs web Anda 
            di internet yang lebih luas. Kami membantu memastikan Anda membangun koneksi yang tepat melalui 
            implementasi pembuatan tautan yang benar.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h4 style={{textAlign:'center', marginTop:'2rem'}}>Proses Kami</h4>
        <Row>
          <Col xs={12} md={4} >
            <h6>| Step 1</h6>
            <h5>Analisa</h5>
            <p>
            Prosesnya dimulai dengan analisis dasar pada penyiapan situs web Anda saat ini. Dalam analisis 
            ini kami akan melaporkan masalah yang ada dari sudut pandang teknis. Selain itu, kami akan 
            mengevaluasi profil backlink Anda dan lanskap kompetitif untuk membuat peta jalan SEO yang efektif.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h6>| Step 2</h6>
            <h5>Penerapan</h5>
            <p>
            Setelah analisis dasar kami, kami akan mulai membuat penyesuaian pada situs web Anda. 
            Perubahan akan mencakup pengoptimalan teknis, peningkatan konten situs, implementasi kata kunci, 
            dan pembuatan tautan.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h6>| Step 3</h6>
            <h5>Hasil</h5>
            <p>
            Selama proses pengoptimalan kami, kemampuan ditemukan online Anda akan semakin meningkat. 
            Ini akan meningkatkan lebih banyak lalu lintas situs web organik dan penjualan.
            </p>
          </Col>
        </Row>
      </Container>
      <Container style={{textAlign:'center', padding:'2rem', background:'#242424'}}>
          <h5 style={{color:'#ffba00'}}>
          94% lebih banyak lalu lintas organik dibandingkan tahun lalu
          </h5>
          <p style={{color:'#ffffff'}}>
          “Pencarian ahli SEO jujur ​​yang kompeten sangat sulit. Kami beruntung ada yang merekomendasikan Realine 
          kepada kami. Kami meminta mereka membuat presentasi, kami mengevaluasinya, dan maju sebagai klien. 
          Sekarang sudah 6 bulan dan peringkat Google serta lalu lintas situs web kami telah meningkat secara 
          signifikan sebagai hasil dari tindakan SEO mereka. Kami sangat puas dengan layanan dan hasil mereka."
          </p>
          <h6 style={{color:'#ffba00'}}>Endah Prastya</h6>
          <p style={{color:'#ffba00'}}>
          Owner / Marketing Director @ Beauty Treat
          </p>
      </Container>
      <Container style={{textAlign:'center', padding:'2rem', background:'#242424', marginTop:'2rem'}}>
            <h5 style={{color:'#ffba00', marginBottom:'2rem'}} className='dpc'>
            Sudah menemukan apa yang anda inginkan? Dapatkan penawaran harga instan untuk Anda!
            </h5>
            <a href='https://wa.me/6281219013721?text=SEO%0D%0ANama+Anda%3A+'>
            <Button variant="warning" size='lg'>
            DAPATKAN PENAWARAN
            </Button></a>
      </Container>
        <Mess/>
    </Jumbotron>
  </Layout>
)

export default Seo
