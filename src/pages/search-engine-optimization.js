import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Jumbotron, Row, Col } from "react-bootstrap"
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
              SEO is more than just incorporating keywords, let us help you to optimize all SEO elements.
            </p>
      </Container>
    </Jumbotron>
    <Jumbotron fluid style={{background:'#fff', color:'#000'}}>
      <Container style={{textAlign:'center'}} >
        <h4>WHY SEARCH ENGINE OPTIMIZATION MATTERS</h4>
        <p>
        SEO refers to setting up and optimizing certain elements on your website to make it easier for 
        search engines, like Google and Bing, to find and evaluate the information available. This will 
        increase the likelihood of your website ranking higher in the organic search result pages. 
        Search engine optimization helps you reach your target audience when they are actively 
        searching online for information related to your products and services. Without SEO, you 
        risk losing potential clients to your competitors, because their website is more accessible 
        and appears higher in the search results. Grid Marketing can help you improve your SEO 
        marketing strategy, thereby increasing the organic traffic to your website. As we work to 
        evaluate your current standing and improve your rankings in the search results, your business 
        and online presence will grow. 
        </p>
        <Row style={{marginTop:'2rem', textAlign:'left'}} >
          <Col xs={12} md={4}>
            <h5><MdAssignment/> On Page SEO</h5>
            <p>
            We will evaluate your current SEO strategy by means of a technical SEO audit. This advanced 
            analysis includes recommendations for improvements, an in-depth keyword research report, 
            as well as page optimization and content marketing suggestions.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h5><MdPageview/> Technical SEO</h5>
            <p>
            Search engines crawl your site for information. To ensure there aren’t any technical 
            roadblocks that could affect your performance we will optimize your website’s structure 
            and technical elements. This will increase your website’s findability. 
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h5><MdLaunch/> Off Page SEO</h5>
            <p>
            When search engines are determining your rank, they also take your website’s presence on 
            the broader internet into consideration. We help to ensure you are building the right 
            connections through the correct implementation of linkbuilding. 
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h4 style={{textAlign:'center', marginTop:'2rem'}}>Our Process</h4>
        <Row>
          <Col xs={12} md={4} >
            <h6>| Step 1</h6>
            <h5>Analysis</h5>
            <p>
            The process begins with a baseline analysis on the current setup of your website. In this 
            analysis we will report on any existing problems from a technical standpoint.  Moreover, 
            we will evaluate your backlink profile and competitive landscape to create an effective 
            SEO roadmap.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h6>| Step 2</h6>
            <h5>Implementation</h5>
            <p>
            After our baseline analysis, we will start making adjustments to your website. 
            Changes will include technical optimizations, site content improvements, keyword 
            implementation, and link building.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h6>| Step 3</h6>
            <h5>Results</h5>
            <p>
            During our optimization process, your online findability will grow more and more. 
            This will translate in more organic website traffic and sales. 
            </p>
          </Col>
        </Row>
      </Container>
      <Container style={{textAlign:'center', padding:'2rem', background:'#242424'}}>
          <h5 style={{color:'#ffba00'}}>
          94% more organic traffic compared to last year
          </h5>
          <p style={{color:'#ffffff'}}>
          “The search for competent honest SEO experts is very harrowing. We were fortunate and had 
          Realine recommended to us. We had them make a presentation, we evaluated it, and went forward 
          as a client. It has now been 6 months and our Google rankings and website traffic have both 
          improved significantly as a result of their SEO actions. We could not be more satisfied with 
          their services and results.“
          </p>
          <h6 style={{color:'#ffba00'}}>Robert Shannon</h6>
          <p style={{color:'#ffba00'}}>
          Owner / Marketing Director @ Costa Rica Retirement Vacation Properties
          </p>
      </Container>
        <Mess/>
    </Jumbotron>
  </Layout>
)

export default Seo
