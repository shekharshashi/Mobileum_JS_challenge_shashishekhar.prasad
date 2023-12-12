import React , {useEffect,useState} from "react";
import styled from 'styled-components';
import HeaderTitle from '../Components/HeaderTitle';
import { API, Smartphone } from './api'; 

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
                margin: 0 10px;
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
            top: 6px;
            background: transparent;
            border: 0;
            color: #686767;
        }
    }
`;

export default function ProductList(){
    const [smartphones, setSmartphones] = useState<Smartphone[]>([]);
    const [search, setSearch]: [string, (search: string) => void] = React.useState("");
    const handleChange = (e: { target: { value: string; }; }) => {
        setSearch(e.target.value);
    };
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
            <HeaderTitle name="Dashboard"/>
            <SearchBar>
                <div className="container">
                    <div className='row justify-content-end'>
                        <div className="col">
                            <div className='position-relative search-wrap text-end'>
                                <input type="text" onChange={(e)=>handleChange(e)} />  
                                <button>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>    
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </SearchBar>
            <div className='container my-3'>
                <ProductListStyle className='p-0 row'>
                    {smartphones.map((item,index)=>{
                        if (search == "" || item.name.toLowerCase().includes(search.toLowerCase()) || item.brand.toLowerCase().includes(search.toLowerCase())) {
                            return <li className="col-12 col-md-6 col-lg-3" key={index}>
                                <div className='list-wrap'>
                                    <img className='product-image'src={item.image}/>
                                    <p className='model'>{item.name}</p>
                                    <p className='brand'>{item.brand}</p>
                                </div>
                            </li>
                        }
                        return null;
                    })}
                </ProductListStyle>
            </div>
        </>
    )
};