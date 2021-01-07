import React from 'react'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Mess () {
    return (
        <Container style={{marginTop:'2rem'}} >
            <Row>
                <Col xs={12} md={{span:6, offset:3}}>
                <h4>AYO MULAI PERCAKAPAN</h4>
                    <Form action="https://formsubmit.co/b9c481a8f1d3f397b40f33c1e2ad394c" method="POST">
                    <Form.Group controlId="Name">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="text" placeholder="Nama Anda" name='Name' required/>
                    </Form.Group>

                    <Form.Group controlId="Email">
                        <Form.Label>Alamat Email</Form.Label>
                        <Form.Control type="email" placeholder="Email Anda" name='Email' required/>
                        <Form.Text className="text-muted">
                        Kami tidak akan pernah membagikan email Anda dengan orang lain.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="Telepon">
                        <Form.Label>Telepon</Form.Label>
                        <Form.Control type="tel" placeholder="Nomor Telepon Anda" name='Telepon' pattern='[0-9]{6,12}' required/>
                    </Form.Group>
                    <Form.Group controlId="Textarea">
                        <Form.Label>Pesan</Form.Label>
                        <Form.Control as="textarea" rows={3} name='Textarea'/>
                    </Form.Group>
                    <input type="hidden" name="_next" value="https://suyono-sutiman.github.io/LandingpageRealine/">

                    </input>
                    <input type="hidden" name="_captcha" value="false"></input>
                    <Button variant="warning" type="submit">
                        Kirim
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
export default Mess;