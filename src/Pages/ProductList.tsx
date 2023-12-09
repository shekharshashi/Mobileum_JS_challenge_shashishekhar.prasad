import React , {useEffect,useState} from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import HeaderTitle from '../Components/HeaderTitle';
import Searchbar from '../Components/SearchSection';
import { API, Smartphone } from '../Api/api'; 

const ProductListStyle = styled.ul`
    list-style: none;
    li{
        .list-wrap{
            cursor: pointer;
            min-height: 90px;
            position: relative;
            padding: 15px 15px 15px 90px;
            background-color: #f3f5f6;
            margin-bottom: 15px;
            color: #363537;
            @media (min-width: 992px){
                margin-bottom: 0;
            }
        }
        p{
            margin: 0;
            font-size: 14px;
            &.model{
                font-weight: bold;
            }
        }
        .product-image{
            width: 60px;
            height: 60px;
            border-radius: 50%;
            border: 2px solid #000;
            position: absolute;
            left: 15px;
            top: 15px;
        }

    }
`;

export default function ProductList(){
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
  console.log({smartphones});
    return (
        <>
            <HeaderTitle name="Dashboard"/>
            <Searchbar/>
            <Container className='my-3'>
                <ProductListStyle className='p-0 row'>
                    {smartphones.map((item,index)=>{
                    return <li className="col-12 col-md-6 col-lg-3" key={index}>
                        <div className='list-wrap'>
                            <img className='product-image'src={item.image}/>
                            <p className='model'>{item.name}</p>
                            <p className='brand'>{item.brand}</p>
                        </div>
                    </li>
                    })}
                    
                </ProductListStyle>
            </Container>
        </>
    )
};