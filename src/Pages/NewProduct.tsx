import React, { useEffect, useState } from "react";
import HeaderTitle from '../Components/HeaderTitle';
import { API, Smartphone } from './api';
import styled from 'styled-components';

const FormStyle = styled.div`
    background: #f0f0f0;
    padding: 20px;
    margin: 0 auto;
    border-radius: 5px;
    @media (min-width: 992px){
        max-width: 50%;
    }
    label{
        font-size: 12px;
        display: block;
        width: 100%;
        margin-bottom: 10px;
        sup{
            color: red;
            font-size: 10px;
        }
    }
    
    input, textarea{
        border-radius: 5px;
        display: block;
        width: 100%;
        background: #fff;
        border: 1px solid #b7b7b7;
        margin-bottom: 20px;
    }

    input{
        height: 30px;
    }
    textarea{
        height: 120px;
    }

    button{
        width: 100%;
        border: 0;
        background-color: #000;
        color: #fff;
        padding: 10px;
        text-align: center;
        border-radius: 5px;
    }
`;

export default function NewProduct() {
    const [smartphones, setSmartphones] = useState<Smartphone[]>([]);
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const data = await API.getAll();
        setSmartphones(data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
        fetchData();
    }, []);

    function handleSubmit(event) {
        event.preventDefault();
        const updateData = async () => {
          try {
            const data = await API.add(name, brand, description, image);
          } catch (error) {
            console.error(error);
          }
        };
        updateData().then(() => {
            fetchData();
            console.log('After Add: ', smartphones);
        });
    }

    const [name, updateName] = useState("");
    const [brand, updateBrand] = useState("");
    const [description, updateDescription] = useState("");
    const [image, updateImage] = useState("");

    return (
        <>
            <HeaderTitle name="Create Smartphone"/>
            <FormStyle>
              <div>
                  <form onSubmit={handleSubmit}>
                    <label>
                      Name<sup>*</sup>:
                      <input type="text" name="name" value={name} onChange={(e) => updateName(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                      Brand<sup>*</sup>:
                      <input type="text" name="brand" value={brand} onChange={(e) => updateBrand(e.target.value)} required />
                    </label>
                    <label>
                      Description<sup>*</sup>:
                      <textarea name="description" value={description} onChange={(e) => updateDescription(e.target.value)} required></textarea>
                    </label>
                    <label>
                      Image public URL<sup>*</sup>:
                      <input type="text" name="image" value={image} onChange={(e) => updateImage(e.target.value)} required />
                    </label>
                    <br />
                    <button type="submit">Submit</button>
                  </form>
              </div>
            </FormStyle>
        </>
    )
};
