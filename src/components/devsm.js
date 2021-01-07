import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {MdSettingsInputComponent} from 'react-icons/md'
import {MdThumbUp} from 'react-icons/md'
import {MdFindInPage} from 'react-icons/md'
import { Link } from 'gatsby'

function Devsm () {
    return (
        <Jumbotron fluid className='devsm' >
        <Container>
            <Row>
                <Col xs={12} md={4}>
                    <Row>
                        <Col xs={1} >
                        <MdSettingsInputComponent/>
                        </Col>
                        <Col>
                        <Link to='/web-development/' style={{color:'#ffba00'}}>
                        <h5>Web Development & Design</h5>
                        </Link>
                        <p>Situs web adalah inti dari keberadaan online Anda. 
                            Kami akan membuat situs web fungsional yang disesuaikan 
                            untuk bisnis Anda dan mendorong hasil. Semua situs web 
                            kami menyertakan SEO, dan lead generation tools.
                        </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={4}>
                    <Row>
                        <Col xs={1}>
                            <MdThumbUp/>
                        </Col>
                        <Col>
                        <Link to='/marketing/' style={{color:'#ffba00'}}>
                        <h5>Social Media Marketing</h5>
                        </Link>
                        <p>
                        Kami membantu Anda dalam pengelolaan dan periklanan 
                        media sosial untuk membantu Anda mengembangkan bisnis 
                        dan menjangkau klien baru.
                        </p>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={4}>
                    <Row>
                        <Col xs={1}>
                            <MdFindInPage/>
                        </Col>
                        <Col>
                        <Link to='/search-engine-optimization/' style={{color:'#ffba00'}}>
                        <h5 >Search Engine Optimization</h5>
                        </Link>
                        <p>
                        Kami membantu Anda meningkatkan peringkat Google dan meningkatkan 
                        lalu lintas situs web organik (tidak berbayar) Anda. SEO lebih dari 
                        sekadar memasukkan kata kunci dan kami dapat membantu mengoptimalkan semua elemen.
                        </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </Jumbotron>
    )
}
export default Devsm;