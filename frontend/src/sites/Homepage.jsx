import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import Template from './components/template'

const HomePage = props => {
    return (
        <div>
            <Template />
            <Container>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <div style={{
                            marginTop: "30%"
                        }}>
                            <h1 style={{
                                color: "white",
                                textShadow: "0 0 3px #000000, 0 0 5px #000000"
                            }}>tConference</h1>
                            <h3 style={{
                                color: "#BBBBBB",
                                textShadow: "0 0 3px #000000, 0 0 5px #000000"
                            }}>The educated answer for educating needs.</h3>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default HomePage;