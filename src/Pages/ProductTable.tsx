import React , { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';
import HeaderTitle from '../Components/HeaderTitle';
import { API, Smartphone } from './api'; 

const CreateNewBtn = styled.button`
    background-color: #000; 
    color: #fff;
    padding: 10px 15px;
    cursor: pointer;
    font-size: 13px;
    border: 0;
    border-radius: 6px;
`;
const ProductTableStyle = styled.table`
    border: 1px solid #ccc;
    border-radius: 3px;
    display: block;
    width: 100%;
    th, tr{
        border-bottom: 1px solid #ccc;
    }

    td{
        padding: 10px;
        vertical-align: top;
    }

    .product-image{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 2px solid #000;
    }
`;

export default function ProductTable(){
    const [smartphones, setSmartphones] = useState<Smartphone[]>([]);

    useEffect(() => {
        // Fetch data when the component mounts
        const fetchData = async () => {
          try {
            const data = await API.getAll();
            setSmartphones(data);
          } catch (error) {
            console.error(error);
          }
        };

        fetchData();
    }, []);

    return (
        <>
        <HeaderTitle name="Smartphones"/>
        <Container>
            <div className='d-flex justify-content-end'>
                <a href='/newProduct'><CreateNewBtn>Create new</CreateNewBtn></a>
            </div>
            <ProductTableStyle className='my-4'>
                <tbody>
                    <tr>
                        <td></td>
                        <td><b>Name</b></td>
                        <td><b>Brand</b></td>
                        <td><b>Description</b></td>
                    </tr>
                    {smartphones.map((item,index)=>{
                    return <tr key={index}>
                        <td><img className='product-image'src={item.image} /></td>
                        <td>{item.name}</td>
                        <td>{item.brand}</td>
                        <td>{item.description}</td>
                    </tr>
                    })}
                </tbody>
            </ProductTableStyle>
        </Container>
        </>
    )
}