import React from "react"
import { Link } from "gatsby"

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbotron fluid className="hero">
            <Container>
                    <h1 className='dpt' >Digital</h1>
                    <h1 className='dpt'>Marketing</h1>
                    <Button variant='light' size='lg' href='#About' >READ MORE</Button>
            </Container>
        </Jumbotron>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
