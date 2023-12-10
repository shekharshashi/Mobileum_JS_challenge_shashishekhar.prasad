import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import { lightTheme, darkTheme } from "../Theme";
import  { useDarkMode } from "../useDarkMode";
import Toggle from "../Toggler";

const Nav = styled.nav`
    background-color: #dbe0e4;
    padding: 8px 15px;
    min-height: 50px;
    ul{
        list-style: none;
        padding: 0;
        li{
            padding-right: 10px;
            a{
                color: #000;
                text-decoration: none;
                font-weight: bold;
                &.active, &:hover{
                    text-decoration: underline;
                }
            }
        }
    }
    button{
        padding: 2px 10px;
        border: 1px solid #000;
        cursor: pointer;
        font-size: 13px;
        border-radius: 5px;
        margin: 5px 0 0 10px;
        &.dark{
            background-color: #000;
            color: #fff;
        }
        &.light{
            background-color: #fff;
            color: #000;
        }
    }
`;

export default function Navbar(){
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    return (
        <Nav>
            <Container>
                <Row className='justify-content-between align-items-center'>
                    <Col>
                        <ul className='d-flex m-0 justify-content-center justify-content-sm-start'>
                            <a href="/">Dashboard</a>
                            <a href="/productTable">Smartphones</a>
                        </ul>
                    </Col>

                    <Col className='text-center text-sm-end'>
                        <button className='light' onClick={themeToggler}>Light</button>
                        <button className="dark" onClick={themeToggler}>Dark</button>
                    </Col>
                </Row>
            </Container>
        </Nav>
    )
};