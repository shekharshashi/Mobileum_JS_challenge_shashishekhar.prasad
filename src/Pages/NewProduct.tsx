import React, { useEffect, useState } from "react";
import HeaderTitle from '../Components/HeaderTitle';
import { API, Smartphone } from './api';

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
        </>
    )
};
