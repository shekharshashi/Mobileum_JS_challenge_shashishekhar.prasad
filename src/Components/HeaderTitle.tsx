import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Heading = styled.h1`
  font-weight: bold;
  font-size: 22px;
  margin: 0;
  padding: 15px 0 0;
`;

export default function HeaderTitle(props){
    return(
        <Container>
            <Row>
                <Col>
                    <Heading>{props.name}</Heading> 
                </Col>
            </Row>
        </Container>
    )
};