/* eslint-disable react/prop-types */
import { Row, Container, Col } from "react-bootstrap"


const Form = ({ children }) => {
    return (
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col xs={ 12 } md= { 6 } className="card p-5">
                    { children }
                </Col>
            </Row>
        </Container>
    )
}

export default Form
