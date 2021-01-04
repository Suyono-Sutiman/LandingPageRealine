import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from "./header"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'
import {FaWhatsappSquare,} from 'react-icons/fa'
import {FaCopyright} from 'react-icons/fa'
import Chal from './chal'
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Navi siteTitle={data.site.siteMetadata?.title || `Title`} />
      
        <main>{children}</main>
        
        <footer>
          <Chal/>
        <Container style={{marginTop:'2rem'}} >
            <Row>
                <Col xs={1} md={1} style={{background:'#ffba00'}} ></Col>
                <Col >
                    <Row>
                        <Col xs={12} md={6}>
                            <h5>Address</h5>
                            <p>
                                Perumahan Mediterania<br/>
                                Blok F3/24, Sukamulya<br/>
                                Cikupa, Tangerang<br/>
                                Banten<br/>
                                Phone: 021-5964 5635
                            </p>
                        </Col>
                        <Col >
                            <Row>
                                <Col>
                                | Find Us Here<br/>
                                <Row>
                                    <Col xs={2}>
                                    <FaInstagramSquare/></Col>
                                    <Col xs={2}>
                                    <FaFacebookSquare/></Col>
                                    <Col xs={2}>
                                    <FaTwitterSquare/></Col>
                                    <Col xs={2}>
                                    <FaWhatsappSquare/></Col>
                                </Row>
                                </Col>
                                <Col>
                                | Ask As Here<br/>
                                <Link to='/' style={{color:'#ffba00'}}>WWW.REALINE.MY.ID</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <p style={{fontSize:'14px', textAlign:'center'}} >
                Copyright<FaCopyright/>2021. Realine. All Rights Reserved
            </p>
            </Container>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
