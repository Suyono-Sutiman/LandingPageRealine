import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button  from 'react-bootstrap/Button'
import Mess from './for'


function Serv () {
    return (
        <Jumbotron fluid style={{background:'#fff', color:'#000'}}>
        <Container>
            <h4 style={{textAlign:'center', marginBottom:'2rem', color:'#ffba00'}} >
            Industri yang kami layani
            </h4>
            <Row>
                <Col xs={12} md={6} >
                <h5>Real Estate</h5>
                <p>Kami bekerja sama dengan agen / brokers perumahan untuk membantu mereka 
                    memperluas jangkauan dan mendapatkan prospek dan penawaran yang 
                    lebih baik di bidang perumahan.
                </p>
                </Col>
                <Col xs={12} md={6} >
                    <h5>Health Care</h5>
                    <p>Kami bekerja dengan profesional perawatan kesehatan seperti pelatih 
                        kesehatan, pelatih pribadi, dan terapis fisik untuk memposisikan diri 
                        sebagai ahli terkemuka di bidangnya.
                    </p>
                </Col>
                <Col xs={12} md={6} >
                <h5>B2B (Business to Business) & B2C (Business to Customer)</h5>
                <p>Kami membantu perusahaan B2B & B2C dengan membuat konten yang berharga, 
                    pencitraan merek yang konsisten, dan kehadiran online yang optimal 
                    untuk perolehan prospek maksimum.
                </p>
                </Col>
                <Col xs={12} md={6} >
                    <h5>Pariwisata</h5>
                    <p>Kami bekerja dengan perusahaan tur liburan, agen perjalanan, 
                        dan banyak lagi. Kami membantu mereka mengembangkan visibilitas 
                        online mereka, mengoptimalkan nilai merek mereka, dan menarik 
                        lebih banyak klien melalui pemasaran digital.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col 
                xs={{span:10,offset:2}}
                md={{span:6, offset:4}}
                style={{background:'#242424',
                        color:'#fff',
                        padding:'1rem'}}
                >
                    <p>Jika Anda tidak melihat industri Anda tercantum, jangan khawatir. 
                        Kami percaya bahwa membangun fondasi yang kuat dan mengembangkan 
                        keberadaan online yang kokoh dapat membawa bisnis apa pun ke 
                        level berikutnya.
                    </p>
                </Col>
                <Col
                xs={12}
                md={10}
                style={{marginTop:'-1.5rem', textAlign:'right'}}>
                    <a href='https://wa.me/6281219013721?text=Nama+Anda%3A+'>
                    <Button variant="warning" style={{border:'3px solid #fff'}} >KONSULTASI</Button>
                    </a>
                </Col>
            </Row>
            <Mess/>
        </Container>
        </Jumbotron>
    )
}

export default Serv;