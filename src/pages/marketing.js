import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import Mess from "../components/for"
import {MdDescription, MdSupervisorAccount, MdTrendingUp} from 'react-icons/md'

const Marketing = () => (
  <Layout>
    <SEO 
    title="Social Media Marketing" 
    description= 'Social Media Marketing, Engage with your customers and increase social media results.'/>
    <Jumbotron fluid className="hero mar">
      <Container>
              <h1 className='dpt' >Social</h1>
              <h1 className='dpt'>Media</h1>
              <h1 className='dpt'>Marketing</h1>
              <p className='dpl'>
                Engage with your customers, watch your social following grow, 
                and increase social media results.
            </p>
      </Container>
    </Jumbotron>
    <Jumbotron fluid style={{background:'#fff', color:'#000'}}>
      <Container style={{textAlign:'center'}} >
        <h4>WHY SOCIAL MEDIA ADVERTISING MATTERS</h4>
        <p>
        Paid advertisements on social media are a great way to reach new customers while re-engaging 
        with existing ones. But only if it’s done effectively! Otherwise, you are throwing money into 
        a void with a random chance of seeing results. There are many social platforms out there and 
        the decision of where and how to run advertisements makes it even more complex. With our 
        knowledge and expertise we can help you create (more) effective social ads. 
        </p>
        <Row style={{marginTop:'2rem', textAlign:'left'}} >
          <Col xs={12} md={4}>
            <h5><MdDescription/> Ad Creation</h5>
            <p>
            For every social media network we will create unique advertisements. Because, what works 
            for one network doesn’t necessarily work on others. This will make your ads stand out from 
            the competition.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h5><MdSupervisorAccount/> Audience Segmentation</h5>
            <p>
            Advertisements are a waste of money if they are shown to the wrong people. 
            Therefore, we will segment your audience to ensure the right ads are displayed to the 
            right people.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h5><MdTrendingUp/> Testing & Optimization</h5>
            <p>
            Our work is never done. Once we have implemented a paid social strategy, we will test the 
            advertisements and continue to make changes in order to optimize results.
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <h4 style={{textAlign:'center', marginTop:'2rem'}}>Our Process</h4>
        <Row>
          <Col xs={12} md={{span:4, offset:1}} >
            <h6>| Step 1</h6>
            <h5>Create & Test Ads</h5>
            <p>
            We will create various advertisements, testing with several messages, images, and targeting 
            audiences. Once the ads are launched we continue optimizing them until we find the best 
            combination. 
            </p>
          </Col>
          <Col xs={12} md={{span:4, offset:2}}>
            <h6>| Step 2</h6>
            <h5>Results & Growth</h5>
            <p>
            The optimizations we make will improve your paid social results. You will see an increase in 
            your social media following, brand awareness, and conversions. 
            This results in making more money.
            </p>
          </Col>
        </Row>
      </Container>
      <Container style={{textAlign:'center', padding:'2rem', background:'#242424'}}>
          <h5 style={{color:'#ffba00'}}>
          116.14% more social traffic compared to last year
          </h5>
          <p style={{color:'#ffffff'}}>
          “In 2018 I started with Grid Marketing in order to raise brand awareness and increase sales 
          via Social Media Advertising. Since then I have experienced a noticeable growth within my 
          target audience. The communication is quick and professional and during the monthly analyses 
          due consideration is always given to my personal wishes and ideas. I would certainly 
          recommend Grid Marketing to any company that wants to get more out of their Social 
          Media campaigns!”
          </p>
          <h6 style={{color:'#ffba00'}}>Eva Luna</h6>
          <p style={{color:'#ffba00'}}>
          Online Health & Lifestyle Coach @ Eva Luna Lifestyle
          </p>
      </Container>
        <Mess/>
    </Jumbotron>
  </Layout>
)

export default Marketing
