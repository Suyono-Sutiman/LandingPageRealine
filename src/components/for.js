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
                    <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="text" placeholder="Nama Anda" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Alamat Email</Form.Label>
                        <Form.Control type="email" placeholder="Email Anda" />
                        <Form.Text className="text-muted">
                        Kami tidak akan pernah membagikan email Anda dengan orang lain.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Label>Telepon</Form.Label>
                        <Form.Control type="tel" placeholder="Nomor Telepon Anda" />
                    </Form.Group>
                    <Form.Group controlId="formBasicTextarea">
                        <Form.Label>Pesan</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
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