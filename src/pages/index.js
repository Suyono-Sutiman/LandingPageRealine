import React from "react"
import { Link } from "gatsby"

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from '../components/about'
import Devsm from "../components/devsm";
import Serv from '../components/serv'
import Chal from '../components/chal'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron fluid className="hero">
      <Container>
              <h1 className='dpt' >Digital</h1>
              <h1 className='dpt'>Marketing</h1>
              <Link to='#Services'>
              <Button variant='light' size='lg'>READ MORE</Button>
              </Link>
      </Container>
    </Jumbotron>
    <About/>
    <Devsm/>
    <Serv/>
    <Chal/>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">hgdtdgfjhik</Link>
  </Layout>
)

export default IndexPage
