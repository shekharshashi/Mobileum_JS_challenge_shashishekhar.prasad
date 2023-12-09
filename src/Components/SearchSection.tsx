import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const SearchBar = styled.div`
    .search-wrap{
        input{
            border: 1px solid #ccc;
            border-radius: 2px;
            min-height :30px;
            background: #fff;
        }
        button{
            position: absolute;
            right: 0;
            top: 0;
            background: transparent;
            border: 0;
            color: #686767;
        }
    }
`;

export default function Searchbar(){
    return(
        <SearchBar>
            <Container>
                <Row className='justify-content-end'>
                    <Col>
                        <div className='position-relative search-wrap text-end'>
                            <input type="text"/>  
                            <button><i className="fa fa-search" aria-hidden="true"></i></button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </SearchBar>
    )
};